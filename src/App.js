/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import { useSpring, to, animated } from "react-spring";
import { useState } from "react";
import { toto, Button, ShadowEffect1, textBlack, textBlue, textRed } from "./App.style";

function App2() {
	const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } });
	console.log(props);
	return <animated.div style={props}>I will fade in</animated.div>;
}

function App3() {
	const { o, xyz, color } = useSpring({
		from: { o: 0, xyz: [0, 0, 0], color: "red" },
		o: 1,
		xyz: [10, 20, 5],
		color: "green",
	});

	return (
		<animated.div
			style={{
				// If you can, use plain animated values like always, ...
				// You would do that in all cases where values "just fit"
				color,
				// Unless you need to interpolate them
				background: o.to((o) => `rgba(210, 57, 77, ${o})`),
				// Which works with arrays as well
				transform: xyz.to((x, y, z) => `translate3d(${x}px, ${y}px, ${z}px)`),
				// If you want to combine multiple values use the "interpolate" helper
				border: to([o, color], (o, c) => `${o * 10}px solid ${c}`),
				// You can also form ranges, even chain multiple interpolations
				padding: o.to({ range: [0, 0.5, 1], output: [0, 0, 10] }).to((o) => `${o}%`),
				// Interpolating strings (like up-front) through ranges is allowed ...
				borderColor: o.to({ range: [0, 1], output: ["red", "#ffaabb"] }),
				// There's also a shortcut for plain, optionless ranges ...
				opacity: o.to([0.1, 0.2, 0.6, 1], [1, 0.1, 0.5, 1]),
			}}
		>
			{o.to((n) => n.toFixed(2)) /* innerText interpolation ... */}
		</animated.div>
	);
}

function App() {
	const [hovered, setHovered] = useState(false);

	return (
		<>
			{/* on peut composer des styles avec un array comme avec les classes et y mettre du js */}
			<Button css={[textBlue, hovered ? textRed : textBlack]} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
				affichage conditionnel en js hover
			</Button>
			<App2 />
			<App3 />
			<Button css={[textBlue, hovered ? textRed : textBlack]} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
				affichage conditionnel en js hover
			</Button>
			<Button> media query &lt;420px</Button>
			<div css={toto}>hover to change color</div>
		</>
	);
}

export default App;
