import { FC, useEffect, useRef, useState } from 'react';
import store from '@/stores';
import { Engine } from 'excalibur';

function cleanUpPlayButtons() {
	const playButtons = document.querySelectorAll('#excalibur-play-root');

	playButtons.forEach((playButton) => {
		if (playButton.parentNode) {
			playButton.parentNode.removeChild(playButton);
		}
	});
}


const ExamplePage: FC = () => {
	const canvasRef = useRef<HTMLCanvasElement>();
	const gameRef = useRef<Engine>(null);

	const resetGame = () => {
		if (gameRef.current) {
			gameRef.current.stop();
		}
		cleanUpPlayButtons();
	};

	useEffect(() => {
		// HMR support
		resetGame();

		import('./game').then(({ initialize, start }) => {
			gameRef.current = initialize(canvasRef.current);
			start(gameRef.current);
		});

		return resetGame;
	}, []);

	return <canvas ref={canvasRef}></canvas>;
};

export default ExamplePage;
