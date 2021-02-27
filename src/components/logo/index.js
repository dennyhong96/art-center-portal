import Link from "next/link";

import { link } from "./logo.module.css";

const Logo = ({ ...props }) => {
	return (
		<Link href="/" passHref>
			<a className={link} {...props}>
				<img src="/icons/logo.png" alt="Art center" />
			</a>
		</Link>
	);
};

export default Logo;
