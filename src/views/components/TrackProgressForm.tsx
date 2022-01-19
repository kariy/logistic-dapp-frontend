import styled from "styled-components";

import { useContainerContract } from "../ContainerCompany/providers/ContainerContractProvider";
import { useEffect, useState } from "react";
import { Checkpoint } from "../../types/item";
import { SectionHeader } from "../../components/styled";

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

function TrackProgressForm(props: any) {
    const [checkpoints, setCheckpoints] = useState<Checkpoint[]>([]);
    const [isError, setIsError] = useState(false);

    const id = props.match.params.id;
    const container = useContainerContract();

    // useEffect(() => {
    //     console.log("checkpoints", checkpoints);
    // }, [checkpoints]);

    useEffect(() => {
        container.methods
            .getCheckpointsOf(id)
            .call()
            .then((res: Checkpoint[]) => {
                setIsError(false);
                setCheckpoints(res);
            })
            .catch(() => setIsError(true));
    }, [container, id]);

    return (
        <Container>
            <SectionHeader>Shipment progress</SectionHeader>

            <TableWrapper>
                {isError ? (
                    <div>Not found</div>
                ) : (
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
                            {checkpoints.map((checkpoint, idx) => (
                                <tr key={`checkpoint_${idx}`}>
                                    <td className="td--1">
                                        {new Date(
                                            Number(1642521464 * 1000)
                                        ).toUTCString()}
                                    </td>
                                    <td className="td--1">
                                        {checkpoint.location}
                                    </td>
                                    <td className="td--2">
                                        {checkpoint.status}
                                    </td>
                                    <td className="td--2">{checkpoint.desc}</td>
                                    <td className="td--2 td__operator">
                                        {checkpoint.operator}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                )}
            </TableWrapper>
        </Container>
    );
}

export default TrackProgressForm;
