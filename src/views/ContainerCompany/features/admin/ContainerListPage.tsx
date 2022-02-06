import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { MainButton } from "../../../../components/styled";
import { useContract } from "../../../../providers/ContractProvider";
import ItemList from "../../../components/ItemList";
import MainPage from "../../../components/MainPage";

function ContainerListPage(props: any) {
    const [ids, setIds] = useState<number[]>([]);
    const contract = useContract("Container");

    useEffect(() => {
        contract.methods
            .getTotalContainers()
            .call()
            .then((total: number) => {
                const newIds = [];

                for (let i = 1; i <= total; i++) newIds.push(i);

                setIds(newIds);
            });
    }, [contract]);

    return (
        <MainPage title="Container List">
            <ItemList itemIds={ids} itemType="Container" />

            <Link to={`${props.match.path}/new`}>
                <MainButton>Create new container</MainButton>
            </Link>
        </MainPage>
    );
}

export default ContainerListPage;
