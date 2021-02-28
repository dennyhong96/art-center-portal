import Card from "@/components/card";
import { Star } from "../icons";
import SectionLink from "../sectionLink";
import Button from "@/components/button";
import { item, container } from "./section-resources.module.css";

const SectionResources = ({ children, className, linkHref, linkLabel, ...props }) => {
	return (
		<section className={`container section ${className}`} {...props}>
			<h2>New Resources</h2>
			<div className={container}>{children}</div>
			{linkHref && linkLabel && <SectionLink href={linkHref}>{linkLabel}</SectionLink>}
		</section>
	);
};

const SectionAppointmentsItem = ({ title, children, date, time, topic, ...props }) => {
	return (
		<Card className={item} isAnimation {...props}>
			<Button Icon={<Star />} />
			<h3>{title}</h3>
			<p>{children}</p>
			<small className="strong">{topic}</small>
			<small>
				{date} : {time}
			</small>
		</Card>
	);
};

SectionResources.Item = SectionAppointmentsItem;

export default SectionResources;
