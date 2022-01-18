import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Container = styled.nav`
    box-shadow: 0px 2px 6px rgba(151, 151, 151, 0.25);

    #links-wrapper {
        display: flex;
        gap: 30px;
    }

    .navbar__link {
        color: black;
        text-transform: uppercase;
        text-decoration: none;
    }

    .navbar__link--active {
        border-bottom: 1px solid black;
    }
`;

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 70px;
    width: min(90%, 1300px);
    margin: 0 auto;
`;

export type TNavLink = {
    name: string;
    path: string;
};

interface Props {
    // logo: string;
    links: TNavLink[];
}

function Navbar({ links }: Props) {
    return (
        <Container>
            <Wrapper>
                <div id="logo">logo</div>
                <div id="links-wrapper">
                    {links.map((link) => (
                        <NavLink
                            to={link.path}
                            activeClassName="navbar__link--active"
                        >
                            <div className="navbar__link">{link.name}</div>
                        </NavLink>
                    ))}
                    <NavLink to="/admin" activeClassName="navbar__link--active">
                        <div className="navbar__link">Admin</div>
                    </NavLink>
                    <NavLink to="/track" activeClassName="navbar__link--active">
                        <div className="navbar__link">Track</div>
                    </NavLink>
                </div>
            </Wrapper>
        </Container>
    );
}

export default Navbar;
