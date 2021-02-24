import styled from "styled-components";

export const IconButton = styled.button`
	width: 4rem;
	height: 4rem;
	border-radius: 5px;
	padding: 1rem;
	background-color: transparent;
	transition: 0.3s ease-out;

	&:hover {
		background-color: #f0f0f0;
	}

	& svg {
		width: 100%;
		height: 100%;
	}
`;

export const Button = styled(IconButton)`
	width: max-content;
	height: max-content;
	padding: 1rem 2rem;
`;
