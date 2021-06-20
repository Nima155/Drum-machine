export interface IToggleProps {
	onClick: React.MouseEventHandler<HTMLDivElement>;
	toggle: boolean;
	title: string;
}
export interface IButtonInterface {
	onClick: React.MouseEventHandler<HTMLButtonElement>;
	soundEle: HTMLAudioElement;
	buttonText: string;
	powerState: boolean;
}
export interface StyledTabProps {
	label: string;
}

export interface StyledTabsProps {
	value: number;
	onChange: (event: React.ChangeEvent<{}>, newValue: number) => void;
}
