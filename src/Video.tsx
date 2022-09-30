import {Composition} from 'remotion';
import Remotion from './Video/index';

// Each <Composition> is an entry in the sidebar!

export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Composition
				// You can take the "id" to render a video:
				// npx remotion render src/index.tsx <id> out/video.mp4
				id="Main"
				component={Remotion}
				durationInFrames={15 * 30}
				fps={30}
				width={1920}
				height={1080}
				// You can override these props for each render:
				// https://www.remotion.dev/docs/parametrized-rendering
				defaultProps={{
					titleText: 'Remotion Testing Video',
					titleColor: 'black',
				}}
			/>
		</>
	);
};
