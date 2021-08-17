import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { getPostsBySubreddit } from '../services/redditAPI';

const Context = createContext();
const { Provider, Consumer } = Context;

function RedditProvider({ children }) {
  const [postsBySubreddit, setPostsBySubreddit] = useState({
    frontend: {},
    reactjs: {},
  });
  const [selectedSubreddit, setSelectedSubreddit] = useState('reactjs');
  const [shouldRefreshSubreddit, setShouldRefreshSubreddit] = useState(false);
  const [isFetching, setIsFetching] = useState(false);

  // componentDidUpdate(_prevProps, prevState) {
  //   const { state } = this;
  //   const { shouldRefreshSubreddit } = state;
  //   const selectedSubredditChanged = prevState.selectedSubreddit !== state.selectedSubreddit;

  //   if (selectedSubredditChanged || shouldRefreshSubreddit) {
  //     this.fetchPosts();
  //   }
  // }

  function fetchPosts() {
    if (!shouldFetchPosts()) return;

    this.setState({
      shouldRefreshSubreddit: false,
      isFetching: true,
    });

    const { selectedSubreddit } = this.state;
    getPostsBySubreddit(selectedSubreddit).then(handleFetchSuccess, handleFetchError);
  }

  useEffect(fetchPosts, [selectedSubreddit, shouldRefreshSubreddit]);

  function shouldFetchPosts() {
    const posts = postsBySubreddit[selectedSubreddit];

    if (!posts.items) return true;
    if (isFetching) return false;
    return shouldRefreshSubreddit;
  }

  function handleFetchSuccess(json) {
    const lastUpdated = Date.now();
    const items = json.data.children.map((child) => child.data);
    setShouldRefreshSubreddit(false);
    setIsFetching(false);
    setPostsBySubreddit({
      ...postsBySubreddit,
      [selectedSubreddit]: { items, lastUpdated },
    });
  }

  function handleFetchError(error) {
    setShouldRefreshSubreddit(false);
    setIsFetching(false);
    setPostsBySubreddit({
      [selectedSubreddit]: { error: error.message, items: [] },
    });
  }

  function handleSubredditChange(selectedSubreddit) {
    setSelectedSubreddit(selectedSubreddit);
  }

  function handleRefreshSubreddit() {
    setShouldRefreshSubreddit(true);
  }

  const context = {
    postsBySubreddit,
    selectedSubreddit,
    shouldRefreshSubreddit,
    isFetching,
    selectSubreddit: handleSubredditChange,
    fetchPosts: fetchPosts,
    refreshSubreddit: handleRefreshSubreddit,
    availableSubreddits: Object.keys(postsBySubreddit),
    posts: postsBySubreddit[selectedSubreddit].items,
  };

  return <Provider value={context}>{children}</Provider>;
}

RedditProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { RedditProvider as Provider, Consumer, Context };
