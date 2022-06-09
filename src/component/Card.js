/** @jsxImportSource @emotion/react */
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

const ImgCard = styled.img`
	width: 100%;
	transition: all 0.6s ease;
	position: absolute;
	border-radius: 10% 10% 0 0;
	transform-style: preserve-3d;
	/* justify-self: start; */
	/* &:hover {
		transform: perspective(800) rotateX(-25deg) translateY(-100px);
	} */
`;

const TextCard = styled.div`
	position: absolute;
	bottom: 0;
	opacity: 0;
	transition: all 0.6s ease;

	/* &:hover {
		transform: perspective(800) rotateX(-25deg) translateY(-100px);
	} */
`;
const TitreCard = styled.h1`
	position: absolute;
	bottom: 0;
	opacity: 1;
	transition: all 0.6s ease;

	/* &:hover {
		transform: perspective(800) rotateX(-25deg) translateY(-100px);
	} */
`;
const CardContainer = styled.div`
	margin-top: 5%;
	margin-left: 1%;
	margin-right: 1%;
	margin-bottom: 5%;
	border-radius: 10%;
	width: 15vw;
	height: 25vw;
	/* transition: all 0.4s; */
	background-color: #f0c8a3;
	/* overflow: hidden; */
	position: absolute;
	z-index: 10;
	transition: all 0.6s ease;

	/* display: flex;
	flex-direction: column;
	justify-content: space-between; */
	/* outline: none; */
`;
const ContainerCardAnimated = css`
	/* height: 30vw;
	position: absolute;

	transform: translateY(-1vw); */
`;
const ImgCardAnimated = css`
	transform: perspective(800) rotateX(-25deg) translateY(-30px);
	/* background-color: blue; */
`;
const TextCardAnimated = css`
	opacity: 1;
	/* transform: perspective(800) rotateX(25deg) translateY(10px); */
	/* background-color: blue; */
`;
const TitreCardAnimated = css`
	opacity: 0;
	/* transform: perspective(800) rotateX(25deg) translateY(10px); */
	/* background-color: blue; */
`;
const Card = () => {
	const [catFacts, setCatFacts] = useState(null);
	const [isCardAnimated, setCardAnimated] = useState(false);
	useEffect(() => {
		axios.get("https://cat-fact.herokuapp.com/facts").then((e) => setCatFacts(e.data));
	}, []);
	return (
		<CardContainer css={isCardAnimated && ContainerCardAnimated} onMouseEnter={() => setCardAnimated(true)} onMouseLeave={() => setCardAnimated(false)}>
			<ImgCard css={isCardAnimated && ImgCardAnimated} src="/img/barocel.jpg"></ImgCard>
			{catFacts && <TitreCard css={isCardAnimated && TitreCardAnimated}>Titre</TitreCard>}
			{catFacts && <TextCard css={isCardAnimated && TextCardAnimated}>{catFacts[1].text}</TextCard>}
		</CardContainer>
	);
};

export default Card;
