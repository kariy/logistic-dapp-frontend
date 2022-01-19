import { SubmitHandler, useForm } from "react-hook-form";
import styled from "styled-components";

const SearchContainer = styled.div`
    border-radius: ${(props) => props.theme.rounded.lg};
    display: flex;
    height: 50px;
    padding: 0.3rem;
    border: 1px solid ${(props) => props.theme.colors.grey};
`;

const Input = styled.input`
    flex: 1;
    padding: 0 1rem;
    outline: none;
    border: none;
`;

const Button = styled.button`
    width: 115px;
    border-radius: ${(props) => props.theme.rounded.lg};
    border: none;
    cursor: pointer;
`;

export type TTrackFieldValues = {
    id: number;
};

interface Props {
    onSubmit: SubmitHandler<TTrackFieldValues>;
    placeholder: string;
}

function TrackSearchForm({ onSubmit, placeholder }: Props) {
    const { register, handleSubmit } = useForm<TTrackFieldValues>();

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <SearchContainer>
                <Input
                    {...register("id", { required: true })}
                    type="number"
                    min={1}
                    placeholder={placeholder}
                />
                <Button type="submit">Track</Button>
            </SearchContainer>
        </form>
    );
}

export default TrackSearchForm;
