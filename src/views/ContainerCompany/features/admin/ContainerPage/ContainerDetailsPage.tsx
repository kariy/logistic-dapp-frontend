import ItemDetails from "../../../../components/ItemDetails";

import { Link, Route } from "react-router-dom";
import { useContract } from "../../../../../providers/ContractProvider";
import SubPage from "../../../../components/SubPage";
import QueryRenderProp from "../../../../../components/QueryRenderProp";
import { useCallback } from "react";

import { Container } from "../../../../../types";
import styled from "styled-components";

import { useParceListToggle } from "./ParcelListToggleProvider";
import ContainerParcelList from "./ContainerParcelList";
import ItemDetailsHeader from "../../../../components/ItemDetailsHeader";

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

function ContainerDetailsPage(props: any) {
    const popup = useParceListToggle();

    const contract = useContract()?.container;

    const queryFn = useCallback(
        () => contract.methods.getContainerOf(props.match.params.id).call(),
        [contract, props]
    );

    return (
        <QueryRenderProp<Container>
            queryFn={queryFn}
            queryKey="containerData"
            render={({ data, isLoading, isError }) => (
                <>
                    <SubPage
                        header={
                            <ItemDetailsHeader
                                id={props.match.params.id}
                                type="Container"
                            />
                        }
                    >
                        <ContentWrapper>
                            {data ? (
                                <>
                                    <ItemDetails
                                        item={data}
                                        match={props.match}
                                    />

                                    {popup?.state ? (
                                        <ContainerParcelList
                                            containerId={data.id}
                                        />
                                    ) : null}
                                </>
                            ) : isLoading ? (
                                <div>Loading</div>
                            ) : isError ? (
                                <div>Not found</div>
                            ) : (
                                <></>
                            )}
                        </ContentWrapper>
                    </SubPage>
                </>
            )}
        />
    );
}

export default ContainerDetailsPage;
