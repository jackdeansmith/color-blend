import React from 'react'
import './Output.css'

const colorDiv = (color) => {
  const style = {
    backgroundColor: color.hex('rgb'),
  }
  return (
    <div style={style}>&nbsp;</div>
  );
}

class Output extends React.Component {
  render() {
    return (
        <div className='output'>
          {colorDiv(this.props.color1)}
          {colorDiv(this.props.colorOut)}
          {colorDiv(this.props.color2)}
        </div>
    );
  }
}

export default Output;
