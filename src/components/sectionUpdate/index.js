import { date as dateStyles } from "./section-update.module.css";
import classNames from "classnames";

import SectionLink from "@/components/sectionLink";
import Card from "@/components/card";

const SectionUpdate = ({ children, ...props }) => {
	return (
		<section className="container section" {...props}>
			<h2>Latest Update</h2>
			<Card>{children}</Card>
			<SectionLink href="/">View previous updates</SectionLink>
		</section>
	);
};

const SectionUpdateTitle = ({ children }) => <h2>{children}</h2>;
const SectionUpdateText = ({ children }) => <p>{children}</p>;
const SectionUpdateDate = ({ children }) => (
	<small className={classNames("strong", { [dateStyles]: dateStyles })}>{children}</small>
);

SectionUpdate.Title = SectionUpdateTitle;
SectionUpdate.Text = SectionUpdateText;
SectionUpdate.Date = SectionUpdateDate;

export default SectionUpdate;
