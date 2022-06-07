/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import { useSpring, to, animated } from "react-spring";
import { useState } from "react";
import { Button, Loader, MainContainer, TopContainer, blue, rotateOnHover, CenterContainer, BottomContainer } from "./App.style";

function App2() {
	const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } });
	console.log(props);
	return <animated.div style={props}>I will fade in</animated.div>;
}

const Card = () => {
	return (
		<section id="D-parallax-effect">
			<div class="container-3D">
				<div class="D-box">
					<div class="imgBx">
						<img src="b1.jpg" alt="b1" width="550px" height="300px" />
					</div>
					<div class="contentBx">
						<h2>Tilt Box Hover Effect</h2>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet dignissimos laudantium atque assumenda cupiditate quo nobis.</p>
					</div>
				</div>
				<div class="D-box">
					<div class="imgBx">
						<img src="b2.jpg" alt="b2" width="550px" height="300px" />
					</div>
					<div class="contentBx">
						<h2>Tilt Box Hover Effect</h2>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet dignissimos laudantium atque assumenda cupiditate quo nobis.</p>
					</div>
				</div>
			</div>
		</section>
	);
};

function App() {
	const makeFullscreen = () => {
		console.log("sdvk");
		document.requestFullscreen();
	};
	return (
		<MainContainer>
			<TopContainer>
				<Button css={rotateOnHover} onClick={makeFullscreen}>
					bouton 1
				</Button>
				<Button css={rotateOnHover}>bouton 2</Button>
				<Button css={[blue, rotateOnHover]}>bouton 3</Button>
			</TopContainer>
			<CenterContainer>
				<input type="text"></input>
				<div
					css={css`
						position: relative;
						width: 100px;
						height: 100px;
						/* background-color: #333; */
						display: flex;
						justify-content: center;
						align-items: center;
					`}
				>
					<Loader />
				</div>
				<img
					css={css`
						height: 20vw;
					`}
					src="/img/unicorn-g325b486a1_1920.png"
					alt="licorne"
				></img>
			</CenterContainer>
			<BottomContainer>
				<Card />
			</BottomContainer>
		</MainContainer>
	);
}

export default App;
