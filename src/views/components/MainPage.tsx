import styled from "styled-components";
import { PageHeader, PageTitle } from "../../components/styled";

const Container = styled.div``;

interface Props {
    title?: string;
}

const MainPage: React.FC<Props> = function ({ title, children }) {
    return (
        <Container>
            <PageHeader>
                <PageTitle>{title}</PageTitle>
            </PageHeader>
            {children}
        </Container>
    );
};

export default MainPage;
