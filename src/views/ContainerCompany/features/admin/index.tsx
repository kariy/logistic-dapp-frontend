import { Route } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div``;

function Admin(props: any) {
    return (
        <Container>
            admin
            <Route path={`${props.match.path}/containers/new`} />
            <Route path={`${props.match.path}/containers/:id`} />
        </Container>
    );
}

export default Admin;
