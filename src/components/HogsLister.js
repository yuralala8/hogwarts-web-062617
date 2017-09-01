import React from 'react';


const HogsLister = ({ hogs, sortType, greased }) => {

	return(

		<div className="hog-list">
			{hogs.map((hog) => {
				return (
					<div key={hog.name}>
					<img src={`./hog-imgs/${hog.name.toLowerCase().replace(/\s/g, "_")}.jpg`} alt={hog.name}/>
					<p> Name: {hog.name} </p>
					<p> Specialty: {hog.specialty} </p>
					<p> Medal: {hog["highest medal achieved"]} </p>
					<p> Weight: {hog["weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"]} </p>
					</div>
				)
			})}
		</div>
		)

}



export default HogsLister;