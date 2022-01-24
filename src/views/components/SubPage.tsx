import styled from "styled-components";
import PageBackHeader from "./PageBackHeader";
import { SectionHeader } from "../../components/styled";

const Container = styled.div``;

interface Props {
    title?: string;
    header?: JSX.Element;
}

const SubPage: React.FC<Props> = function ({ title, header, children }) {
    const customHeader = header || title || "";

    return (
        <Container>
            <PageBackHeader />
            <SectionHeader>{customHeader}</SectionHeader>
            {children}
        </Container>
    );
};

export default SubPage;
