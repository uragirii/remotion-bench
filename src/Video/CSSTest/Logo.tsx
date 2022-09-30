import {Triangle} from './Triangle';
const outer: React.CSSProperties = {
	display: 'flex',
	justifyContent: 'center',
	flex: 1,
	alignItems: 'center',
};

export const Logo: React.FC<{
	size: number;
	color?: string;
}> = ({size, color}) => {
	return (
		<div style={outer}>
			<Triangle color={color} size={size} opacity={0.2} />
			<Triangle color={color} size={(size * 9) / 11} opacity={0.4} />
			<Triangle color={color} size={(size * 7) / 11} opacity={1} />
		</div>
	);
};
