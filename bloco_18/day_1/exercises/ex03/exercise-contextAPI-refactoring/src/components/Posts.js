import React from 'react';
import PropTypes from 'prop-types';
import MyContext from '../MyContext/MyContext';

const Posts = ({ posts }) => (
  <MyContext.Consumer>
    {({ posts }) => posts.map(({ id, title }) => <li key={id}>{title}</li>)}
  </MyContext.Consumer>
);

Posts.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Posts;
