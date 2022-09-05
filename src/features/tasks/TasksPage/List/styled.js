import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const Tasks = styled.ul`
	padding: 20px;
	padding-top: 0;
	list-style: none;
	margin-top: 0;  
`;

export const Item = styled.li`
	display: grid;
	grid-template-columns: auto 1fr auto;
	grid-gap: 10px;
	padding: 10px;
	padding-top: 30px;
	border-bottom: 2px solid ${({theme}) => theme.color.alto};
	align-items: center;

	${({ hidden }) => hidden && css`
		display: none;
	`}
`;

export const Content = styled.span`
	${({ done }) => done && css`
		text-decoration: line-through;
	`}
`;

export const Button = styled.button`
	border: none;
	color: ${({ theme }) => theme.color.white};
	border-radius: 2px;
	height: 30px;
	width: 30px;
	padding: 0;
	transition: filter 0.3s;
	
	${({ toggleDone }) => toggleDone && css`
		background: ${({ theme }) => theme.color.forestGreen};
	`}

	${({ remove }) => remove && css`
		background: ${({ theme }) => theme.color.crimson};
	`}

		&:hover {
			cursor: pointer;
    	filter: brightness(130%);
		}

		&:active {
			filter: brightness(140%);
		}
`;

export const StyledLink = styled(Link)`
	color: ${({theme}) => theme.color.teal};
	text-decoration: none;
`; 