import React from 'react'
export default function CarsList(props){
	console.log(props.boolean);
	const cars = props.cars.map(car =>{
		return(
			<li key={car.id}>
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
