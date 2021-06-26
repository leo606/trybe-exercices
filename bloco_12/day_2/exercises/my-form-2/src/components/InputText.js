import React from 'react';

class InputText extends React.Component {
  render() {
    const { name, value, onChange, labelText } = this.props;

    return (
      <label>
        {labelText}
        <input
          name={name}
          value={value}
          onChange={onChange}
        />
      </label>
    );
  }
}

export default InputText;
