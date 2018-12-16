import React from 'react';
import chroma from 'chroma-js';
import { SketchPicker, SwatchesPicker } from 'react-color';

import './InputPicker.css'

class InputPicker extends React.Component {

    render() {
        return(
            <div className="inputPicker" style={{backgroundColor: this.props.color.hex('rgb')}}>
                <SketchPicker
                    disableAlpha={true}
                    className="inputPicker-picker"
                    color={this.props.color.hex('rgb')}
                    onChange={this.onColorChange}
                />
                <SwatchesPicker
                    className="inputPicker-picker"
                    color={this.props.color.hex('rgb')}
                    onChange={this.onColorChange}
                />
            </div>
        );
    }

    onColorChange = (color) => {
        this.props.onChange(chroma(color.hex))
    }

}

export default InputPicker;
