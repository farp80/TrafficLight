import React from "react";

export class TrafficLight extends React.Component {
	constructor() {
		super();
		this.state = {
			selectedColor: ""
		};
	}

	render() {
		let greenGlow = "";
		let redGlow = "";
		let yellowGlow = "";

		switch (this.state.selectedColor) {
			case "red":
				redGlow = "glow";
				break;

			case "yellow":
				yellowGlow = "glow";
				break;

			case "green":
				greenGlow = "glow";
				break;
		}

		return (
			<div className="text-center mt-5">
				<div className="thinnerDiv pt-1" />
				<div className="widerDiv">
					<div
						className={"dot red mb-3 " + redGlow}
						onClick={() => this.setState({ selectedColor: "red" })}
					/>
					<div
						className={"dot yellow mb-3 " + yellowGlow}
						onClick={() =>
							this.setState({ selectedColor: "yellow" })
						}
					/>
					<div
						className={"dot green " + greenGlow}
						onClick={() =>
							this.setState({ selectedColor: "green" })
						}
					/>
				</div>
			</div>
		);
	}
}
