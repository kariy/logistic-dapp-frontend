import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { MainButton } from "../../../../components/styled";
import { useContract } from "../../../../providers/ContractProvider";
import ItemList from "../../../components/ItemList";
import MainPage from "../../../components/MainPage";

function ParcelListPage(props: any) {
    const [ids, setIds] = useState<number[]>([]);
    const contract = useContract()?.courier;

    useEffect(() => {
        contract.methods
            .getTotalItems()
            .call()
            .then((total: number) => {
                const newIds = [];

                for (let i = 1; i <= total; i++) newIds.push(i);

                setIds(newIds);
            });
    }, [contract]);

    return (
        <MainPage title="Parcel List">
            <ItemList itemIds={ids} itemType="Parcel" />

            <Link to={`${props.match.path}/new`}>
                <MainButton>Create new parcel</MainButton>
            </Link>
        </MainPage>
    );
}

export default ParcelListPage;
