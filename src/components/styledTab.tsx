import { Tab, Theme, withStyles, createStyles } from "@material-ui/core";
import { StyledTabProps } from "../interfaces/interfaces";
export const StyledTab = withStyles((theme: Theme) =>
	createStyles({
		root: {
			textTransform: "none",
			color: "#fff",
			fontWeight: theme.typography.fontWeightRegular,
			fontSize: theme.typography.pxToRem(15),
			marginRight: theme.spacing(1),
			"&:focus": {
				opacity: 1,
			},
		},
	})
)((props: StyledTabProps) => <Tab disableRipple {...props} />);
