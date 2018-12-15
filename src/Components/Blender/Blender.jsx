import React from 'react';
import Picker from '../Picker/Picker';
import BlendSlider from './Slider/BlendSlider';
import chroma from 'chroma-js';
import './Blender.css';

class Blender extends React.Component {
  render() {
      return (
        <div className="blender">
            <Picker
                color={this.props.color1}
                onChange={this.props.onColor1Change}
            />
            <BlendSlider
                color1={this.props.color1}
                color2={this.props.color2}
                onChange={this.props.onBlendChange}
                blendAmmount={this.props.blendAmmount}
            />
            <Picker
                color={this.props.color2}
                onChange={this.props.onColor2Change}
            />
        </div>
      );
  }
}

export default Blender;
