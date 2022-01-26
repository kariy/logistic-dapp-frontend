import { useHistory } from "react-router-dom";
import styled from "styled-components";

// @ts-ignore
import { ReactComponent as PageBackSvg } from "../../assets/svgs/pageBackButton.svg";

const PageBack = styled(PageBackSvg)`
    cursor: pointer;
    height: 17px;
`;

function PageBackButton() {
    const history = useHistory();

    return (
        <div onClick={() => history.goBack()}>
            <PageBack></PageBack>
        </div>
    );
}

export default PageBackButton;
