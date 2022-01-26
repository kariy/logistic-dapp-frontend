import ItemDetails from "../../../../components/ItemDetails";

import { useContract } from "../../../../../providers/ContractProvider";
import SubPage from "../../../../components/SubPage";
import QueryRenderProp from "../../../../../components/QueryRenderProp";
import { useCallback } from "react";

import { Parcel } from "../../../../../types";
import styled from "styled-components";

import ItemDetailsHeader from "../../../../components/ItemDetailsHeader";

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

function ParcelDetailsPage(props: any) {
    const contract = useContract()?.courier;

    const queryFn = useCallback(
        () => contract.methods.getItemOf(props.match.params.id).call(),
        [contract, props]
    );

    return (
        <QueryRenderProp<Parcel>
            queryFn={queryFn}
            queryKey="parcelData"
            render={({ data, isLoading, isError }) => (
                <SubPage
                    header={
                        <ItemDetailsHeader
                            id={props.match.params.id}
                            type="Parcel"
                        />
                    }
                >
                    <ContentWrapper>
                        {data ? (
                            <ItemDetails item={data} match={props.match} />
                        ) : isLoading ? (
                            <div>Loading</div>
                        ) : isError ? (
                            <div>Not found</div>
                        ) : (
                            <></>
                        )}
                    </ContentWrapper>
                </SubPage>
            )}
        />
    );
}

export default ParcelDetailsPage;
