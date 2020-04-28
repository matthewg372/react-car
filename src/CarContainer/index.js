import React from 'react'
import CarList from '../CarList'
import NewCarForm from '../NewCarForm'


class CarContainer extends React.Component{
	constructor(){
		super()
		this.state={
			cars: []
			idOfCarToEdit:-1
		}
	}
	componentDidMount(){
		this.getCars()
	}

	getCars = async () => {
		try{
			const url = process.env.REACT_APP_API_URL + '/api/v1/cars/'
			const carsResponse = await fetch(url)
			const carsJson = await carsResponse.json()
			console.log(carsJson.data);
			this.setState({
				cars: carsJson.data
			})
		
		}catch(err){
			console.log(err)	
		}
		
	}
	createCar = async (CarToAdd) => {
		try{
		const url = process.env.REACT_APP_API_URL + '/api/v1/cars/'
		const createdCarResponse = await fetch(url,{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(CarToAdd)
		})
		const creatCarJson = await createdCarResponse.json()
		if(createdCarResponse.status === 201){
			this.setState({
          	cars: [...this.state.cars, creatCarJson.data]
        })
			
		}
		}catch(err){
			console.log(err)	
		}
	}
	deleteCar = async (carToDelete) =>{
		try{
			console.log(carToDelete);		
			const url = process.env.REACT_APP_API_URL + '/api/v1/cars/'
			const deletedCarResponse = await fetch(url + carToDelete,{
			method: 'DELETE',
			})
			const deletedCarJson = await deletedCarResponse.json()
			if(deletedCarResponse.status === 200){
				this.setState({
					cars: this.state.cars.filter(car => car.id != carToDelete)
				})
			}
		}catch(err){
			console.log(err)	
		}
	}
	// editCar = (editCar) => {
	// 	this.setState({
	// 		idOfCarToEdit: editCar

	// 	})

		
	// }



	render(){
		return(
			<div>
			<CarList 
			cars={this.state.cars}
			deleteCar={this.deleteCar}
			/>
			<NewCarForm createCar={this.createCar}/>


			</div>
		)
	}
}

export default CarContainer