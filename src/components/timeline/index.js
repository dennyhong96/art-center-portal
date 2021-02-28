import TimelineItem from "@/components/timelineItem";
import { timeline } from "./timeline.module.css";

const Timeline = ({ children, ...props }) => {
	return (
		<section className={timeline} {...props}>
			{children}
		</section>
	);
};

Timeline.Item = TimelineItem;

export default Timeline;
