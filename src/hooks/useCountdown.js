import { useState, useEffect } from 'react';

const useCountdown = (targetDate) => {
	const countDownDate = new Date(targetDate).getTime();

	const [countDownValue, setCountDown] = useState(countDownDate - new Date().getTime());

	useEffect(() => {
		const interval = setInterval(() => {
			setCountDown(countDownDate - new Date().getTime());
		}, 1000);

		return () => clearInterval(interval);
	}, [countDownDate]);

	return getReturnValues(countDownValue);
};

const getReturnValues = (countDownValue) => {
	//calculate time left
	const days = Math.floor(countDownValue / (1000 * 60 * 60 * 24));
	const hours = Math.floor((countDownValue % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	const minutes = Math.floor((countDownValue % (1000 * 60 * 60)) / (1000 * 60));
	const seconds = Math.floor((countDownValue % (1000 * 60)) / 1000);

	return [days, hours, minutes, seconds];
};

export { useCountdown };
