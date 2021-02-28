import {} from "./section-request.module.css";

import Card from "@/components/card";

const SectionRequest = ({ children, ...props }) => {
	return (
		<section className="container section" {...props}>
			<h2>Software Request Status</h2>
			<Card>{children}</Card>
		</section>
	);
};

// const SectionUpdateTitle = ({ children }) => <h2>{children}</h2>;
// const SectionUpdateText = ({ children }) => <p>{children}</p>;
// const SectionUpdateDate = ({ children }) => (
// 	<small className={classNames("strong", { [dateStyles]: dateStyles })}>{children}</small>
// );

// SectionRequest.Title = SectionUpdateTitle;
// SectionRequest.Text = SectionUpdateText;
// SectionRequest.Date = SectionUpdateDate;

export default SectionRequest;
