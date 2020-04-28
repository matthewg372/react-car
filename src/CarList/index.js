import React from 'react'
export default function CarsList(props){
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
				<button onClick={() => props.deleteCar(car.id)}>
				Delete
				</button>
				<button onClick={() => props.editCar(car.id)}>
				Edit
				</button>
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
