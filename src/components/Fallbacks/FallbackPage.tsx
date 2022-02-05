import { Link } from "react-router-dom";
import styled from "styled-components";
import { MaxPageContainer, PageContainer } from "../styled";

const LinkStyled = styled(Link)``;

const Container = styled(MaxPageContainer)`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    & ${LinkStyled} {
        margin-top: 25px;
        display: block;
        text-align: center;
    }
`;

interface Props {
    text?: string;
    render?: () => JSX.Element;
}

function FallbackPage({ text = "Something went wrong.", render }: Props) {
    return (
        <PageContainer>
            <Container>
                <div>{render ? render() : text}</div>
            </Container>
        </PageContainer>
    );
}

export default FallbackPage;
