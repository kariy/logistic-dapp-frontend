import { Link } from "react-router-dom";
import styled from "styled-components";
import { MaxPageContainer } from "../components/styled";

const Container = styled(MaxPageContainer)`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`
    width: 100%;
`;

const LinkStyled = styled(Link)`
    font-size: 1.2rem;
    flex: 1;
    text-align: center;
    padding: 2rem 1.5rem;
    border: 1px solid ${(props) => props.theme.colors.grey};
    border-radius: ${(props) => props.theme.rounded.lg};
    font-weight: 600;
    color: inherit;
    margin: 0.8rem 0;
    transition: background-color 150ms ease-in-out;

    &:hover {
        background-color: #eeeeee;
    }
`;

const Title = styled.div`
    font-weight: 700;
    font-size: 2rem;
    margin-bottom: 4rem;
    text-align: center;
`;

const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

function AppViewPage() {
    return (
        <Container>
            <Wrapper>
                <Title>Choose an application.</Title>
                <ButtonWrapper>
                    <LinkStyled to="/container-app">Container</LinkStyled>
                    <LinkStyled to="/courier-app">Courier</LinkStyled>
                </ButtonWrapper>
            </Wrapper>
        </Container>
    );
}

export default AppViewPage;
