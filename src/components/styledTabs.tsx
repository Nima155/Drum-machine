import { withStyles, Tabs } from "@material-ui/core";
import { StyledTabsProps } from "../interfaces/interfaces";
export const StyledTabs = withStyles({
	indicator: {
		display: "flex",
		justifyContent: "center",
		backgroundColor: "transparent",
		"& > span": {
			maxWidth: 70,
			width: "100%",
			backgroundColor: "cyan",
		},
	},
})((props: StyledTabsProps) => (
	<Tabs {...props} TabIndicatorProps={{ children: <span /> }} />
));
