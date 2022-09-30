import {Composition} from 'remotion';
import CanvasTest from './Video/CanvasTest';
import CSSTest from './Video/CSSTest';
import Remotion from './Video/index';
import {Introduction} from './Video/Introduction';
import VideoTest from './Video/VideoTest';

const fps = 30;
const width = 1920;
const height = 1080;

export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Composition
				id="Main"
				component={Remotion}
				durationInFrames={25 * fps}
				fps={fps}
				width={width}
				height={height}
			/>
			<Composition
				id="Introduction"
				component={Introduction}
				durationInFrames={4 * fps}
				fps={fps}
				width={width}
				height={height}
			/>
			<Composition
				id="Video"
				component={VideoTest}
				durationInFrames={10 * fps}
				fps={fps}
				width={width}
				height={height}
			/>
			<Composition
				id="Canvas"
				component={CanvasTest}
				durationInFrames={5 * fps}
				fps={fps}
				width={width}
				height={height}
			/>
			<Composition
				id="CSS"
				component={CSSTest}
				durationInFrames={6 * fps}
				fps={fps}
				width={width}
				height={height}
			/>
		</>
	);
};
