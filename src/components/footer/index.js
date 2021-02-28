import { container } from "./footer.module.css";
import Link from "next/link";

const Footer = () => {
	return (
		<footer className={container}>
			Having problems?{" "}
			<Link href="/" passHref>
				<a>Get Help</a>
			</Link>
		</footer>
	);
};

export default Footer;
