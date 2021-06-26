import React from 'react';

class InputTextArea extends React.Component {
  render() {
    const { labelText, name, value, max, onMouseEnter, onChange } = this.props;
    return (
      <label>
        {labelText}
        <textarea
          name={name}
          value={value}
          onMouseEnter={onMouseEnter}
          onChange={(event) => onChange(event, max)}
        />
      </label>
    );
  }
}

export default InputTextArea;
