import { bar } from "./header-toolbar.module.css";

const HeaderToolbar = ({ children, ...props }) => {
	return (
		<div className={bar} {...props}>
			{children}
		</div>
	);
};

export default HeaderToolbar;
