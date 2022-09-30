import {AbsoluteFill, useVideoConfig, Video} from 'remotion';

const overlayTest: React.CSSProperties = {
	position: 'absolute',
	top: 0,
	bottom: 0,
	left: 0,
	right: 0,
	fontSize: '5em',
	fontFamily: 'monospace',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	textAlign: 'center',
};

const VideoTest = () => {
	const {fps} = useVideoConfig();

	return (
		<AbsoluteFill>
			<Video
				startFrom={fps * 20}
				endAt={fps * 30}
				volume={0.5}
				src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
			/>
			<span style={overlayTest}>
				This is video test. This text should appear on top of video
			</span>
		</AbsoluteFill>
	);
};

export default VideoTest;
