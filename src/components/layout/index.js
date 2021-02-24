import { Fragment } from "react";

import Header from "./header";

const SCREENS = [
	{ href: "/home", label: "Home" },
	{ href: "/resources", label: "Resources" },
	{ href: "/discussion", label: "Discussion" },
	{ href: "/help-desk", label: "Help Desk" },
	{ href: "/feedback", label: "Feedback" },
];

const Layout = ({ children }) => {
	return (
		<Fragment>
			<Header>
				<Header.Logo src="/assets/icons/logo.png" alt="Art Center" />
				<Header.Nav>
					{SCREENS.map(({ href, label }, idx) => (
						<Header.Link href={href} key={idx}>
							{label}
						</Header.Link>
					))}
				</Header.Nav>
			</Header>
			<main>{children}</main>
		</Fragment>
	);
};

export default Layout;
