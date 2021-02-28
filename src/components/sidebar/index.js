import { useState, memo } from "react";
import classNames from "classnames";

import styles, { bar, button } from "./sidebar.module.css";

const SIDE_BAR_TABS = [
	"Latest",
	"Most Answered",
	"Unanswered",
	"Online Teaching",
	"Software",
	"Techinical Issue",
	"Other",
];

const SidebarButton = ({ children, setActive, isActive }) => {
	return (
		<button
			onClick={setActive}
			className={classNames(button, { [styles["button--active"]]: isActive })}
		>
			{children}
		</button>
	);
};

const Sidebar = () => {
	const [activeTab, setActiveTab] = useState(0);

	return (
		<aside className={bar}>
			<nav>
				{SIDE_BAR_TABS.map((tab, idx) => (
					<SidebarButton key={idx} setActive={() => setActiveTab(idx)} isActive={idx === activeTab}>
						{tab}
					</SidebarButton>
				))}
			</nav>
		</aside>
	);
};

export default memo(Sidebar);
