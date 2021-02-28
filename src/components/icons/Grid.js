import * as React from "react";

function SvgGrid(props) {
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
			viewBox="0 0 24 24"
			transform="rotate(360)"
			{...props}
		>
			<g
				fill="none"
				stroke="currentColor"
				strokeWidth={2}
				strokeLinecap="round"
				strokeLinejoin="round"
			>
				<rect x={3} y={3} width={7} height={7} rx={1} />
				<rect x={3} y={14} width={7} height={7} rx={1} />
				<rect x={14} y={3} width={7} height={7} rx={1} />
				<rect x={14} y={14} width={7} height={7} rx={1} />
			</g>
		</svg>
	);
}

export default SvgGrid;
