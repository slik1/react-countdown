import React from 'react';
import CountdownTimer from './CountdownTimer';

import './App.scss';

export default function App() {
	const TARGET_DATE_IN_MS = new Date('May 22, 2022 12:00:00').getTime();

	return (
		<div className="main-container">
			<div className="inner-container">
				<h1>Playa Del Carmen Trip</h1>
				<CountdownTimer targetDate={TARGET_DATE_IN_MS} />
			</div>
		</div>
	);
}
