const React = require('react')

class DelayedButton extends React.Component{


	click(event) {
		event.persist()
		setTimeout(() => {this.props.onDelayedClick(event)}, this.props.delay)
	}

	render() {
		return (
			<button onClick= {this.click.bind(this)}> </button> 
		)
	}
}

module.exports = DelayedButton