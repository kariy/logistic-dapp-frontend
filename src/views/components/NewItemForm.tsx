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

    .radio-card {
        font-weight: 500;
        display: flex;
        justify-content: space-between;
        padding: 1.3em 1.2em;
        border: 1px solid ${(props) => props.theme.colors.grey};
        border-radius: ${(props) => props.theme.rounded.md};
        flex: 1;
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
}

function NewItemForm({ formTitle, itemType, onSubmit }: Props) {
    const { register, handleSubmit, reset } = useForm();

    const submitCallback = (data: any) => onSubmit(data, reset);

    return (
        <Container>
            <SectionHeader>{formTitle}</SectionHeader>
            <Form onSubmit={handleSubmit(submitCallback)}>
                <fieldset>
                    <Label as="legend">Shipment type</Label>

                    <div>
                        <Label className="radio-card">
                            Domestic
                            <input
                                {...register("shipmentType", {
                                    required: {
                                        message:
                                            "Please select a shipment type!",
                                        value: true,
                                    },
                                })}
                                type="radio"
                                value="0"
                            />
                        </Label>

                        <Label className="radio-card">
                            International
                            <input
                                {...register("shipmentType", {
                                    required: {
                                        message:
                                            "Please select a shipment type!",
                                        value: true,
                                    },
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
                            required: {
                                message:
                                    "Please select the destination country!",
                                value: true,
                            },
                        })}
                        defaultValue={""}
                    >
                        <option value="">Select a country</option>
                        <option value="1">Malaysia</option>
                        <option value="2">Singapore</option>
                        <option value="3">Thailand</option>
                        <option value="4">Indonesia</option>
                        <option value="5">China</option>
                    </Input>
                </Label>
                <Label>
                    Location name
                    <Input
                        {...register("locName", {
                            required: {
                                message: "Location name cannot be empty!",
                                value: true,
                            },
                        })}
                        autoComplete="off"
                        type="text"
                    />
                </Label>
                <Label>
                    Receiver address
                    <Input
                        {...register("receiverAddress", {
                            required: {
                                message: "Receiver address cannot be empty!",
                                value: true,
                            },
                        })}
                        autoComplete="off"
                        type="text"
                    />
                </Label>

                {itemType === "Parcel" ? (
                    <>
                        <Label>
                            Payee address
                            <Input
                                {...register("parcelPayee", {
                                    required: {
                                        message:
                                            "Payee address cannot be empty!",
                                        value: true,
                                    },
                                })}
                                autoComplete="off"
                                type="text"
                            />
                        </Label>
                        <Label>
                            Parcel price{" "}
                            <span className="label-remarks">(in Ether)</span>
                            <Input
                                {...register("parcelPrice", {
                                    required: {
                                        message:
                                            "Parcel price cannot be empty!",
                                        value: true,
                                    },
                                    min: {
                                        message: "Price cannot be less than 0!",
                                        value: 0,
                                    },
                                    valueAsNumber: true,
                                })}
                                type="number"
                                placeholder="0"
                            />
                        </Label>
                    </>
                ) : null}

                <MainButton type="submit">Create container</MainButton>
            </Form>
        </Container>
    );
}

export default NewItemForm;
