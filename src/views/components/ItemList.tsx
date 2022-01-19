import { Link, useRouteMatch } from "react-router-dom";
import styled from "styled-components";
import { ItemType } from "../../types/item";

const ListItem = styled(Link)`
    color: inherit;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${(props) => props.theme.rounded.md};
    border: 1px solid ${(props) => props.theme.colors.grey};
`;

const ListWrapper = styled.div`
    height: 100%;
    padding: 1.5rem 0.8rem;
    overflow-y: scroll;

    #list__grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-auto-rows: 70px;
        gap: 0.8rem;
    }

    @media only screen and (min-width: 550px) {
        #list__grid {
            grid-template-columns: repeat(3, 1fr);
        }
    }
`;

const ListContainer = styled.div`
    overflow: hidden;
    border-radius: ${(props) => props.theme.rounded.lg};
    height: 350px;
    border: 1px solid ${(props) => props.theme.colors.grey};
`;

const Container = styled.div`
    margin-bottom: 2rem;

    ${ListContainer} {
        margin-bottom: 1.2rem;
    }

    #item__total {
        font-weight: 500;
        font-size: 0.9rem;

        span {
            text-transform: lowercase;
        }
    }
`;

interface Props {
    itemType: ItemType;
    itemIds: number[];
}

function ItemList({ itemIds: ids, itemType: type }: Props) {
    const match = useRouteMatch();

    return (
        <Container>
            <ListContainer>
                <ListWrapper>
                    <div id="list__grid">
                        {ids.map((id) => (
                            <ListItem
                                to={`${match.path}/${id}`}
                                key={`item_${id}`}
                            >{`${type} ${id}`}</ListItem>
                        ))}
                    </div>
                </ListWrapper>
            </ListContainer>
            <div id="item__total">
                Total <span>{type}</span>(s) : {ids.length}
            </div>
        </Container>
    );
}

export default ItemList;
