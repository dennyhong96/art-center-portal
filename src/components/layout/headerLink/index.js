import Link from "next/link";
import classNames from "classnames";

import styles, { list, item, link } from "./header-link.module.css";

const HeaderLink = ({ children, href, isActive, ...props }) => {
	return (
		<ul className={list} {...props}>
			<li className={item}>
				<Link href={href} passHref>
					<a className={classNames(link, { [styles["link--active"]]: isActive })}>{children}</a>
				</Link>
			</li>
		</ul>
	);
};

export default HeaderLink;
