import {useMemo, useRef} from 'react';
import {
	AbsoluteFill,
	interpolate,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';

const canvasStyle: React.CSSProperties = {
	backgroundColor: 'black',
};

const CanvasTest = () => {
	const canvas = useRef<HTMLCanvasElement>(null);
	const {width, height, fps} = useVideoConfig();

	const frame = useCurrentFrame();

	useMemo(() => {
		if (!canvas.current) {
			return;
		}

		const radius = interpolate(
			frame,
			[0, 5 * fps],
			[height * 0.3, height * 0.5]
		);
		const centerX = interpolate(
			frame,
			[0, 5 * fps],
			[height * 0.3 + 2, width - height * 0.5 - 2]
		);

		const centerY = height / 2;

		const ctx = canvas.current.getContext('2d');

		if (!ctx) {
			return;
		}

		ctx.clearRect(0, 0, width, height);

		ctx.beginPath();
		ctx.strokeStyle = 'white';
		ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
		ctx.font = '30px monospace';
		ctx.fillStyle = 'white';
		ctx.textAlign = 'center';
		ctx.fillText('Canvas Rendering Test', centerX, centerY);
		ctx.stroke();
	}, [fps, frame, height, width]);

	return (
		<AbsoluteFill>
			<canvas ref={canvas} width={width} height={height} style={canvasStyle} />
		</AbsoluteFill>
	);
};

export default CanvasTest;
