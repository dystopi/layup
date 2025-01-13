import React from 'react';

interface SliderProps {
  min: number;
  max: number;
  value: number;
  label: string;
  onChange: (value: number) => void;
}

class Slider extends React.Component<SliderProps> {
  constructor(props: SliderProps) {
    super(props);
    this.state = { value: props.value };
  }

  handleChange = (event: any) => {
    const value = parseFloat(event.target.value);
    this.props.onChange(value);
    this.setState({ value });
  };

  render() {
    return (
      <div className="sliders-container">
        <input
          type="range"
          min={this.props.min}
          max={this.props.max}
          value={this.state.value}
          onChange={this.handleChange}
        />
        <label>{this.props.label}</label>
      </div>
    );
  }
}

export { Slider };

