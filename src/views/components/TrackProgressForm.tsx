import styled from "styled-components";
import { useCallback } from "react";

import { Checkpoint, ItemType } from "../../types/item";
import { SectionHeader } from "../../components/styled";
import { useContract } from "../../providers/ContractProvider";
import QueryRenderProp from "../../components/QueryRenderProp";

const Container = styled.div``;

const TableWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 200px;
`;

const Table = styled.table`
    width: 100%;
    font-size: 0.9rem;

    thead > tr {
        margin-bottom: 0.7rem;
    }

    tr {
        display: flex;
        gap: 10px;
    }

    td,
    th {
        padding: 0.5em 0;
    }

    th {
        padding-top: 0;
        font-weight: 500;
        border-bottom: 1px solid black;
    }

    .td--1 {
        flex: 1;
    }

    .td--2 {
        flex: 1.5;
    }
`;

interface Props {
    itemId: string | number;
    itemType: ItemType;
}

function TrackProgressForm({ itemId: id, itemType: type }: Props) {
    const contractType = type === "Container" ? "container" : "parcel";

    // @ts-ignore
    const contract = useContract()[contractType];

    const queryFn = useCallback(
        () => contract.methods.getCheckpointsOf(id).call(),
        [contract, id]
    );

    return (
        <Container>
            <SectionHeader>Shipment progress</SectionHeader>

            <QueryRenderProp<Checkpoint[]>
                queryFn={queryFn}
                queryKey={"itemProgress"}
                render={({ data, isLoading }) => (
                    <TableWrapper>
                        {data ? (
                            <Table>
                                <thead>
                                    <tr>
                                        <th className="td--1">Timestamp</th>
                                        <th className="td--1">Location</th>
                                        <th className="td--2">Status</th>
                                        <th className="td--2">Remarks</th>
                                        <th className="td--2">Operator</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((checkpoint, idx) => (
                                        <tr key={`checkpoint_${idx}`}>
                                            <td className="td--1">
                                                {new Date(
                                                    checkpoint.timestamp * 1000
                                                ).toUTCString()}
                                            </td>
                                            <td className="td--1">
                                                {checkpoint.location}
                                            </td>
                                            <td className="td--2">
                                                {checkpoint.status}
                                            </td>
                                            <td className="td--2">
                                                {checkpoint.desc}
                                            </td>
                                            <td className="td--2 td__operator">
                                                {checkpoint.operator}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        ) : isLoading ? (
                            <div>Loading</div>
                        ) : (
                            <div>Not found</div>
                        )}
                    </TableWrapper>
                )}
            />
        </Container>
    );
}

export default TrackProgressForm;
