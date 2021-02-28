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

export default SectionRequest;
