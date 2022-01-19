import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import {
    MainButton,
    PageHeader,
    PageTitle,
} from "../../../../../../components/styled";
import ItemList from "../../../../../components/ItemList";

const ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

function ContainerListPage(props: any) {
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
