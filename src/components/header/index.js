import { Fragment } from "react";

import HeaderLink from "@/components/headerLink";
import HeaderNav from "@/components/headerNav";
import HeaderToolbar from "@/components/headerToolbar";
import { container, filler } from "./header.module.css";

const Header = ({ children, ...props }) => {
	return (
		<Fragment>
			<header className={container} {...props}>
				{children}
			</header>
			<div className={filler} />
		</Fragment>
	);
};

Header.Nav = HeaderNav;
Header.Toolbar = HeaderToolbar;
Header.Link = HeaderLink;

export default Header;
