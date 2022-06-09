/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import { useSpring, animated, config } from "react-spring";
import { useState } from "react";
import { Button, Loader, MainContainer, TopContainer, blue, rotateOnHover, CenterContainer, BottomContainer } from "./App.style";
import Card from "./component/Card";
import styled from "@emotion/styled";
function App2() {
	const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } });
	console.log(props);
	return <animated.div style={props}>I will fade in</animated.div>;
}

const Card1 = () => {
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
	const [toggle, setToggle] = useState(false);
	const fade = useSpring({
		// from: { opacity: 0, transform: "scale(0)" },
		opacity: toggle ? 1 : 0.5,

		// delay: 100,
		transform: toggle ? "scale(1)" : "scale(0.5)",
		config: config.wobbly,
	});

	return (
		<MainContainer>
			<TopContainer>
				<Button css={rotateOnHover}>bouton 1</Button>
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
				<animated.img
					style={fade}
					css={css`
						height: 20vw;
						position: relative;
					`}
					src="/img/unicorn-g325b486a1_1920.png"
					alt="licorne"
					onMouseEnter={() => setToggle(!toggle)}
					onMouseLeave={() => setToggle(!toggle)}
				></animated.img>
				<Card />
			</CenterContainer>
			<BottomContainer>{/* <Card /> */}</BottomContainer>
		</MainContainer>
	);
}

export default App;
