import styled from "styled-components";
import { Button } from "@/components/button";

export const StyledHeader = styled.header`
	position: fixed;
	left: 0;
	top: 0;
	right: 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 2rem 4rem;
	background-color: #ffffff;
	box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.1);
`;

export const StyledLogo = styled.img`
	max-height: 30px;
`;

export const StyledNav = styled.nav`
	display: flex;
	align-items: center;
`;

export const StyledAnchor = styled.a`
	font-size: 1.5rem;
	font-weight: 500;
	color: #7f7f7f;
	padding: 0.5rem 1.5rem;
	transition: 0.3s ease-out;

	&:hover {
		color: #587fff;
	}
`;

export const StyledActions = styled.div`
	display: flex;
	align-items: center;
`;

export const StyledSignoutButton = styled(Button)`
	font-size: 1.5rem;
	font-weight: 500;
	color: #7f7f7f;
`;
