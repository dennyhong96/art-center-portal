import classNames from "classnames";

import Card from "@/components/card";
import Button from "@/components/button";
import { UserPlaceholder, Check, Star } from "@/components/icons";
import { disc, item, active } from "./section-discussion.module.css";

const SectionDiscussion = ({ children }) => {
	return (
		<section className={disc}>
			<Card>{children}</Card>
		</section>
	);
};

const SectionDiscussionItem = ({
	title,
	askedBy,
	topic,
	numReplies,
	lastestReplyTime,
	latestReplyBy,
	isResolved,
}) => (
	<div className={item}>
		<UserPlaceholder />
		<div>
			<div>
				<h4>{title}</h4>
				<small className="strong">asked by {askedBy}</small>
			</div>
			<div>
				<span className={classNames("", { [active]: isResolved })}>
					<Check />
				</span>
				<small className="strong">{topic}</small>
				<small className="strong">{numReplies} replies</small>
				<small className="strong">
					Latest reply {lastestReplyTime} by {latestReplyBy}
				</small>
			</div>
		</div>
		<Button Icon={<Star />} />
	</div>
);

SectionDiscussion.Item = SectionDiscussionItem;

export default SectionDiscussion;
