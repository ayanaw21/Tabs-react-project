import React from "react";
import { v4 as uuidv4 } from "uuid";
import { FaAngleDoubleRight } from "react-icons/fa";
const Duties = ({ duties }) => {
	const id = uuidv4()
    console.log(id);
    

	return (
		<div>
			{duties.map((duty, index) => {
				return (
					<div key={index} className="job-desc">
						<FaAngleDoubleRight className="job-icon" />
						<p>{duty}</p>
					</div>
				);
			})}
		</div>
	);
};

export default Duties;
