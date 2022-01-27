import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import styled from "styled-components";
import { ErrorMessage } from "@hookform/error-message";

import { Label, MainButton } from "../../../components/styled";
import { useUser } from "../../../providers/UserProvider";
import { FormSubmitHandler } from "../../../types/form";
import CheckpointFormFields from "./CheckpointFormFields";
import FormError from "../../../components/FormError";

const Form = styled.form`
    #form-field-wrapper {
        /* margin-bottom: 2rem; */
    }

    .duo-wrapper {
        width: 100%;
        display: flex;
        gap: 20px;

        & > ${Label} {
            flex: 1;
        }
    }

    #error-wrapper {
        margin: 2rem 0;
    }
`;

export type TCheckpointFieldValues = {
    locName: string;
    status: string;
    desc: string;
    operator: string;
};

interface Props {
    onSubmit: FormSubmitHandler<TCheckpointFieldValues>;
    buttonText?: string;
}

function CheckpointForm({ onSubmit, buttonText = "Add checkpoint" }: Props) {
    const {
        register,
        handleSubmit,
        reset,
        setValue,
        setError,
        clearErrors,
        formState: { errors },
    } = useForm<TCheckpointFieldValues>();

    const user = useUser();

    useEffect(() => {
        clearErrors();
    }, [user, clearErrors]);

    useEffect(() => {
        if (user) setValue("operator", user.address || "");
    }, [user, setValue]);

    const submitCallback: SubmitHandler<TCheckpointFieldValues> = (data) =>
        onSubmit({
            data,
            reset,
            setError,
            setValue,
        });

    return (
        <Form onSubmit={handleSubmit(submitCallback)}>
            <div id="form-field-wrapper">
                <CheckpointFormFields
                    register={register}
                    disableOperator={user?.address ? true : false}
                />
            </div>

            <MainButton type="submit">{buttonText}</MainButton>
        </Form>
    );
}

export default CheckpointForm;
