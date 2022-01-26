import { SectionBreak } from "../../components/styled";
import { ItemType } from "../../types";
import SubPage from "./SubPage";

interface Props {
    type: ItemType;
    id: string | number;
    title?: string;
}

const ItemFunction: React.FC<Props> = function ({ type, id, title, children }) {
    return (
        <SubPage title={title}>
            <div>
                {type} ID : {id}
            </div>
            <SectionBreak />
            {children}
        </SubPage>
    );
};

export default ItemFunction;
