import React from 'react'
import {Form, Button, Label, Segment} from 'semantic-ui-react'


class NewCarForm extends React.Component{
	constructor(props){
		super(props)
		this.state ={
			model: '',
			make: '',
			year: '',
			suv: '',

		}

	}
	handleChange = (e) => {
		const state = this.state
		state[e.target.name] = e.target.value
		this.setState(state)
		
	}
	handleSubmit = (e) => {
		e.preventDefault()
		this.props.createCar(this.state)
		this.setState({
			model: '',
			make: '',
			year: '',
			suv: ''

		})
		
	}
	render(){
		return(
			
			<Segment>
			<Form onSubmit={this.handleSubmit}>
				<Label>make:</Label>
				<Form.Input
					type='text'
					name='make'
					value={this.state.make}
					onChange={this.handleChange}
				/>
				<Label>model:</Label>
				<Form.Input
					type='text'
					name='model'
					value={this.state.model}
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
				<Button type='Submit'>Add</Button>
			</Form>
			</Segment>

		)
	}

}

export default NewCarForm