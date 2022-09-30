import {Series} from 'remotion';
import CanvasTest from './CanvasTest';
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
			</Series>
		</>
	);
};

export default Remotion;
