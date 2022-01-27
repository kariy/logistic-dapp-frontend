import { UseFormRegister } from "react-hook-form";
import { Input, Label } from "../../../components/styled";

import { TCheckpointFieldValues } from "./CheckpointForm";

interface Props {
    register: UseFormRegister<TCheckpointFieldValues>;
    disableOperator?: boolean;
}

function CheckpointFormFields({ register, disableOperator = false }: Props) {
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
                    {...register("operator")}
                    disabled={disableOperator}
                    type="text"
                />
            </Label>
        </>
    );
}

export default CheckpointFormFields;
