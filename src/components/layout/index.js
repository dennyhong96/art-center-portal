import { Fragment } from "react";

import { PATHS } from "@/lib/constants";
import Header from "./header";

const Layout = ({ children }) => {
	return (
		<Fragment>
			<Header>
				<Header.Logo src="/assets/icons/logo.png" alt="Art Center" />
				<Header.Nav>
					{PATHS.map(({ href, label }, idx) => (
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
