import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
    MainButton,
    PageHeader,
    PageTitle,
} from "../../../../components/styled";
import { useContract } from "../../../../providers/ContainerContractProvider";
import ItemList from "../../../components/ItemList";

function ContainerListPage(props: any) {
    const [ids, setIds] = useState<number[]>([]);
    const container = useContract()?.container;

    useEffect(() => {
        container.methods
            .getTotalContainers()
            .call()
            .then((total: number) => {
                const newIds = [];

                for (let i = 1; i <= total; i++) newIds.push(i);

                setIds(newIds);
            });
    }, [container]);

    return (
        <div>
            <PageHeader>
                <PageTitle>Container List</PageTitle>
            </PageHeader>

            <ItemList itemIds={ids} itemType="Container" />

            <Link to={`${props.match.path}/new`}>
                <MainButton>Create new container</MainButton>
            </Link>
        </div>
    );
}

export default ContainerListPage;
