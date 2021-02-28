import * as React from "react";

function SvgList(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			aria-hidden="true"
			width="1em"
			height="1em"
			style={{
				msTransform: "rotate(360deg)",
				WebkitTransform: "rotate(360deg)",
			}}
			viewBox="0 0 16 16"
			transform="rotate(360)"
			{...props}
		>
			<path
				fillRule="evenodd"
				d="M5 11.5a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5zm0-4a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5zm0-4a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5zm-3 1a1 1 0 100-2 1 1 0 000 2zm0 4a1 1 0 100-2 1 1 0 000 2zm0 4a1 1 0 100-2 1 1 0 000 2z"
				fill="currentColor"
			/>
		</svg>
	);
}

export default SvgList;
