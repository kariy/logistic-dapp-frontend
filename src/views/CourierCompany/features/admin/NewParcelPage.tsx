import { toast } from "react-toastify";
import { PageHeader } from "../../../../components/styled";
import { useContract } from "../../../../providers/ContractProvider";
import { useUser } from "../../../../providers/UserProvider";
import { useWeb3 } from "../../../../providers/Web3Provider";

import NewItemForm, {
    NewItemSubmitHandler,
    TNewParcelFieldValues,
} from "../../../components/NewItemForm";
import PageBackButton from "../../../components/PageBackButton";

function NewParcelPage() {
    const web3 = useWeb3();
    const user = useUser();
    const contract = useContract()?.courier;

    const onSubmit: NewItemSubmitHandler = function (
        data: TNewParcelFieldValues,
        reset
    ) {
        contract.methods
            .createItem(
                data.shipmentType,
                data.countryDestination,
                data.receiverAddress,
                data.locName,
                data.parcelPayee,
                web3?.utils.toWei(`${data.parcelPrice}`)
            )
            .send({ from: user?.address })
            .once("transactionHash", () => {
                toast.info("Parcel creation request is being processed");
                reset();
            })
            .once("receipt", (res: any) =>
                toast.success(
                    `Parcel ID ${res.events.NewItem.returnValues.itemId} is successfully created`
                )
            );
    };

    return (
        <div>
            <PageHeader>
                <PageBackButton />
            </PageHeader>
            <NewItemForm
                onSubmit={onSubmit}
                itemType="Parcel"
                formTitle="New parcel"
                buttonText="Create parcel"
            />
        </div>
    );
}

export default NewParcelPage;
