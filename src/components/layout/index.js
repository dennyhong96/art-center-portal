import { Fragment } from "react";
import { nanoid } from "nanoid";

import Header from "@/components/header";
import Button from "@/components/button";
import Logo from "@/components/logo";
import { Bell, User } from "@/components/icons";

const PATHS = [
	{ href: "/home", label: "Home" },
	{ href: "/resources", label: "Resources" },
	{ href: "/discussion", label: "Discussion" },
	{ href: "/help-desk", label: "Help Desk" },
	{ href: "/feedback", label: "Feedback" },
];

export default function Layout({ children }) {
	return (
		<Fragment>
			<Header>
				<Logo />
				<Header.Nav>
					{PATHS.map(({ href, label }) => (
						<Header.Link href={href} key={nanoid()} isActive={false}>
							{label}
						</Header.Link>
					))}
				</Header.Nav>
				<Header.Toolbar>
					<Button Icon={<Bell />} />
					<Button Icon={<User />} />
					<Button>Sign out</Button>
				</Header.Toolbar>
			</Header>
			<main>{children}</main>
		</Fragment>
	);
}
