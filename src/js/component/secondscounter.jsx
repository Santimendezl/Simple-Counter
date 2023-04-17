import React from "react";

const SecondsCounter = (props) => {
	
	return (
		<div className="fw-bold" style={{width: 50}}>
			<div>{props.seconds %10}</div>
		</div>
	);
};

export default SecondsCounter;
