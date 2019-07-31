import React from "react";

export class TrafficLight extends React.Component {
	constructor() {
		super();
		this.state = {
			selectedColor: ""
		};
	}

	render() {
		return <div className="thinnerDiv" />;
	}
}
