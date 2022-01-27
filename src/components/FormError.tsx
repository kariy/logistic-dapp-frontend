import styled from "styled-components";

// @ts-ignore
import { ReactComponent as WarningSvg } from "../assets/svgs/warning.svg";

const Container = styled.div`
    margin-bottom: 18px;
    display: flex;
    align-items: center;
    color: ${(props) => props.theme.colors.error};
    font-style: italic;
    font-weight: 500;
    font-size: 0.85em;
`;

const Warning = styled(WarningSvg)`
    height: 13px;
    margin-right: 10px;
    color: ${(props) => props.theme.colors.error};
`;

interface Props {
    message: string;
}

function FormError({ message }: Props) {
    return (
        <Container>
            <Warning />
            <span>{message}</span>
        </Container>
    );
}

export default FormError;
