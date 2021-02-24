import Link from "next/link";

import { IconButton } from "@/components/button";
import { IconBell, IconUser } from "@/components/icons";

import {
	StyledHeader,
	StyledLogo,
	StyledNav,
	StyledAnchor,
	StyledActions,
	StyledSignoutButton,
} from "./styles";

const Header = ({ children }) => {
	return (
		<StyledHeader>
			{children}
			<StyledActions>
				<IconButton>
					<IconBell color="#7f7f7f" />
				</IconButton>
				<IconButton>
					<IconUser color="#7f7f7f" />
				</IconButton>
				<StyledSignoutButton>Sign out</StyledSignoutButton>
			</StyledActions>
		</StyledHeader>
	);
};

const HeaderLink = ({ children, href, ...restProps }) => {
	return (
		<Link href={href} passHref>
			<StyledAnchor {...restProps}>{children}</StyledAnchor>
		</Link>
	);
};

const HeaderNav = ({ children, ...restProps }) => {
	return <StyledNav {...restProps}>{children}</StyledNav>;
};

const HeaderLogo = ({ children, ...restProps }) => {
	return (
		<Link href="/" passHref>
			<a>
				<StyledLogo {...restProps}>{children}</StyledLogo>
			</a>
		</Link>
	);
};

Header.Nav = HeaderNav;
Header.Link = HeaderLink;
Header.Logo = HeaderLogo;

export default Header;
