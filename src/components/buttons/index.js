import styled from "styled-components";

export const IconButton = styled.button`
	width: 4rem;
	height: 4rem;
	border-radius: 5px;
	padding: 1rem;
	background-color: transparent;
	transition: ${({ theme }) => theme.transitions.default};

	&:hover {
		background-color: ${({ theme }) => theme.colors.buttonBG};
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
