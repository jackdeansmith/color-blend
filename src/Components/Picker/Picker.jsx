import React from 'react'
import chroma from 'chroma-js';
import { SketchPicker } from 'react-color'

class ColorPicker extends React.Component {
  render() {
    return (
        <SketchPicker
            color={this.props.color.hex('rgb')}
            onChange={this.onChange}
            disableAlpha={true}
        />
    );
  }

  onChange = (rawColor) => {
    this.props.onChange(chroma(rawColor['hex']));
  }
}

export default ColorPicker;
