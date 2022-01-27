import { UseFormRegister } from "react-hook-form";
import { Input, Label } from "../../../components/styled";
import { useWeb3 } from "../../../providers/Web3Provider";

import { TCheckpointFieldValues } from "./CheckpointForm";

interface Props {
    register: UseFormRegister<TCheckpointFieldValues>;
    disableOperator?: boolean;
}

function CheckpointFormFields({ register, disableOperator = false }: Props) {
    const web3 = useWeb3();
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
                    <Input
                        {...register("desc")}
                        type="text"
                        placeholder="Optional"
                    />
                </Label>
            </div>
            <Label>
                Operator
                <Input
                    {...register("operator", {
                        validate: (value) =>
                            web3?.utils.isAddress(value) ||
                            "Please insert a valid Ethereum address!",
                    })}
                    disabled={disableOperator}
                    type="text"
                />
            </Label>
        </>
    );
}

export default CheckpointFormFields;
