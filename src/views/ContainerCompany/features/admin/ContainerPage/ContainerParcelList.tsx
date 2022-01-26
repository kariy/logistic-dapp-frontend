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

const CloseIcon = styled(CloseSvg)`
    height: 28px;
`;

const Title = styled.div`
    font-weight: 600;
    font-size: 1.1rem;
`;

const ContentContainer = styled(MaxPageContainer)`
    position: relative;
    background-color: white;
    border-radius: ${(props) => props.theme.rounded.lg};
    min-height: 300px;
    max-height: 400px;
    box-shadow: 0 3px 15px #585858;

    ${SectionBreak} {
        margin: 1rem 0;
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
    const contract = useContract()?.container;

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
                                {data ? (
                                    data.map((item, index) => (
                                        <div>item {index}</div>
                                    ))
                                ) : isLoading ? (
                                    <div>loading</div>
                                ) : (
                                    <div>not items</div>
                                )}
                            </div>
                        </ContentContainer>
                    )}
                />
            </Background>
        </Container>
    );
}

export default ContainerParcelList;
