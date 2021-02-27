import { nav } from "./header-nav.module.css";

const HeaderNav = ({ children, ...props }) => {
	return (
		<nav className={nav} {...props}>
			{children}
		</nav>
	);
};

export default HeaderNav;
