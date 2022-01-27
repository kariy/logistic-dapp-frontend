import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { useUser } from "../providers/UserProvider";
import ConnectWalletButton from "./ConnectWallet/ConnectWalletButton";

// @ts-ignore
import { ReactComponent as PrevPageSvg } from "../assets/svgs/prevPage.svg";

const Container = styled.nav`
    background-color: ${(props) => props.theme.colors.black};
    color: white;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.25);
`;

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 70px;
    width: min(90%, 1300px);
    margin: 0 auto;
    font-size: 0.9rem;
    user-select: none;

    #site-name {
        font-size: 1.2rem;
        font-weight: 700;
        text-transform: uppercase;
    }

    & > div {
        display: flex;
        align-items: center;
    }

    #links-wrapper {
        margin-right: 2rem;
        display: flex;
        gap: 30px;
    }

    .navbar__link {
        padding: 0.3em 0;
        color: ${(props) => props.theme.colors.white};
        text-transform: uppercase;
        text-decoration: none;
    }

    .navbar__link--active {
        border-bottom: 1px solid ${(props) => props.theme.colors.white};
    }

    #useraddress-wrapper {
        border-radius: ${(props) => props.theme.rounded.lg};
        border: 1px solid ${(props) => props.theme.colors.grey};
        display: flex;
        height: 34px;

        width: 150px;
        overflow: hidden;
    }

    .connect-button {
        border: none;
        width: 100%;
    }

    #prevPageLink {
        margin-right: 2rem;
        color: ${(props) => props.theme.colors.white};
    }
`;

const UserAddress = styled.div`
    user-select: none;
    width: 100%;
    padding: 0 0.9em;
    line-height: 34px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const PrevPage = styled(PrevPageSvg)`
    height: 20px;
    color: inherit;
`;

export type TNavLink = {
    name: string;
    path: string;
};

interface Props {
    siteName: string;
    links: TNavLink[];
}

function SiteNavbar({ siteName, links }: Props) {
    const user = useUser();

    return (
        <Container>
            <Wrapper>
                <div id="wrapper--left">
                    <Link to="/" id="prevPageLink">
                        <PrevPage />
                    </Link>

                    <div id="site-name">{siteName}</div>
                </div>

                <div id="wrapper--right">
                    <div id="links-wrapper">
                        {links.map((link) => (
                            <NavLink
                                key={link.name}
                                to={link.path}
                                className="navbar__link"
                                activeClassName="navbar__link--active"
                            >
                                {link.name}
                            </NavLink>
                        ))}
                    </div>

                    <div id="useraddress-wrapper">
                        {user?.address ? (
                            <UserAddress>{user.address}</UserAddress>
                        ) : (
                            <ConnectWalletButton className="connect-button" />
                        )}
                    </div>
                </div>
            </Wrapper>
        </Container>
    );
}

export default SiteNavbar;
