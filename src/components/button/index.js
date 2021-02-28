import { cloneElement } from "react";
import classNames from "classnames";

import styles, { btn, icon } from "./button.module.css";

const Button = ({ Icon, className, children, ...props }) => {
	const clonedIcon = Icon ? cloneElement(Icon, { className: icon }) : undefined;

	return (
		<button
			className={classNames(btn, {
				[styles["btn--both"]]: Icon && children,
				[className]: className,
			})}
			{...props}
		>
			{clonedIcon && clonedIcon}
			{children}
		</button>
	);
};

export default Button;
