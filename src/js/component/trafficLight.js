import React from "react";

export class TrafficLight extends React.Component {
	constructor() {
		super();
		this.state = {
			selectedColor: ""
		};
	}

	render() {
		return (
			<div className="text-center mt-5">
				<div className="thinnerDiv pt-1" />
				<div className="widerDiv">
					<div className="dot red mb-3" />
					<div className="dot yellow mb-3" />
					<div className="dot green" />
				</div>
			</div>
		);
	}
}
