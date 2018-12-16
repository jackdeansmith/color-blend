import React from 'react';
import Slider from 'rc-slider';
import chroma from 'chroma-js';

import 'rc-slider/assets/index.css';
import './BlendChooser.css'

function Handle(props) {
    const style = {
        height: '40px',
        width: '15px',
        position: 'absolute',
        left: `${props.value}%`,
        top: '-5px',
        backgroundColor: 'white',
    }
    return (
        <div style={style}/>
    );
}

class BlendChooser extends React.Component {

    render() {

        const blendedColor = chroma.mix(this.props.color1, this.props.color2, this.props.value, 'lab');
        const color1Hex = this.props.color1.hex('rgb');
        const color2Hex = this.props.color2.hex('rgb');
        const blendedColorHex = blendedColor.hex('rgb');

        const sliderStyle = {
            height: '20px',
        }

        const railStyle = {
            height: '100%',
            width: '100%',
            background: `linear-gradient(to right, ${color1Hex}, ${color2Hex})`,
            borderRadius: '0px',
        }

        return(
            <div className="blendChooser" style={{backgroundColor: blendedColorHex}}>
                <Slider
                    style={sliderStyle}
                    railStyle={railStyle}
                    trackStyle={{opacity: 0}}
                    handle={Handle}
                    value={this.props.value * 100}
                    onChange={this.onChange}
                />

                <p className="blendChooser-text" >{blendedColorHex}</p>
            </div>
        );
    }

    onChange = (value) => {
        this.props.onChange(value / 100);
    }

}

export default BlendChooser;
