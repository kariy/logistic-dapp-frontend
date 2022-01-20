import styled from "styled-components";
import { PageHeader, SectionHeader } from "../../../../../../components/styled";
import { Container } from "../../../../../../types";
import ItemDetails from "../../../../../components/ItemDetails";
import { useContainerContract } from "../../../../providers/ContainerContractProvider";

// @ts-ignore
import { ReactComponent as UpArrowSvg } from "../../../../../../assets/svgs/up-right-corner-arrow.svg";
import PageBackButton from "../../../../../components/PageBackButton";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

const ContainerStyled = styled.div`
    ${SectionHeader} {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 1rem;

        & > :nth-child(2) {
            text-transform: none;
            color: inherit;
            font-weight: 400;
            font-size: 0.75em;

            &:hover {
                text-decoration: underline;
            }
        }
    }
`;

const ProgressArrow = styled(UpArrowSvg)`
    margin-left: 5px;
`;

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

function ContainerPage(props: any) {
    const contract = useContainerContract();

    const { data, isLoading } = useQuery<Container>("containerData", () =>
        contract.methods.getContainerOf(props.match.params.id).call()
    );

    return (
        <ContainerStyled>
            <PageHeader>
                <PageBackButton />
            </PageHeader>
            <SectionHeader>
                <span>Container {props.match.params.id}</span>

                <Link to={`/container-app/track/${props.match.params.id}`}>
                    View progress
                    <ProgressArrow />
                </Link>
            </SectionHeader>
            <ContentWrapper>
                {data ? (
                    <ItemDetails item={data} />
                ) : isLoading ? (
                    <div>Loading</div>
                ) : (
                    <div>Not found</div>
                )}
            </ContentWrapper>
        </ContainerStyled>
    );
}

export default ContainerPage;
