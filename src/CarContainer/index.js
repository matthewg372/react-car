import React from 'react'
import CarList from '../CarList'


class CarContainer extends React.Component{
	constructor(){
		super()
		this.state={
			cars: []
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



	render(){
		return(
			<div>
			<CarList cars={this.state.cars}/>


			</div>
		)
	}
}

export default CarContainer