import { IButtonInterface } from "../interfaces/interfaces";
import { Grid, Button } from "@material-ui/core";

const changer = (sound: HTMLAudioElement) => {
	if (sound.paused) {
		sound.play();
	} else {
		sound.currentTime = 0;
		sound.play();
	}
};

function AudioButton(props: IButtonInterface) {
	return (
		<Grid
			item
			container
			xs={4}
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
				onClick={(e) => {
					if (!props.powerState) {
						props.onClick(e);
						changer(props.soundEle);
					}
				}}
			>
				{props.buttonText}
			</Button>
		</Grid>
	);
}

export default AudioButton;
