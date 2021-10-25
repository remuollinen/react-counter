import React, { Component } from "react";
import Number from "./Number";
import Button from "./Button";

class Main extends Component {
	render() {
		return (
			<main>
				<Number />
				<div className="button-wrapper">
					<Button text="Add one" />
					<Button text="Remove one" />
					<Button text="Reset" />
				</div>
			</main>
		);
	}
}

export default Main;
