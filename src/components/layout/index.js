import { Fragment } from "react";
import { useRouter } from "next/router";
import { nanoid } from "nanoid";

import Header from "@/components/header";
import Footer from "../footer";
import Button from "@/components/button";
import Logo from "@/components/logo";
import { Bell, User } from "@/components/icons";
import { PATHS } from "@/lib/constants";

export default function Layout({ children }) {
	const router = useRouter();

	return (
		<Fragment>
			<Header>
				<Logo />
				<Header.Nav>
					{PATHS.map(({ href, label }) => (
						<Header.Link href={href} key={nanoid()} isActive={router.asPath === href}>
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
			<Footer />
		</Fragment>
	);
}
