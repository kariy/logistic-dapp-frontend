import styled from "styled-components";

// @ts-ignore
import { ReactComponent as PageBackSvg } from "../assets/svgs/pageBackButton.svg";

export const PageContainer = styled.div`
    height: 100%;
`;

export const MaxPageContainer = styled(PageContainer)`
    width: min(90%, 600px);
    margin: 0 auto;
`;

export const PageHeader = styled.header`
    /* outline: 1px solid blue; */
    margin: 3.7rem 0;
    display: flex;
    align-items: center;
    gap: 20px;
`;

export const PageTitle = styled.h1`
    /* outline: 1px solid green; */
    margin: 1.5rem auto;
    font-size: 1.8rem;
    font-weight: 500;
    text-transform: uppercase;
`;

export const SectionBreak = styled.hr`
    margin: 2rem 0;
    border-width: 1;
`;

export const SectionHeader = styled.div`
    background-color: #c5c5c5;
    border-radius: ${(props) => props.theme.rounded.md};
    padding: 0.6em 1.2em;
    margin-top: 1rem;
    margin-bottom: 2rem;
    font-weight: 600;
    text-transform: capitalize;
`;

export const MainButton = styled.button`
    border: none;
    border-radius: ${(props) => props.theme.rounded.full};
    font-weight: 600;
    font-size: 0.9rem;
    display: block;
    margin: 0 auto;
    padding: 1em 2.5em;

    &:hover {
        background-color: #dbdbdb;
    }
`;

export const PageBackButton = styled(PageBackSvg)`
    cursor: pointer;
    height: 17px;
`;

export const Label = styled.label`
    display: block;
    font-size: 0.9rem;
    font-weight: 500;

    .label-remarks {
        font-size: 0.8em;
        font-style: italic;
    }
`;

export const Input = styled.input`
    width: 100%;
    padding: 0.9em 1em;
    margin-top: 0.7rem;
    margin-bottom: 1.5rem;
    display: block;
    border: 1px solid ${(props) => props.theme.colors.grey};
    border-radius: ${(props) => props.theme.rounded.md};
`;
