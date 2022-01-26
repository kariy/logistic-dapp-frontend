import { Link } from "react-router-dom";
import styled from "styled-components";
import { MaxPageContainer, PageContainer } from "./styled";

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

function FallbackPage() {
    return (
        <PageContainer>
            <Container>
                <div>
                    <div>Error 404 | Page not found</div>
                    <LinkStyled to="/">{`Return to app selector >`}</LinkStyled>
                </div>
            </Container>
        </PageContainer>
    );
}

export default FallbackPage;
