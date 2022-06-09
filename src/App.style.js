/** @jsxImportSource @emotion/react */
import { css, jsx, keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const color = "hotpink";

export const Button = styled.button`
	padding: 12px;
	width: 100px;
	height: 100px;
	margin: 10px;
	/* background-color: ${color}; */
	background-image: linear-gradient(#ff8a00, #e52e71);
	font-size: 14px;
	border-radius: 4px;
	font-weight: bold;
	box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
	@media (max-width: 420px) {
		color: orange;
	}
`;
export const blue = css`
	color: blue;
`;
export const rotateOnHover = css`
	transition: transform 0.25s cubic-bezier(0.63, -1.08, 0.61, 2.27);
	&:hover {
		/* transform-origin: bottom right; */
		transform: scale(1.1);
	}
`;
export const MainContainer = styled.div`
	background-image: linear-gradient(#110179, #a3f0ff);
	display: flex;
	align-items: center;
	justify-content: center;
	max-height: 100vh;
	box-sizing: border-box;
	flex-direction: column;
`;
export const TopContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex: 1;
	width: 100%;
`;
export const CenterContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex: 3;
	width: 100%;
	border: 1px solid black;
	box-sizing: border-box;
`;
export const BottomContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex: 1;
	width: 100%;
`;
export const licorneImg = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex: 1;
	width: 100%;
`;
const spin = keyframes`
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}

`;
export const Loader = styled.div`
	height: 60px;
	width: 60px;
	position: relative;
	border-radius: 50%;
	border: 3px solid transparent;
	border-top-color: crimson;
	animation: ${spin} 2s linear infinite;
	&::before,
	&::after {
		content: "";
		position: absolute;
		border-radius: 50%;
		border: 3px solid transparent;
	}
	&::before {
		top: 3px;
		left: 3px;
		right: 3px;
		bottom: 3px;
		border-top-color: rgb(252, 45, 86);
		animation: ${spin} 3s linear infinite;
	}
	&::after {
		top: 8px;
		left: 8px;
		right: 8px;
		bottom: 8px;
		border-top-color: rgb(192, 108, 125);
		animation: ${spin} 1.5s linear infinite;
	}
`;

export const cardChristele = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex: 1;
	width: 100%;
`;
