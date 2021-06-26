import React from 'react';

class InputTextArea extends React.Component {
  render() {
    const { labelText, name, value, max, onChange } = this.props;
    return (
      <label>
        {labelText}
        <textarea name={name} value={value} onChange={(event)=> onChange(event, max)} />
      </label>
    );
  }
}

export default InputTextArea;
