import { Fragment } from "react";

import Timeline from "@/components/timeline";
import SectionUpdate from "@/components/sectionUpdate";
import SectionRequest from "@/components/sectionRequest";
import SectionAppointments from "@/components/sectionAppointment";
import { Otter, Slack } from "@/components/icons";
import SectionResources from "@/components/sectionResources";

const Home = () => {
	return (
		<Fragment>
			{/* SECTION LATEST UPDATE */}
			<SectionUpdate>
				<SectionUpdate.Title>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, cumque.
				</SectionUpdate.Title>
				<SectionUpdate.Text>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa saepe, iste dolores facilis
					tempora vel. Harum soluta accusantium nemo autem nostrum ducimus, eius officiis
					consequuntur nesciunt iste quasi sint ea adipisci laboriosam numquam ad ab eos obcaecati.
					Quidem ipsa facere praesentium dolorum minima totam suscipit, molestias nemo nostrum quo
					quibusdam?
				</SectionUpdate.Text>
				<SectionUpdate.Date>6th August 2020</SectionUpdate.Date>
			</SectionUpdate>

			{/* SECTION SOFTWARE REQUEST STATUS */}
			<SectionRequest>
				<Timeline>
					<Timeline.Item
						Icon={<Otter />}
						brandName="Otter"
						helpText="Lorem ipsum dolor sit amet consectetur adipisicing elit."
						step={1}
					/>
					<Timeline.Item
						Icon={<Slack />}
						brandName="Slack"
						helpText="Lorem ipsum dolor sit amet consectetur adipisicing elit."
						step={4}
					/>
				</Timeline>
			</SectionRequest>

			{/* SECTION UPCOMING APPOINTMENTS */}
			<SectionAppointments>
				<SectionAppointments.Item
					date="Aug 23, 2020"
					time="1:00PM - 1:30PM"
					createdAt="August 8th, 2020"
				>
					Appointment with Alex Monroe
				</SectionAppointments.Item>
				<SectionAppointments.Item isEmpty>Add a new Appointment</SectionAppointments.Item>
			</SectionAppointments>

			{/* SECTION RESOURCES */}
			<SectionResources linkHref="/" linkLabel="View more resources">
				<SectionResources.Item
					title="Tips and tricks on Google Drive"
					topic="Teaching Online"
					date="4th July 2020"
					time="4:24PM"
				>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. At expedita nam ullam fugit et
					voluptatem officia, numquam, quia eius beatae impedit! Voluptas voluptates eum, aspernatur
					ipsum repellat architecto? Dolor, molestias!
				</SectionResources.Item>
				<SectionResources.Item
					title="Tips and tricks on Google Drive"
					topic="Teaching Online"
					date="4th July 2020"
					time="4:24PM"
				>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. At expedita nam ullam fugit et
					voluptatem officia, numquam, quia eius beatae impedit! Voluptas voluptates eum, aspernatur
					ipsum repellat architecto? Dolor, molestias!
				</SectionResources.Item>
			</SectionResources>
		</Fragment>
	);
};

export default Home;
