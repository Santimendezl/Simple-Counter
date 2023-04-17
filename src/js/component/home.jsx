import React from "react";
import SecondsCounter from "./secondscounter.jsx";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock} from '@fortawesome/free-regular-svg-icons';



//create your first component
const Home = (props) => {

		return(
			<>
		<div className=" bg-dark text-white d-flex justify-content-around m-3 py-5 display-1">
			<FontAwesomeIcon icon={faClock} />
			<SecondsCounter seconds={Math.floor(props.seconds/100000)}/>
			<SecondsCounter seconds={Math.floor(props.seconds/10000)}/>
			<SecondsCounter seconds={Math.floor(props.seconds/1000)}/>
			<SecondsCounter seconds={Math.floor(props.seconds/100)}/>
			<SecondsCounter seconds={Math.floor(props.seconds/10)}/>
			<SecondsCounter seconds={props.seconds}/>
		</div>
		
		<div className=" bg-dark text-white d-flex justify-content-around m-3 py-5 display-1">
			<FontAwesomeIcon icon={faClock} />
			<SecondsCounter seconds={Math.floor(props.regressive/100000)}/>
			<SecondsCounter seconds={Math.floor(props.regressive/10000)}/>
			<SecondsCounter seconds={Math.floor(props.regressive/1000)}/>
			<SecondsCounter seconds={Math.floor(props.regressive/100)}/>
			<SecondsCounter seconds={Math.floor(props.regressive/10)}/>
			<SecondsCounter seconds={props.regressive}/>
		</div>
		</>
	);
};

export default Home;
