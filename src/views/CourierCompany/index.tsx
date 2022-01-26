import { MaxPageContainer, PageContainer } from "../../components/styled";
import CourierNavbar from "./components/CourierNavbar";
import CourierAppRouter from "./CourierAppRouter";

function CourierApp() {
    return (
        <PageContainer>
            <CourierNavbar />
            <MaxPageContainer>
                <CourierAppRouter />
            </MaxPageContainer>
        </PageContainer>
    );
}

export default CourierApp;
