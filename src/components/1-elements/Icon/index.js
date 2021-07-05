import React, {Component} from 'react'
import Shape from './shapes'
import IconPath from './style'

export default class Icon extends Component {

	constructor (props) {
			super(props)
			this.handleClick = this.handleClick.bind(this)
			this.state = {
					// STATE HERE
			}
	}

	handleClick (event) {
			// this.setState({value: !this.state.value })
			// console.log('Action logged' + this.state.value)
	}

	render (props) {
		let shape = Shape[this.props.shape]
		let color = this.props.color
		let height = this.props.height || this.props.size
		let width = this.props.width || this.props.size

		
		return (			
				
			<IconPath 
				className={this.props.shape + '_icon'} 
				color={color} 
				height={height} 
				width={width} 
				>
				{shape}
			</IconPath>
				
		)
	}
};


