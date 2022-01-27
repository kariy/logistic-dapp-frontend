import { useForm } from "react-hook-form";
import styled from "styled-components";
import { Input, Label } from "../../../../../components/styled";
import { useContract } from "../../../../../providers/ContractProvider";
import { useUser } from "../../../../../providers/UserProvider";
import { Country } from "../../../../../types";
import { FormSubmitHandler } from "../../../../../types/form";
import CheckpointForm, {
    TCheckpointFieldValues,
} from "../../../../components/Checkpoint/CheckpointForm";
import ItemFunction from "../../../../components/ItemFunction";

const FormWrapper = styled.div``;

const CheckpointFormWrapper = styled.div`
    margin-top: 2rem;
    padding: 1rem 2rem 2rem 2rem;
    background-color: #e9e9e9;
    border-radius: ${(props) => props.theme.rounded.lg};

    & > div {
        font-weight: 700;
        margin-bottom: 1.4rem;
        text-align: center;
    }
`;

type TForwardParcelOnlyFormFieldValues = {
    containerAddress: string;
    countryDestination: Country;
};

interface Props {
    match: any;
}

function ForwardParcelPage({ match }: Props) {
    const { register, setError, watch } =
        useForm<TForwardParcelOnlyFormFieldValues>();

    const containerAddrWatch = watch("containerAddress");
    const countryDestWatch = watch("countryDestination");

    const contract = useContract()?.courier;
    const user = useUser();

    const handleSubmit: FormSubmitHandler<TCheckpointFieldValues> = function ({
        data,
        reset,
    }) {
        if (!containerAddrWatch)
            return setError(
                "containerAddress",
                { type: "required" },
                { shouldFocus: true }
            );
        if (!countryDestWatch)
            return setError(
                "countryDestination",
                { type: "required" },
                { shouldFocus: true }
            );

        contract.methods
            .forwardItemToContainer(
                containerAddrWatch,
                match.params.id,
                countryDestWatch,
                data.status,
                data.desc,
                data.locName
            )
            .send({ from: user?.address })
            .then(() => {
                reset();
            });
    };

    return (
        <ItemFunction title="Forward parcel" type="Parcel" id={match.params.id}>
            <FormWrapper>
                <Label title="Address of the Container Company to be forwarded to">
                    Container address
                    <Input type="text" {...register("containerAddress")} />
                </Label>
                <Label>
                    Destination country
                    <Input as="select" {...register("countryDestination")}>
                        <option value="">Select a country</option>
                        {Object.values(Country).map((code) => {
                            if (isNaN(Number(code))) return null;

                            return (
                                <option
                                    key={`country_option_${code}`}
                                    value={Number(code)}
                                >
                                    {Country[Number(code)]}
                                </option>
                            );
                        })}
                    </Input>
                </Label>
            </FormWrapper>
            <CheckpointFormWrapper>
                <div>Checkpoint</div>
                <CheckpointForm
                    onSubmit={handleSubmit}
                    buttonText="Initiate shipment"
                />
            </CheckpointFormWrapper>
        </ItemFunction>
    );
}

export default ForwardParcelPage;
