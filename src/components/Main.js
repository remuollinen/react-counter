import React, { Component } from "react";

class Main extends Component {
	state = {
		counter: 0,
	};

	addOneHandler = () => {
		this.setState({
			counter: this.state.counter + 1,
		});
	};

	addFiveHandler = () => {
		this.setState({
			counter: this.state.counter + 5,
		});
	};

	removeOneHandler = () => {
		if (this.state.counter !== 0) {
			this.setState({
				counter: this.state.counter - 1,
			});
		}
	};

	removeFiveHandler = () => {
		if (this.state.counter > 4) {
			this.setState({
				counter: this.state.counter - 5,
			});
		}
	};

	resetHandler = () => {
		this.setState({
			counter: 0,
		});
	};

	render() {
		let numberStyles = "";

		this.state.counter === 0
			? (numberStyles = "number-container")
			: this.state.counter % 2 === 0
			? (numberStyles = "number-container even")
			: (numberStyles = "number-container odd");

		return (
			<main>
				<div className={numberStyles}>{this.state.counter}</div>
				<div className="button-wrapper">
					<button onClick={this.addOneHandler}>Add one</button>
					<button onClick={this.addFiveHandler}>Add five</button>
					<button onClick={this.removeOneHandler}>Remove one</button>
					<button onClick={this.removeFiveHandler}>Remove five</button>
					<button onClick={this.resetHandler}>Reset</button>
				</div>
			</main>
		);
	}
}

export default Main;
