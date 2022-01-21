import styled from "styled-components";

import { MaxPageContainer, PageContainer } from "../../components/styled";
import ContainerNavbar from "./components/ContainerNavbar";
import ContainerAppRouter from "./ContainerAppRouter";

const Container = styled(PageContainer)``;

function ContainerApp() {
    return (
        <Container>
            <ContainerNavbar />
            <MaxPageContainer>
                <ContainerAppRouter />
            </MaxPageContainer>
        </Container>
    );
}

export default ContainerApp;
