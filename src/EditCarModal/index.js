import React from 'react'
import {Form, Button, Label, Segment} from 'semantic-ui-react'


class EditCarForm extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			model: props.editCar.model,
			make: props.editCar.make,
			year: props.editCar.year,
			suv: props.editCar.suv,

		}

	}
	handleChange = (e) => {
		this.setState({
		[e.target.name]: e.target.value

		})
		
	}
	handleSubmit = (e) => {
		e.preventDefault()
		this.props.updateCar(this.state)
		
	}
	render(){
		return(
			
			<Segment>
			<Form onSubmit={this.handleSubmit}>
				<Label>make:</Label>
				<Form.Input
					type='text'
					name='model'
					value={this.state.model}
					onChange={this.handleChange}
				/>
				<Label>model:</Label>
				<Form.Input
					type='text'
					name='make'
					value={this.state.make}
					onChange={this.handleChange}
				/>
				<Label>year:</Label>
				<Form.Input
					type='text'
					name='year'
					value={this.state.year}
					onChange={this.handleChange}
				/>
				<Label>suv:</Label>
				<Form.Input
					type='text'
					name='suv'
					value={this.state.suv}
					onChange={this.handleChange}
				/>
				<Button type='Submit'>update car</Button>
			</Form>
			</Segment>

		)
	}

}

export default EditCarForm