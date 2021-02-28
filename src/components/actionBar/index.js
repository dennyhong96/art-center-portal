import { useState } from "react";
import classNames from "classnames";

import { Grid, List, Range } from "@/components/icons";
import Button from "@/components/button";
import { bar, active } from "./action-bar.module.css";

const ICONS = [<List key={0} />, <Grid key={1} />, <Range key={2} />];

const ActionBar = () => {
	const [activeIdx, setActiveIdx] = useState(0);

	return (
		<div className={bar}>
			{ICONS.map((Icon, idx) => (
				<Button
					onClick={setActiveIdx.bind(this, idx)}
					key={idx}
					className={classNames("", { [active]: activeIdx === idx })}
					Icon={Icon}
				/>
			))}
		</div>
	);
};

export default ActionBar;
