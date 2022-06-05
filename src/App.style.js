/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import styled from "@emotion/styled";

const color = "white";

export const toto = css`
	padding: 32px;
	width: 350px;
	box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
	background-color: hotpink;
	margin: 10px;

	font-size: 24px;
	border-radius: 4px;
	/* &:hover {
		color: ${color};
	} */
`;
export const Button = styled.button`
	padding: 32px;
	background-color: hotpink;
	font-size: 24px;
	border-radius: 4px;
	/* color: black; */
	font-weight: bold;
	box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
	margin: 10px;
	@media (max-width: 420px) {
		color: orange;
	}
`;
export const ShadowEffect1 = ({ children }) => {
	return (
		<div
			css={css`
				box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
				width: 300px;
			`}
		>
			{children}
		</div>
	);
};

export const textBlue = css`
	color: blue;
`;
export const textBlack = css`
	color: black;
`;
export const textRed = css`
	color: red;
`;
