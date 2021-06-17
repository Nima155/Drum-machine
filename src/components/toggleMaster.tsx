import { useSpring, animated, config } from "react-spring";
import { Grid } from "@material-ui/core";
import { IToggleProps } from "../interfaces/interfaces";

export function ToggleMaster(props: IToggleProps): any {
	const toggleStyle = useSpring({
		transform: props.toggle ? "translateX(18px)" : "translateX(0px)",
	});
	return (
		<Grid item container xs={6} direction="column" alignItems="center">
			<h5 style={{ color: "#FFFFFFC1" }}>{props.title}</h5>
			<div
				style={{ backgroundColor: "#00203FFF", width: "40px", padding: "2px" }}
				onClick={props.onClick}
			>
				<Grid
					item
					container
					style={{
						width: "36px",
						backgroundColor: "cadetblue",
						position: "relative",
						height: "1rem",
					}}
					alignItems="center"
				>
					<Grid
						item
						xs={6}
						style={{
							backgroundColor: "#bd4245",
							height: "1rem",
							fontSize: "10px",
						}}
					>
						<p>OFF</p>
					</Grid>
					<Grid item xs={6} style={{ fontSize: "12px", textAlign: "center" }}>
						On
					</Grid>
					<animated.div
						style={{
							backgroundColor: "green",
							width: "18px",
							height: "1rem",
							position: "absolute",
							...toggleStyle,
						}}
					></animated.div>
				</Grid>
			</div>
		</Grid>
	);
}
