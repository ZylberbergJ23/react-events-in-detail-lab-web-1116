const React = require('react')

class CoordinatesButton extends React.Component{

	coordinates(event) {
		this.props.onReceiveCoordinates([event.clientX, event.clientY])
	}

	render() {
		return (
			<button onClick = {this.coordinates.bind(this)}> </button> 
		)
	}
}

module.exports = CoordinatesButton