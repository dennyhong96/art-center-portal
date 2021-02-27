import { cloneElement } from "react";

import { btn, icon } from "./button.module.css";

const Button = ({ Icon, children }) => {
	const clonedIcon = Icon ? cloneElement(Icon, { className: icon }) : undefined;

	return (
		<button className={btn}>
			{clonedIcon && clonedIcon}
			{children}
		</button>
	);
};

export default Button;