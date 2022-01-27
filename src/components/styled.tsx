import styled from "styled-components";

export const PageContainer = styled.div`
    height: 100vh;
    position: relative;
`;

export const MaxPageContainer = styled.div`
    width: min(90%, 600px);
    margin: 0 auto;
    padding-bottom: 6rem;
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
    background-color: ${(props) => props.theme.colors.black};
    color: ${(props) => props.theme.colors.white};
    border-radius: ${(props) => props.theme.rounded.md};
    box-shadow: 0 0 15px #c0c0c0;
    padding: 0.8em 1.2em;
    margin-top: 1rem;
    margin-bottom: 2rem;
    font-weight: 600;
`;

export const MainButton = styled.button`
    border: none;
    border-radius: ${(props) => props.theme.rounded.full};
    font-weight: 600;
    font-size: 0.9rem;
    display: block;
    margin: 0 auto;
    padding: 1em 2.5em;
    border: 1px solid #b9b9b9;
    background-color: white;

    &:hover:enabled {
        background-color: #dbdbdb;
    }
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
    background-color: white;
    width: 100%;
    padding: 0.9em 1em;
    margin-top: 0.7rem;
    margin-bottom: 1.5rem;
    display: block;
    border: 1px solid ${(props) => props.theme.colors.grey};
    border-radius: ${(props) => props.theme.rounded.md};
`;
