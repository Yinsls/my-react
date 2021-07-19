import React from "react";
import { Input } from "antd";

const scaleNames: any = {
  c: "Celsius",
  f: "Fahrenheit",
};

export default class TemperatureInput extends React.Component<any> {
  constructor(props: any) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e: any) {
    this.props.onTemperatureChange(e.target.value);
  }

  render() {
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    const tip = scale === "c" ? "°C" : "°F";
    return (
      <fieldset>
        <label htmlFor="">
          <span
            className="title"
            style={{
              display: "inline-block",
              width: "100px",
              paddingRight: "10px",
              textAlign: "right",
            }}
          >
            {scaleNames[scale]}:
          </span>
          <Input
            value={temperature}
            onChange={this.handleChange}
            style={{ width: "200px" }}
            suffix={tip}
          />
        </label>
      </fieldset>
    );
  }
}
