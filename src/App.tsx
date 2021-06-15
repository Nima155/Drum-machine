import React, { useState } from "react";
import "./App.css";
import { Container, Grid, Button } from "@material-ui/core";
import { useSpring, animated, config } from "react-spring";

function App() {
	// create all buttons
	const buttons: any[] = [];
	for (let i = 0; i < 9; i++) {
		buttons.push(
			<Grid item container xs={4} key={i} style={{ padding: "10px" }}>
				<Button variant="contained" style={{ height: "70px", width: "70px" }}>
					A
				</Button>
			</Grid>
		);
	}
	const [toggle, setToggle] = useState(false);
	const toggleStyle = useSpring({
		transform: toggle ? "translateX(20px)" : "translateX(0px)",
	});
	return (
		<div className="App">
			<Container
				maxWidth="md"
				style={{
					backgroundColor: "blue",
					height: "100vh",
					display: "flex",
				}}
			>
				<Grid
					container
					style={{
						backgroundColor: "gray",
						maxWidth: "500px",
						margin: "auto",
					}}
					spacing={1}
				>
					<Grid container item xs={12} md={6}>
						{buttons}
					</Grid>
					<Grid
						container
						item
						xs={12}
						md={6}
						direction="column"
						spacing={1}
						style={{ padding: "10px" }}
					>
						<Grid
							item
							container
							xs={6}
							style={{ margin: "auto" }}
							justify="center"
						>
							<div
								style={{ backgroundColor: "red", width: "40px" }}
								onClick={() => setToggle(!toggle)}
							>
								<animated.div
									style={{
										backgroundColor: "green",
										width: "20px",
										...toggleStyle,
									}}
								>
									H
								</animated.div>
							</div>
						</Grid>
					</Grid>
				</Grid>
			</Container>
		</div>
	);
}

export default App;
