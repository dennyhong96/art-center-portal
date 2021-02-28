import styles, { item, brand, steps } from "./timeline-item.module.css";
import { Check } from "@/components/icons";
import { nanoid } from "nanoid";

const STEPS = ["Request Received", "License Processing", "License Obtained", "Request Complete"];

const TimelineStep = ({ children }) => {
	return (
		<div>
			<Check />
			<strong>{children}</strong>
		</div>
	);
};

const TimelineItem = ({ Icon, brandName, helpText, step = 1 }) => {
	return (
		<div className={item}>
			<div className={brand}>
				{Icon}
				<span>{brandName}</span>
			</div>
			<div className={`${steps} ${[styles[`steps--${step}`]]}`}>
				{STEPS.map(step => (
					<TimelineStep key={nanoid()}>{step}</TimelineStep>
				))}
			</div>
			<div>{helpText}</div>
		</div>
	);
};

export default TimelineItem;
