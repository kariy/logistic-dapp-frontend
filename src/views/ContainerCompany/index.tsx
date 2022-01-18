import styled from "styled-components";
import NavBar, { TNavLink } from "../../components/NavBar";
import { MaxPageContainer, PageContainer } from "../../components/styled";
import ContainerAppRouter from "./ContainerAppRouter";

const Container = styled(PageContainer)``;

const navlinks: TNavLink[] = [
    { name: "Admin", path: "/admin" },
    { name: "Track", path: "/track" },
];

function ContainerApp() {
    return (
        <Container>
            <NavBar links={navlinks} />
            <MaxPageContainer>
                <ContainerAppRouter />
            </MaxPageContainer>
        </Container>
    );
}

export default ContainerApp;
