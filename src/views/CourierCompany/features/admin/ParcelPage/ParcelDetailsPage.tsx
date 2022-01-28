import ItemDetails from "../../../../components/ItemDetails";

import { useContract } from "../../../../../providers/ContractProvider";
import SubPage from "../../../../components/SubPage";
import QueryRenderProp from "../../../../../components/QueryRenderProp";
import { useCallback } from "react";

import { Parcel } from "../../../../../types";
import styled from "styled-components";

import ItemDetailsHeader from "../../../../components/ItemDetailsHeader";
import { ClipLoader } from "../../../../../components/Loaders";

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 300px;
`;

interface Props {
    match: any;
}

function ParcelDetailsPage({ match }: Props) {
    const contract = useContract()?.courier;

    const queryFn = useCallback(
        () => contract.methods.getItemOf(match.params.id).call(),
        [contract, match]
    );

    return (
        <QueryRenderProp<Parcel>
            queryFn={queryFn}
            queryKey={`query_container_${match.params.id}`}
            render={({ data, isLoading }) => (
                <SubPage
                    header={
                        <ItemDetailsHeader id={match.params.id} type="Parcel" />
                    }
                >
                    <ContentWrapper>
                        {data ? (
                            <ItemDetails item={data} match={match} />
                        ) : isLoading ? (
                            <ClipLoader />
                        ) : (
                            <div>Not found</div>
                        )}
                    </ContentWrapper>
                </SubPage>
            )}
        />
    );
}

export default ParcelDetailsPage;
