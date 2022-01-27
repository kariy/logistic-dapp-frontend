import { useEffect } from "react";
import { FieldValues, useForm, UseFormReset } from "react-hook-form";
import styled from "styled-components";
import {
    Input,
    Label,
    MainButton,
    SectionBreak,
    SectionHeader,
} from "../../components/styled";
import { Country } from "../../types";
import { ItemType, ShipmentType } from "../../types/item";
import { ErrorMessage } from "@hookform/error-message";
import { useWeb3 } from "../../providers/Web3Provider";
import FormError from "../../components/FormError";

const Container = styled.div``;

const Form = styled.form`
    fieldset {
        border: none;
        padding-inline: unset;
        padding-block: unset;
        margin-inline: unset;

        & > div {
            display: flex;
            gap: 15px;
        }
    }

    legend {
        padding-inline: unset;
        margin-bottom: 0.8rem;
    }

    ${Label}.radio-card {
        font-weight: 500;
        display: flex;
        justify-content: space-between;
        padding: 1.3em 1.2em;
        border: 1px solid ${(props) => props.theme.colors.grey};
        border-radius: ${(props) => props.theme.rounded.md};
        flex: 1;
    }

    .radio-card--selected {
        background-color: red;
    }

    ${MainButton} {
        margin-top: 3.5rem;
    }
`;

export type TNewItemFieldValues = {
    shipmentType: ShipmentType;
    countryDestination: Country;
    locName: string;
    receiverAddress: string;
};

export interface TNewContainerFieldValues extends TNewItemFieldValues {}

export interface TNewParcelFieldValues extends TNewItemFieldValues {
    parcelPrice: number;
    parcelPayee: string;
}

export type NewItemSubmitHandler = (
    data: any,
    reset: UseFormReset<FieldValues>
) => void;

interface Props {
    itemType: ItemType;
    formTitle: string;
    onSubmit: NewItemSubmitHandler;
    buttonText?: string;
}

function NewItemForm({
    formTitle,
    itemType,
    onSubmit,
    buttonText = "Create",
}: Props) {
    const web3 = useWeb3();
    const {
        register,
        handleSubmit,
        reset,
        watch,
        setValue,
        formState: { errors },
    } = useForm();
    const shipmentType = watch("shipmentType");

    const submitCallback = (data: any) => onSubmit(data, reset);

    useEffect(() => {
        if (Number(shipmentType) === ShipmentType.Domestic)
            setValue("countryDestination", 1);
    }, [shipmentType, setValue]);

    // useEffect(() => {
    //     console.log("errors", formState.errors);
    // }, [formState]);

    return (
        <Container>
            <SectionHeader>{formTitle}</SectionHeader>
            <Form onSubmit={handleSubmit(submitCallback)}>
                <fieldset>
                    <Label as="legend">Shipment type</Label>

                    <div>
                        <Label className="radio-card ">
                            Domestic
                            <input
                                {...register("shipmentType", {
                                    required: true,
                                    valueAsNumber: true,
                                })}
                                type="radio"
                                value="0"
                            />
                        </Label>

                        <Label className="radio-card">
                            International
                            <input
                                {...register("shipmentType", {
                                    required: true,
                                    valueAsNumber: true,
                                })}
                                type="radio"
                                value="1"
                            />
                        </Label>
                    </div>
                </fieldset>
                <SectionBreak />
                <Label>
                    Country destination
                    <Input
                        as="select"
                        {...register("countryDestination", {
                            required: true,
                            valueAsNumber: true,
                        })}
                        disabled={
                            shipmentType === undefined ||
                            Number(shipmentType) === ShipmentType.Domestic
                                ? true
                                : false
                        }
                    >
                        {Number(shipmentType) === ShipmentType.Domestic ? (
                            <option value="1" selected>
                                Malaysia
                            </option>
                        ) : Number(shipmentType) ===
                          ShipmentType.International ? (
                            <>
                                <option value="">Select a country</option>
                                <option value="2">Singapore</option>
                                <option value="3">Thailand</option>
                                <option value="4">Indonesia</option>
                                <option value="5">China</option>
                            </>
                        ) : (
                            <option value="">Select a shipment type</option>
                        )}
                    </Input>
                </Label>
                <Label>
                    Location name
                    <Input
                        {...register("locName", {
                            required: true,
                        })}
                        autoComplete="off"
                        type="text"
                    />
                </Label>
                <Label>
                    Receiver address
                    <Input
                        {...register("receiverAddress", {
                            required: true,
                            validate: (value) =>
                                web3?.utils.isAddress(value) ||
                                "Please insert a valid Ethereum address!",
                        })}
                        autoComplete="off"
                        type="text"
                    />
                </Label>

                <ErrorMessage
                    name="receiverAddress"
                    errors={errors}
                    render={({ message }) =>
                        message ? <FormError message={message} /> : null
                    }
                />

                {itemType === "Parcel" ? (
                    <>
                        <Label>
                            Payee address
                            <Input
                                {...register("parcelPayee", {
                                    required: true,
                                    validate: (value) =>
                                        web3?.utils.isAddress(value) ||
                                        "Please insert a valid Ethereum address!",
                                })}
                                autoComplete="off"
                                type="text"
                            />
                        </Label>

                        <ErrorMessage
                            name="parcelPayee"
                            errors={errors}
                            render={({ message }) =>
                                message ? <FormError message={message} /> : null
                            }
                        />
                        <Label>
                            Parcel price{" "}
                            <span className="label-remarks">(in Ether)</span>
                            <Input
                                {...register("parcelPrice", {
                                    required: true,
                                    min: 0,
                                    valueAsNumber: true,
                                })}
                                type="number"
                                placeholder="0"
                                step={0.0001}
                            />
                        </Label>
                    </>
                ) : null}

                <MainButton type="submit">{buttonText}</MainButton>
            </Form>
        </Container>
    );
}

export default NewItemForm;
