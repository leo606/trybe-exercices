import React from 'react';

class InputSelect extends React.Component {
  render() {
    const { labelText, name, value, onChange, options } = this.props;
    return (
      <label>
        {labelText}
        <select name={name} value={value} onChange={onChange}>
          {options.map((elem) => (
            <option key={elem.uf}>
              {elem.uf} - {elem.nome}
            </option>
          ))}
        </select>
      </label>
    );
  }
}

export default InputSelect;
