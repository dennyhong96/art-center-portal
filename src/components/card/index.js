import classNames from "classnames";

import { Plus } from "@/components/icons";
import Button from "@/components/button";
import styles, { card } from "./card.module.css";

const Card = ({ children, className, isEmpty = false, isAnimation = false, ...props }) => {
	return (
		<article
			className={classNames(card, {
				[styles["card--empty"]]: isEmpty,
				[styles["card--anim"]]: isAnimation,
				[className]: className,
			})}
			{...props}
		>
			{!isEmpty ? children : <Button Icon={<Plus />}>{children}</Button>}
		</article>
	);
};

export default Card;
