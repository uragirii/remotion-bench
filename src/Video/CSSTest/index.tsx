import React from 'react';
import {
	AbsoluteFill,
	interpolate,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {Logo} from './Logo';

const filters = [
	'blur(10px)',
	'contrast(200%)',
	'grayscale(80%)',
	'hue-rotate(90deg)',
];

const text: React.CSSProperties = {
	position: 'absolute',
	left: 0,
	right: 0,
	bottom: 100,
	textAlign: 'center',
	fontSize: '3em',
	fontFamily: 'monospace',
};

const CSSTest = () => {
	const {fps} = useVideoConfig();
	const frame = useCurrentFrame();

	const size = spring({
		frame,
		fps,
		from: 100,
		to: 1100,
		durationInFrames: fps * 5,
	});

	const filterIndex = interpolate(frame, [0, fps * 6], [0, filters.length]);
	const rotate = spring({
		frame,
		fps,
		from: -45,
		to: 0,
		durationInFrames: fps * 6,
	});

	const filter = filters[Math.floor(filterIndex)];

	return (
		<AbsoluteFill
			style={{
				backgroundColor: 'white',
				display: 'flex',
				justifyContent: 'center',
			}}
		>
			<div style={{filter, transform: `rotateZ(${rotate}deg)`}}>
				<Logo size={size} />
			</div>
			<span style={text}>
				Applying CSS properties filter({filter}), transform(rotateZ(
				{rotate.toFixed(2)}
				deg))
			</span>
		</AbsoluteFill>
	);
};

export default CSSTest;
