import React, { useEffect, useState } from "react";
import "./App.css";
import { Container, Grid, Slider } from "@material-ui/core";

import { ToggleMaster } from "./components/toggleMaster";
import AudioButton from "./components/buttons";

function App() {
	// create all buttons
	const buttons: string = "QWEASDZXC";

	// power and mode toggles
	const [powerToggle, setToggle1] = useState(false);
	const [bankToggle, setToggle2] = useState(false);

	// will need to change this to pass props such as sound to play and character to render inside button

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
						borderRadius: "12px",
					}}
				>
					<Grid container item xs={12} sm={6}>
						{buttons.split("").map<JSX.Element>((value, index) => {
							return <AudioButton soundUrl="" i={index} buttonText={value} />;
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
							item
							xs={8}
							style={{
								backgroundColor: "#00203FFF",
								textAlign: "center",
								color: "white",
								borderRadius: "5px",
							}}
						>
							<p>Hi</p>
						</Grid>
						<Grid item xs={9} justify="center">
							<Slider aria-label="Volume"></Slider>
						</Grid>

						<ToggleMaster
							onClick={() => setToggle1((state) => !state)}
							toggle={powerToggle}
							title="Power"
						/>
						<ToggleMaster
							onClick={() => setToggle2((state) => !state)}
							toggle={bankToggle}
							title="Bank"
						/>
					</Grid>
				</Grid>
			</Container>
		</div>
	);
}

export default App;
