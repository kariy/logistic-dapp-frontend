import { UseFormRegister } from "react-hook-form";
import { Input, Label } from "../../../components/styled";

import { TCheckpointFieldValues } from "./AddCheckpointForm";

interface Props {
    register: UseFormRegister<TCheckpointFieldValues>;
    defaultOperator?: string;
}

function AddCheckpointFormFields({ register, defaultOperator = "" }: Props) {
    return (
        <>
            <Label>
                Location name
                <Input
                    {...register("locName", {
                        required: {
                            message: "Location name cannot be empty!",
                            value: true,
                        },
                    })}
                    type="text"
                />
            </Label>

            <div className="duo-wrapper">
                <Label>
                    Status
                    <Input
                        {...register("status", {
                            required: {
                                message: "Status cannot be empty!",
                                value: true,
                            },
                            maxLength: 50,
                        })}
                        type="text"
                    />
                </Label>
                <Label>
                    Description
                    <Input {...register("desc")} type="text" />
                </Label>
            </div>
            <Label>
                Operator
                <Input
                    {...register("operator", {
                        value: defaultOperator,
                    })}
                    disabled={defaultOperator ? true : false}
                    type="text"
                />
            </Label>
        </>
    );
}

export default AddCheckpointFormFields;
