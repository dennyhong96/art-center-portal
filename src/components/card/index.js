import classNames from "classnames";

import styles, { card } from "./card.module.css";

const Card = ({ children, isEmpty = false, ...props }) => {
	return (
		<article className={classNames(card, { [styles["card--empty"]]: isEmpty })} {...props}>
			{children}
		</article>
	);
};

export default Card;
