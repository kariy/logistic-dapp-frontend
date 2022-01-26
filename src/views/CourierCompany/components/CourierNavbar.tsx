import { useRouteMatch } from "react-router-dom";
import Navbar, { TNavLink } from "../../../components/Navbar";

function getNavLinks(path: string): TNavLink[] {
    return [
        { name: "Admin", path: `${path}/admin` },
        { name: "Track", path: `${path}/track` },
    ];
}

function CourierNavbar() {
    const match = useRouteMatch();
    const navLinks = getNavLinks(match.path);

    return <Navbar siteName="Courier Co." links={navLinks} />;
}

export default CourierNavbar;
