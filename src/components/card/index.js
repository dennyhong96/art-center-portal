import { card } from "./card.module.css";

const Card = ({ children, ...props }) => {
	return (
		<article className={card} {...props}>
			{children}
		</article>
	);
};

export default Card;
