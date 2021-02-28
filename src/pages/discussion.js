import { nanoid } from "nanoid";

import { SECTION_DISCUSSION_DATA } from "@/lib/data";
import Sidebar from "@/components/sidebar";
import SectionDiscussion from "@/components/sectionDiscussion";
import ActionBar from "@/components/actionBar";
import FloatingActions from "@/components/floatingActions";

const Discussion = () => {
	return (
		<div className="page-discussion">
			<div className="page-discussion__header">
				{/* ACTIONS - LIST / GRID / FILTER */}
				<div />
				<ActionBar />
				<div />
			</div>

			<div className="page-discussion__inner">
				{/* SIDEBAR */}
				<Sidebar />

				{/* MAIN DISCUSSION SECTION */}
				<section>
					<SectionDiscussion>
						{SECTION_DISCUSSION_DATA.map(({ ...props }) => (
							<SectionDiscussion.Item {...props} key={nanoid()} />
						))}
					</SectionDiscussion>
				</section>
				<div />
			</div>

			{/* FLOATING ACTION BUTTONS */}
			<FloatingActions />
		</div>
	);
};

export default Discussion;
