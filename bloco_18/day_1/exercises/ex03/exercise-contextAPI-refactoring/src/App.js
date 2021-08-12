import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getPostsBySubreddit } from './services/redditAPI';
import MyContext from './MyContext/MyContext';
import Posts from './components/Posts';
import Selector from './components/Selector';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSubreddit: 'reactjs',
      posts: [],
      options: ['frontend', 'reactjs'],
      isFetching: false,
    };
    this.fetchPosts = this.fetchPosts.bind(this);
    this.selectSubreddit = this.selectSubreddit.bind(this);
  }

  componentDidMount() {
    console.log('didmount');
    this.fetchPosts();
  }

  fetchPosts() {
    const { selectedSubreddit } = this.state;
    this.setState({ isFetching: true }, async () => {
      const response = await getPostsBySubreddit(selectedSubreddit);
      const posts = response.data.children.map((child) => child.data);
      this.setState({ posts, isFetching: false });
    });
  }

  selectSubreddit({ target }) {
    const { value, name } = target;
    this.setState({ [name]: value }, this.fetchPosts);
  }

  render() {
    const { posts, selectedSubreddit, options, isFetching } = this.state;
    const providerValue = {
      posts,
      selectedSubreddit,
      options,
      selectSubreddit: this.selectSubreddit,
    };
    const isEmpty = posts.length === 0;

    return (
      <MyContext.Provider value={providerValue}>
        <Selector />
        {isFetching && <h2>Loading...</h2>}
        {!isFetching && isEmpty && <h2>Empty.</h2>}
        {!isFetching && !isEmpty && <Posts />}
      </MyContext.Provider>
    );
  }
}

App.propTypes = {
  availableSubreddits: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  dispatch: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  lastUpdated: PropTypes.number,
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
  selectedSubreddit: PropTypes.string.isRequired,
};

App.defaultProps = {
  lastUpdated: null,
  posts: [],
};

export default App;
