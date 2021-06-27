import React from 'react';

class InputRadio extends React.Component {
  render() {
    const { labelText, name, radios, value, onChange } = this.props;
    return (
      <div>
        {labelText}
        {radios.map((elem) => (
          <label key={elem}>
            <input
              type='radio'
              value={value}
              name={name}
              onChange={(event) => onChange(event, elem)}
            />
            {elem}
          </label>
        ))}
      </div>
    );
  }
}

export default InputRadio;
