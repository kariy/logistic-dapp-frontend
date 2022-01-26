import { MaxPageContainer, PageContainer } from "../../components/styled";
import ContainerNavbar from "./components/ContainerNavbar";
import ContainerAppRouter from "./ContainerAppRouter";

function ContainerApp() {
    return (
        <PageContainer>
            <ContainerNavbar />
            <MaxPageContainer>
                <ContainerAppRouter />
            </MaxPageContainer>
        </PageContainer>
    );
}

export default ContainerApp;
