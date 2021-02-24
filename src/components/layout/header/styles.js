import styled from "styled-components";

import { Button } from "@/components/buttons";

export const StyledHeader = styled.header`
	position: fixed;
	left: 0;
	top: 0;
	right: 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 2rem 4rem;
	background-color: #fff;
	box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.1);
`;

export const StyledLogo = styled.img`
	max-height: 3rem;
`;

export const StyledNav = styled.nav`
	display: flex;
	align-items: center;
`;

export const StyledAnchor = styled.a`
	font-size: 1.5rem;
	font-weight: 500;
	color: ${({ theme }) => theme.colors.gray};
	padding: 0.5rem 1.5rem;
	transition: ${({ theme }) => theme.transitions.default};

	&:hover {
		color: ${({ theme }) => theme.colors.link};
	}
`;

export const StyledActions = styled.div`
	display: flex;
	align-items: center;
`;

export const StyledSignoutButton = styled(Button)`
	font-size: 1.5rem;
	font-weight: 500;
	color: ${({ theme }) => theme.colors.gray};
`;
