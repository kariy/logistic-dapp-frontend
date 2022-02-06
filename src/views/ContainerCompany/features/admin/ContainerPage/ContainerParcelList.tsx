import { useCallback } from "react";
import styled from "styled-components";

import QueryRenderProp from "../../../../../components/QueryRenderProp";
import {
    MaxPageContainer,
    SectionBreak,
} from "../../../../../components/styled";
import { useContract } from "../../../../../providers/ContractProvider";
import { ContainerItem } from "../../../../../types";
import { useParceListToggle } from "./ParcelListToggleProvider";

// @ts-ignore
import { ReactComponent as CloseSvg } from "../../../../../assets/svgs/close.svg";

const ParcelCard = styled.div`
    font-size: 0.9em;
    border: 1px solid ${(props) => props.theme.colors.grey};
    border-radius: ${(props) => props.theme.rounded.md};
    padding: 0.7em 0.8em;
    margin-bottom: 10px;

    div:nth-of-type(1),
    div:nth-of-type(2) {
        margin-bottom: 5px;
    }
`;

const CloseIcon = styled(CloseSvg)`
    height: 28px;
`;

const Title = styled.div`
    font-weight: 600;
    font-size: 1.1rem;
`;

const Key = styled.span`
    font-weight: 500;
`;

const Value = styled.span``;

const ContentContainer = styled(MaxPageContainer)`
    padding: unset;
    position: relative;
    background-color: white;
    border-radius: ${(props) => props.theme.rounded.lg};
    box-shadow: 0 3px 15px #585858;

    ${SectionBreak} {
        margin: 1rem 0;
    }

    #list-wrapper {
        /* outline: 1px solid blue; */
        overflow-y: auto;
        min-height: 300px;
        max-height: 400px;
        display: flex;
        flex-direction: column;

        & > .list-state-indicator {
            margin: auto 0;
            align-self: center;
        }
    }

    #content-wrapper {
        /* outline: 1px solid green; */
        margin: 2rem 1.5rem;
    }

    #parcel-list-close-btn {
        position: absolute;
        cursor: pointer;
        top: -13px;
        left: -13px;
    }

    .info-text {
        font-size: 0.9em;
        font-style: italic;
    }
`;

const Background = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    backdrop-filter: blur(6px) brightness(60%);
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
`;

const Container = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
`;

interface Props {
    containerId: number;
}

function ContainerParcelList({ containerId: id }: Props) {
    const popup = useParceListToggle();
    const contract = useContract("Container");

    const queryFn = useCallback(
        () => contract.methods.getItemsOf(id).call(),
        [id, contract]
    );
    return (
        <Container>
            <Background>
                <QueryRenderProp<ContainerItem[]>
                    queryFn={queryFn}
                    queryKey="containerParcels"
                    render={({ data, isLoading }) => (
                        <ContentContainer>
                            <div
                                id="parcel-list-close-btn"
                                onClick={() => popup?.dispatch(false)}
                            >
                                <CloseIcon />
                            </div>

                            <div id="content-wrapper">
                                <Title>Parcels</Title>
                                <SectionBreak />
                                <div id="list-wrapper">
                                    {data?.length ? (
                                        data.map((item, index) => (
                                            <ParcelCard>
                                                <div>
                                                    <Key>Courier : </Key>
                                                    <Value>
                                                        {item.courierAddress}
                                                    </Value>
                                                </div>
                                                <div>
                                                    <Key>
                                                        Parcel ID{" "}
                                                        <span className="info-text">
                                                            (in Courier)
                                                        </span>{" "}
                                                        :{" "}
                                                    </Key>
                                                    <Value>
                                                        {item.courierItemId}
                                                    </Value>
                                                </div>
                                                <div>
                                                    <Key>Date created : </Key>
                                                    <Value>
                                                        {new Date(
                                                            Number(
                                                                item.dateCreated
                                                            ) * 1000
                                                        ).toUTCString()}
                                                    </Value>
                                                </div>
                                            </ParcelCard>
                                        ))
                                    ) : isLoading ? (
                                        <div className="list-state-indicator">
                                            Loading
                                        </div>
                                    ) : (
                                        <div className="list-state-indicator">
                                            Container is empty
                                        </div>
                                    )}
                                </div>
                            </div>
                        </ContentContainer>
                    )}
                />
            </Background>
        </Container>
    );
}

export default ContainerParcelList;
