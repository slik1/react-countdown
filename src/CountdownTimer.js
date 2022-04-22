import React from 'react';
import { useCountdown } from './hooks/useCountdown';
import DateTimeDisplay from './DateTimeDisplay';

const ExpiredNotice = () => {
	return (
		<div className="expired-container">
			<p>The time has arrived!</p>
		</div>
	);
};

const ShowCounter = ({ days, hours, minutes, seconds }) => {
	return (
		<div className="counter-container">
			<DateTimeDisplay value={days} type={'Days'} />
			<DateTimeDisplay value={hours} type={'Hours'} />
			<DateTimeDisplay value={minutes} type={'Minutes'} />
			<DateTimeDisplay value={seconds} type={'Seconds'} />
		</div>
	);
};

const CountdownTimer = ({ targetDate }) => {
	const [days, hours, minutes, seconds] = useCountdown(targetDate);

	if (days + hours + minutes + seconds <= 0) {
		return <ExpiredNotice />;
	} else {
		return <ShowCounter days={days} hours={hours} minutes={minutes} seconds={seconds} />;
	}
};

export default CountdownTimer;
