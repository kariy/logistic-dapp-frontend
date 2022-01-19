import {
    PageBackButton,
    PageHeader,
} from "../../../../../../components/styled";
import NewItemForm, {
    TNewContainerFieldValues,
} from "../../../../../components/NewItemForm";

function NewContainerPage() {
    const onSubmit = function (data: TNewContainerFieldValues) {
        console.log(data);
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
