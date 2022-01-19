import styled from "styled-components";

import { MaxPageContainer, PageContainer } from "../../components/styled";
import ContainerNavbar from "./components/ContainerNavbar";
import ContainerAppRouter from "./ContainerAppRouter";
import ContainerAppProvider from "./providers";

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

function ContainerAppWithContext() {
    return (
        <ContainerAppProvider>
            <ContainerApp />
        </ContainerAppProvider>
    );
}

export default ContainerAppWithContext;
