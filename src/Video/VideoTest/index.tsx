import {AbsoluteFill, Video} from 'remotion';

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
};

const VideoTest = () => {
	return (
		<AbsoluteFill>
			<Video src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" />
			<span style={overlayTest}>This test is displayed over the video</span>
		</AbsoluteFill>
	);
};

export default VideoTest;
