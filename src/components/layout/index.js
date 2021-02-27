import { Fragment } from "react";

import Footer from "./footer";
import Header from "./header";

export default function Layout({ children }) {
	return (
		<Fragment>
			<Header />
			<main>{children}</main>
			<Footer />
		</Fragment>
	);
}
