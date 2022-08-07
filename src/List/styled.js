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
	border-bottom: 2px solid #ddd;
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
	color: white;
	border-radius: 2px;
	height: 30px;
	width: 30px;
	padding: 0;
	transition: background 0.3s;
	
	${({ toggleDone }) => toggleDone && css`
		background-color: green;

		&:hover {
			cursor: pointer;
    	background-color: hsl(120, 100%, 35%);
		}

		&:active {
			background-color: hsl(120, 100%, 40%);
		}
	`}

	${({ remove }) => remove && css`
		background-color: crimson;

		&:hover {
			cursor: pointer;
    	background-color: hsl(348, 83%, 55%);
		}

		&:active {
			background-color: hsl(348, 83%, 60%);
		}
	`}
`;