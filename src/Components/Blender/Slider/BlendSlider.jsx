import React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

class BlendSlider extends React.Component{

    render() {

        const color1Hex = this.props.color1.hex('rgb');
        const color2Hex = this.props.color2.hex('rgb');

        const railStyle = {
            background: `linear-gradient(to right, ${color1Hex}, ${color2Hex})`,
        }

        return(
            <div>
                <Slider
                    railStyle={railStyle}
                    trackStyle={{opacity: 0}}
                    value={this.props.blendAmmount * 100}
                    onChange={this.onChange}
                />
            </div>
        );
    }

    onChange = (value) => {
        this.props.onChange(value / 100);
    }

}

export default BlendSlider;
