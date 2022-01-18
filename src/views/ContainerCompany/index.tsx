import styled from "styled-components";
import Navbar, { TNavLink } from "../../components/Navbar";
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
            <Navbar links={navlinks} />
            <MaxPageContainer>
                <ContainerAppRouter />
            </MaxPageContainer>
        </Container>
    );
}

export default ContainerApp;
