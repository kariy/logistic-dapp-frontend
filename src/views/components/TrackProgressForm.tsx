import styled from "styled-components";
import { Fragment } from "react";

import { Checkpoint } from "../../types/item";
import { SectionHeader } from "../../components/styled";

const Container = styled.div``;

const TableWrapper = styled.div`
    min-height: 200px;
    overflow-x: auto;
`;

const GridTable = styled.div`
    font-size: 0.9rem;
    width: 600px;
    padding-bottom: 1rem;
    display: grid;
    column-gap: 10px;
    row-gap: 10px;
    grid-template-columns: 1fr 1.5fr 1.5fr 2fr 2fr;
    grid-template-rows: 35px;
    grid-auto-rows: min-content;

    div {
        /* outline: 1px solid yellow; */
        padding: 0.5rem;
        overflow-x: hidden;
    }

    .grid__header {
        font-weight: 500;
        display: flex;
        align-items: center;
        justify-content: center;
        border-bottom: 1px solid black;
    }

    .col--operator {
        & > div {
            width: 90%;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }
`;

interface Props {
    checkpoints: Checkpoint[];
}

function TrackProgressForm({ checkpoints }: Props) {
    return (
        <Container>
            <SectionHeader>Shipment progress</SectionHeader>

            <TableWrapper>
                <GridTable>
                    <div className="grid__header">Timestamp</div>
                    <div className="grid__header">Location</div>
                    <div className="grid__header">Status</div>
                    <div className="grid__header">Remarks</div>
                    <div className="grid__header">Operator</div>
                    {checkpoints.map((checkpoint, idx) => (
                        <Fragment key={`checkpoint_${idx}`}>
                            <div>
                                {new Date(
                                    checkpoint.timestamp * 1000
                                ).toUTCString()}
                            </div>
                            <div>{checkpoint.location}</div>
                            <div>{checkpoint.status}</div>
                            <div>{checkpoint.desc}</div>
                            <div
                                className="col--operator"
                                title={checkpoint.operator}
                            >
                                <div>{checkpoint.operator}</div>
                            </div>
                        </Fragment>
                    ))}
                </GridTable>
            </TableWrapper>
        </Container>
    );
}

export default TrackProgressForm;
