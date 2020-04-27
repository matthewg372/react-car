import React from 'react'
export default function CarsList(props){
	console.log(props);
	const cars = props.cars.map(car =>{
		return(
			<li>
				make: {car.make}
				<br/>
				model: {car.model}
				<br/>
				year: {car.year}
				<br/>
				suv: {car.suv}
			</li>


		)
	})
	return(
		<div>
			<ul>
				{cars}
			</ul>		
		</div>


	)
}
