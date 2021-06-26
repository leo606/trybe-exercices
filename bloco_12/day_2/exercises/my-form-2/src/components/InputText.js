import React from 'react';

class InputText extends React.Component {
  render() {
    const { name, value, labelText, max, onChange } = this.props;

    return (
      <label>
        {labelText}
        <input
          name={name}
          value={value}
          onChange={(event) => onChange(event, max)}
        />
      </label>
    );
  }
}

export default InputText;
