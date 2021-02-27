import { Fragment } from "react";
import { nanoid } from "nanoid";

import HeaderLink from "@/components/layout/headerLink";
import HeaderNav from "@/components/layout/headerNav";
import HeaderToolbar from "@/components/layout/headerToolbar";
import Button from "@/components/button";
import Logo from "@/components/logo";
import { Bell, User } from "@/components/icons";
import { container, filler } from "./header.module.css";

const PATHS = [
	{ href: "/home", label: "Home" },
	{ href: "/resources", label: "Resources" },
	{ href: "/discussion", label: "Discussion" },
	{ href: "/help-desk", label: "Help Desk" },
	{ href: "/feedback", label: "Feedback" },
];

const HeaderContainer = ({ children, ...props }) => {
	return (
		<Fragment>
			<header className={container} {...props}>
				{children}
			</header>
			<div className={filler} />
		</Fragment>
	);
};

const Header = ({ ...props }) => {
	return (
		<HeaderContainer {...props}>
			<Logo />
			<HeaderNav>
				{PATHS.map(({ href, label }) => (
					<HeaderLink href={href} key={nanoid()} isActive={false}>
						{label}
					</HeaderLink>
				))}
			</HeaderNav>
			<HeaderToolbar>
				<Button Icon={<Bell />} />
				<Button Icon={<User />} />
				<Button>Sign out</Button>
			</HeaderToolbar>
		</HeaderContainer>
	);
};

export default Header;
