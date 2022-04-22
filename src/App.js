import React from 'react';
import CountdownTimer from './CountdownTimer';

import './App.scss';

export default function App() {
	const NOW_IN_MS = new Date().getTime();
	const TARGET_DATE_IN_MS = 31 * 24 * 60 * 60 * 1000;

	const dateTimeAfterTargetDate = NOW_IN_MS + TARGET_DATE_IN_MS;

	return (
		<div>
			<CountdownTimer targetDate={dateTimeAfterTargetDate} />
		</div>
	);
}
