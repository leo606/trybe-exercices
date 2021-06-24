import React from 'react';

class Button extends React.Component {
  render() {
    return (
      <button onClick={this.props.clicLis}>{this.props.btnText}</button>
    )
  }
}

export default Button;
