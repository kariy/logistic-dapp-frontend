import ItemDetails from "../../../../components/ItemDetails";

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

interface Props {
    match: any;
}

function ContainerDetailsPage({ match }: Props) {
    const popup = useParceListToggle();

    const contract = useContract()?.container;

    const queryFn = useCallback(
        () => contract.methods.getContainerOf(match.params.id).call(),
        [contract, match]
    );

    return (
        <QueryRenderProp<Container>
            queryFn={queryFn}
            queryKey={`query_container_${match.params.id}`}
            render={({ data, isLoading, isError }) => (
                <>
                    <SubPage
                        header={
                            <ItemDetailsHeader
                                id={match.params.id}
                                type="Container"
                            />
                        }
                    >
                        <ContentWrapper>
                            {data ? (
                                <>
                                    <ItemDetails item={data} match={match} />

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
