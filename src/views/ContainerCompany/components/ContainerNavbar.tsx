import { useRouteMatch } from "react-router-dom";
import SiteNavbar, { TNavLink } from "../../../components/SiteNavbar";

function getNavLinks(path: string): TNavLink[] {
    return [
        { name: "Admin", path: `${path}/admin` },
        { name: "Track", path: `${path}/track` },
    ];
}

function ContainerNavbar() {
    const match = useRouteMatch();
    const navLinks = getNavLinks(match.path);

    return <SiteNavbar siteName="Container Co." links={navLinks} />;
}

export default ContainerNavbar;
