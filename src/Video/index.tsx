import {Audio, Series} from 'remotion';
import CanvasTest from './CanvasTest';
import CSSTest from './CSSTest';
import {Introduction} from './Introduction';
import VideoTest from './VideoTest';

const fps = 30;

const Remotion = () => {
	return (
		<>
			<Series>
				<Series.Sequence durationInFrames={4 * fps}>
					<Introduction />
				</Series.Sequence>
				<Series.Sequence durationInFrames={10 * fps}>
					<VideoTest />
				</Series.Sequence>
				<Series.Sequence durationInFrames={5 * fps}>
					<CanvasTest />
				</Series.Sequence>
				<Series.Sequence durationInFrames={6 * fps}>
					<CSSTest />
				</Series.Sequence>
			</Series>
			<Audio
				src="https://mdn.github.io/learning-area/html/multimedia-and-embedding/video-and-audio-content/viper.mp3"
				volume={0.2}
			/>
		</>
	);
};

export default Remotion;
