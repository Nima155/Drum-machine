import { useState, useEffect, useMemo } from "react";
import "./App.css";
import { Container, Grid, Slider, makeStyles, AppBar } from "@material-ui/core";
import VolumeUpIcon from "@material-ui/icons/VolumeUp";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import { ToggleMaster } from "./components/toggleMaster";
import AudioButton from "./components/buttons";
import { SOUND_PAIRINGS, SOUND_NAMES } from "./constants";
import { animated, config, useSpring } from "react-spring";
import { StyledTab } from "./components/styledTab";
import { StyledTabs } from "./components/styledTabs";

const useSliderStyle = makeStyles({
	root: {
		display: "flex",
	},
	thumb: { top: "50%", color: "beige" },
	rail: {
		height: "5px",
		color: "cyan",
	},
	track: {
		height: "5px",
		color: "black",
	},
	valueLabel: {
		color: "black",
	},
});

const BUTTON_LAYOUT: string = "QWEASDZXC";

function App() {
	// create all buttons

	// power and mode toggles
	const [volume, setVolume] = useState(0.5);
	const [powerToggle, setToggle1] = useState(false);
	const [bankToggle, setToggle2] = useState(false);
	const [textInBox, setTextInBox] = useState("");

	const [selectedTab, setSelectedTab] = useState(0);

	const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
		setSelectedTab(newValue);
	};
	const arr: HTMLAudioElement[] = useMemo(() => {
		const audioArr = [];
		for (let i = 0; i < 9; i++) {
			const audio = new Audio(SOUND_PAIRINGS[i][+bankToggle + 1]);
			audio.volume = volume / 100;
			audioArr.push(audio);
		}
		return audioArr;
	}, [bankToggle, volume]);

	// add color props ??
	useEffect(() => {
		const changer = (e: any) => {
			if (powerToggle) return;
			const indx = BUTTON_LAYOUT.indexOf(e.key.toUpperCase());
			if (indx != -1) {
				setTextInBox(SOUND_NAMES[indx][+bankToggle]);
				if (arr[indx].paused) {
					arr[indx].play();
				} else {
					arr[indx].currentTime = 0;
					arr[indx].play();
				}
			}
		};
		window.addEventListener("keydown", changer);
		return () => window.removeEventListener("keydown", changer);
	}, [bankToggle, volume, powerToggle]);

	const textInBoxAnimation = useSpring({
		from: { color: "#FFFFFF00" },
		to: { color: "#FFFFFFFF" },
		config: config.molasses,
		reset: true,
	});

	const sliderClasses = useSliderStyle();
	return (
		<div className="App">
			<Container
				maxWidth="xl"
				style={{
					backgroundColor: "#00203FFF",
					height: "100vh",
					display: "flex",
					justifyContent: "center",
				}}
			>
				<Grid
					container
					style={{
						backgroundColor: "#ADEFD15F",
						maxWidth: "500px",
						margin: "auto 12px",
						border: "1px solid #FFFFFFA5",
						// borderRadius: "12px 0px 0px 12px",
					}}
				>
					<AppBar
						position="static"
						color="transparent"
						style={{ color: "#D5D5D5" }}
					>
						<StyledTabs
							value={selectedTab}
							onChange={handleChange}
							aria-label="simple tabs example"
						>
							<StyledTab label="App" />
							<StyledTab label="Info" />
						</StyledTabs>
					</AppBar>
					{selectedTab === 0 && (
						<>
							<Grid container item xs={12} sm={6}>
								{SOUND_PAIRINGS.map<JSX.Element>((value, index) => {
									return (
										<AudioButton
											soundEle={arr[index]}
											key={index}
											buttonText={value[0]}
											onClick={() =>
												setTextInBox(SOUND_NAMES[index][+bankToggle])
											}
											powerState={powerToggle}
										/>
									);
								})}
							</Grid>

							<Grid
								container
								item
								xs={12}
								sm={6}
								style={{ padding: "10px" }}
								alignItems="center"
								justify="center"
							>
								<Grid
									container
									item
									xs={8}
									style={{
										backgroundColor: "#00203FFF",
										textAlign: "center",
										color: "white",
										borderRadius: "5px",
										height: "2rem",
									}}
									justify="center"
									alignItems="center"
								>
									<animated.p style={textInBoxAnimation}>
										{textInBox}
									</animated.p>
								</Grid>
								<Grid
									item
									container
									xs={12}
									justify="center"
									spacing={2}
									alignItems="center"
								>
									<VolumeDownIcon />

									<Grid item xs={7}>
										<Slider
											aria-label="Volume"
											classes={{
												thumb: sliderClasses.thumb,
												rail: sliderClasses.rail,
												track: sliderClasses.track,
												valueLabel: sliderClasses.valueLabel,
												root: sliderClasses.root,
											}}
											valueLabelDisplay="auto"
											onChangeCommitted={(e, value: number | number[]) => {
												if (typeof value == "number") {
													setVolume(value);
												}
											}}
											onChange={(e, value: number | number[]) => {
												if (typeof value == "number")
													setTextInBox(`Volume: ${value}`);
											}}
										/>
									</Grid>

									<VolumeUpIcon />
								</Grid>

								<ToggleMaster
									onClick={() => setToggle1((state) => !state)}
									toggle={powerToggle}
									title="Power"
								/>
								<ToggleMaster
									onClick={() => {
										setToggle2((state) => !state);
										setTextInBox(
											bankToggle ? "Heater Kit" : "Smooth Piano Kit"
										);
									}}
									toggle={bankToggle}
									title="Bank"
								/>
							</Grid>
						</>
					)}
					{selectedTab === 1 && (
						<Grid
							container
							item
							xs={12}
							justify="center"
							alignItems="center"
							style={{ padding: "10px", color: "#D5D5D5", textAlign: "center" }}
						>
							<p>
								You can either press the <em>keys</em> shown on the screen to
								trigger sounds or click on the buttons directly.
							</p>
						</Grid>
						// {}
					)}
				</Grid>
			</Container>
		</div>
	);
}

export default App;
