import React from 'react';
import PropTypes from 'prop-types';
import MyContext from '../MyContext/MyContext';

const renderOptions = (options) =>
  options.map((option) => (
    <option value={option} key={option}>
      {option}
    </option>
  ));

const Selector = () => (
  <MyContext.Consumer>
    {({ selectedSubreddit, options, selectSubreddit }) => (
      <>
        <h1>{`Selected: ${selectedSubreddit}`}</h1>
        <select
          name="selectedSubreddit"
          value={selectedSubreddit}
          onChange={selectSubreddit}
        >
          {renderOptions(options)}
        </select>
      </>
    )}
  </MyContext.Consumer>
);

Selector.propTypes = {
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  value: PropTypes.string.isRequired,
};

export default Selector;
