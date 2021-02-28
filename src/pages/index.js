import { Fragment } from "react";
import { nanoid } from "nanoid";

import {
	SECTION_UPDATE_DATA,
	TIMELINE_ITEMS_DATA,
	APPOINTMENTS_DATA,
	RESOURCES_DATA,
} from "@/lib/data";

import Timeline from "@/components/timeline";
import SectionUpdate from "@/components/sectionUpdate";
import SectionRequest from "@/components/sectionRequest";
import SectionAppointments from "@/components/sectionAppointment";
import SectionResources from "@/components/sectionResources";

const Home = () => {
	return (
		<Fragment>
			{/* SECTION LATEST UPDATE */}
			<SectionUpdate>
				<SectionUpdate.Title>{SECTION_UPDATE_DATA.title}</SectionUpdate.Title>
				<SectionUpdate.Text>{SECTION_UPDATE_DATA.text}</SectionUpdate.Text>
				<SectionUpdate.Date>{SECTION_UPDATE_DATA.date}</SectionUpdate.Date>
			</SectionUpdate>

			{/* SECTION SOFTWARE REQUEST STATUS */}
			<SectionRequest>
				<Timeline>
					{TIMELINE_ITEMS_DATA.map(({ ...props }) => (
						<Timeline.Item {...props} key={nanoid()} />
					))}
				</Timeline>
			</SectionRequest>

			{/* SECTION UPCOMING APPOINTMENTS */}
			<SectionAppointments>
				{APPOINTMENTS_DATA.map(({ content, ...props }) => (
					<SectionAppointments.Item {...props} key={nanoid()}>
						{content}
					</SectionAppointments.Item>
				))}
			</SectionAppointments>

			{/* SECTION RESOURCES */}
			<SectionResources linkHref="/" linkLabel="View more resources">
				{RESOURCES_DATA.map(({ content, ...props }) => (
					<SectionResources.Item {...props} key={nanoid()}>
						{content}
					</SectionResources.Item>
				))}
			</SectionResources>
		</Fragment>
	);
};

export default Home;
