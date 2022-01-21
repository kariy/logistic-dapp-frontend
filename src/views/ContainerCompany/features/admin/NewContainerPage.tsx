import { PageHeader } from "../../../../components/styled";
import { useContract } from "../../../../providers/ContractProvider";
import { useUser } from "../../../../providers/UserProvider";

import NewItemForm, {
    NewItemSubmitHandler,
    TNewContainerFieldValues,
} from "../../../components/NewItemForm";
import PageBackButton from "../../../components/PageBackButton";

function NewContainerPage() {
    const user = useUser();
    const container = useContract()?.container;

    const onSubmit: NewItemSubmitHandler = function (
        data: TNewContainerFieldValues,
        reset
    ) {
        container.methods
            .createContainer(
                data.shipmentType,
                data.countryDestination,
                data.receiverAddress,
                data.locName
            )
            .send({ from: user?.address })
            .then((res: any) => {
                // handle call success here
                reset();
            });
    };

    return (
        <div>
            <PageHeader>
                <PageBackButton />
            </PageHeader>
            <NewItemForm
                onSubmit={onSubmit}
                itemType="Container"
                formTitle="New Container"
            />
        </div>
    );
}

export default NewContainerPage;
