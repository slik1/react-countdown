import React from 'react';

const DateTimeDisplay = ({ value, type }) => {
	return (
		<div className="date-time-container">
			<p className="value">{value}</p>
			<span className="label">{type}</span>
		</div>
	);
};

export default DateTimeDisplay;
