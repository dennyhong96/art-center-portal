import * as React from "react";

function SvgOtter(props) {
	return (
		<svg viewBox="0 0 53 23" {...props}>
			<g fill="#007AFF" fillRule="evenodd">
				<rect x={31.19} width={5.61} height={21.59} rx={2.8} />
				<rect x={23.09} width={5.61} height={21.59} rx={2.8} />
				<rect x={39.29} y={6.75} width={5.61} height={8.1} rx={2.8} />
				<rect x={47.39} y={4.05} width={5.61} height={13.5} rx={2.8} />
				<path
					d="M10.22 16.3c2.72 0 4.92-2.37 4.92-5.3 0-2.93-2.2-5.3-4.92-5.3C7.5 5.7 5.3 8.07 5.3 11c0 2.93 2.2 5.3 4.92 5.3zm0 5.7C4.58 22 0 17.08 0 11S4.58 0 10.22 0c5.65 0 10.22 4.92 10.22 11s-4.57 11-10.22 11z"
					fillRule="nonzero"
				/>
			</g>
		</svg>
	);
}

export default SvgOtter;
