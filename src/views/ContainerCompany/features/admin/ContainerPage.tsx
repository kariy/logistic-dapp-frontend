import styled from "styled-components";

import ItemDetails from "../../../components/ItemDetails";

// @ts-ignore
import { ReactComponent as UpArrowSvg } from "../../../../assets/svgs/up-right-corner-arrow.svg";

import { Link } from "react-router-dom";
import { useContract } from "../../../../providers/ContractProvider";
import SubPage from "../../../components/SubPage";
import QueryRenderProp from "../../../../components/QueryRenderProp";
import { useCallback } from "react";

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

function ContainerPage(props: any) {
    const contract = useContract()?.container;

    const queryFn = useCallback(
        () => contract.methods.getContainerOf(props.match.params.id).call(),
        [contract, props]
    );

    return (
        <QueryRenderProp
            queryFn={queryFn}
            queryKey="containerData"
            render={({ data, isLoading }) => (
                <SubPage
                    header={
                        <CustomHeader>
                            <span>Container {props.match.params.id}</span>
                            <Link
                                to={`/container-app/track/${props.match.params.id}`}
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
                        ) : (
                            <div>Not found</div>
                        )}
                    </ContentWrapper>
                </SubPage>
            )}
        />
    );
}

export default ContainerPage;
