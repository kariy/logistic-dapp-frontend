import { SubmitHandler, useForm, UseFormReset } from "react-hook-form";
import styled from "styled-components";
import { Label, MainButton } from "../../../components/styled";
import { useUser } from "../../../providers/UserProvider";
import { FormSubmitHandler } from "../../../types/form";
import AddCheckpointFormFields from "./AddCheckpointFormFields";

const Form = styled.form`
    & > div {
        margin-bottom: 3.5rem;
    }

    .duo-wrapper {
        width: 100%;
        display: flex;
        gap: 20px;

        & > ${Label} {
            flex: 1;
        }
    }
`;

export type TCheckpointFieldValues = {
    locName: string;
    status: string;
    desc: string;
    operator: string;
};

// export type FormSubmitHandler<T> = (data: T, reset: UseFormReset<T>) => any;

interface Props {
    // onSubmit: SubmitHandler<TCheckpointFieldValues>;
    onSubmit: FormSubmitHandler<TCheckpointFieldValues>;
    buttonText?: string;
}

function AddCheckpointForm({ onSubmit, buttonText = "Add checkpoint" }: Props) {
    const { register, handleSubmit, reset } = useForm<TCheckpointFieldValues>();
    const user = useUser();

    const submitCallback: SubmitHandler<TCheckpointFieldValues> = (data) =>
        onSubmit(data, reset);

    return (
        <Form onSubmit={handleSubmit(submitCallback)}>
            <div>
                <AddCheckpointFormFields
                    register={register}
                    defaultOperator={user?.address ? user?.address : undefined}
                />
            </div>

            <MainButton type="submit">{buttonText}</MainButton>
        </Form>
    );
}

export default AddCheckpointForm;
