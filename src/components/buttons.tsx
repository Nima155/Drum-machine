import { IButtonInterface } from "../interfaces/interfaces";
import { Grid, Button } from "@material-ui/core";

function AudioButton(props: IButtonInterface) {
	let audio = new Audio(props.soundUrl);
	return (
		<Grid
			item
			container
			xs={4}
			key={props.i}
			justify="center"
			style={{ padding: "12px 0px" }}
		>
			<Button
				variant="contained"
				style={{
					height: "70px",
					width: "70px",
					borderRadius: "12px",
					backgroundColor: "#00203FA2",
					color: "white",
				}}
				onClick={() => {
					audio.play();
				}}
			>
				{props.buttonText}
			</Button>
		</Grid>
	);
}

export default AudioButton;
