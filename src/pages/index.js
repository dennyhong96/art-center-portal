import { Fragment } from "react";

import Timeline from "@/components/timeline";
import SectionUpdate from "@/components/sectionUpdate";
import SectionRequest from "@/components/sectionRequest";
import { Otter, Slack } from "@/components/icons";

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
						step={1}
					/>
				</Timeline>
			</SectionRequest>
		</Fragment>
	);
};

export default Home;
