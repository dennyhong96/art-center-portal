import Link from "next/link";

import { link, dots, dot } from "./section-link.module.css";

const SectionLink = ({ href, children, ...props }) => {
	return (
		<Link href={href}>
			<a className={link} {...props}>
				<span className={dots}>
					<span className={dot} />
					<span className={dot} />
					<span className={dot} />
				</span>
				{children}
			</a>
		</Link>
	);
};

export default SectionLink;
