import { Link } from "react-router-dom";
import styled from "styled-components";

// @ts-ignore
import { ReactComponent as UpArrowSvg } from "../../assets/svgs/up-right-corner-arrow.svg";
import { ItemType } from "../../types";

const CustomHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    & > :nth-child(2) {
        text-transform: none;
        color: inherit;
        font-weight: 400;
        font-size: 0.75em;

        &:hover {
            text-decoration: underline;
        }
    }
`;

const ProgressArrow = styled(UpArrowSvg)`
    height: 7px;
    margin-left: 4px;
    color: ${(props) => props.theme.colors.white};
`;

interface Props {
    type: ItemType;
    id: number;
}

function ItemDetailsHeader({ type, id }: Props) {
    const appStr = type === "Container" ? "container-app" : "courier-app";

    return (
        <CustomHeader>
            <span>
                {type} {id}
            </span>
            <Link to={`/${appStr}/track/${id}`}>
                View progress
                <ProgressArrow />
            </Link>
        </CustomHeader>
    );
}

export default ItemDetailsHeader;
