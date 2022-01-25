import ItemDetails from "../../../../components/ItemDetails";

import { Link } from "react-router-dom";
import { useContract } from "../../../../../providers/ContractProvider";
import SubPage from "../../../../components/SubPage";
import QueryRenderProp from "../../../../../components/QueryRenderProp";
import { useCallback } from "react";

import { Parcel } from "../../../../../types";
import styled from "styled-components";

// @ts-ignore
import { ReactComponent as UpArrowSvg } from "../../../../../assets/svgs/up-right-corner-arrow.svg";

const CustomHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    & > :nth-child(2) {
        text-transform: none;
        color: inherit;
        font-weight: 400;
        font-size: 0.75em;

        &:hover {
            text-decoration: underline;
        }
    }
`;

const ProgressArrow = styled(UpArrowSvg)`
    margin-left: 5px;
`;

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
                        <CustomHeader>
                            <span>Parcel {props.match.params.id}</span>
                            <Link
                                to={`/courier-app/track/${props.match.params.id}`}
                            >
                                View progress
                                <ProgressArrow />
                            </Link>
                        </CustomHeader>
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
