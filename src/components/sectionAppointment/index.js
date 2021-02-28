import Card from "@/components/card";
import { Clock, Date } from "../icons";
import SectionLink from "../sectionLink";
import { item, container } from "./section-appointment.module.css";

const SectionAppointments = ({ children, className, linkHref, linkLabel, ...props }) => {
	return (
		<section className={`container section ${className}`} {...props}>
			<h2>Upcoming Appointments</h2>
			<div className={container}>{children}</div>
			{linkHref && linkLabel && <SectionLink href={linkHref}>{linkLabel}</SectionLink>}
		</section>
	);
};

const SectionAppointmentsItem = ({ children, date, time, createdAt, isEmpty, ...props }) => {
	return !isEmpty ? (
		<Card className={item} isAnimation {...props}>
			<h3>{children}</h3>
			<div>
				<Date /> {date}
			</div>
			<div>
				<Clock /> {time}
			</div>
			<small className="strong">Created: {createdAt}</small>
		</Card>
	) : (
		<Card isEmpty>{children}</Card>
	);
};

SectionAppointments.Item = SectionAppointmentsItem;

export default SectionAppointments;
