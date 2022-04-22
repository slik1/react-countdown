import React from 'react';

const DateTimeDisplay = ({ value, type }) => {
	return (
		<div className="date-time-container">
			<p>{value}</p>
			<p>{type}</p>
		</div>
	);
};

export default DateTimeDisplay;
