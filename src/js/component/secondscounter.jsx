import React from "react";

const SecondsCounter = (props) => {
	return (
		<div className="fw-bold">
			<div>{props.seconds %10}</div>
		</div>
	);
};

export default SecondsCounter;
