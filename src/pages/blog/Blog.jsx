import React from "react";
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'

import reducers from './reducers';
import PostList from './components/PostList'

const Blog = () => {
  const store = createStore(reducers, applyMiddleware(thunk))
  return (
        <Provider store={store}>
          <div className="blog">
            <div className="row">
              <div className="col-12">
                <h1 className="section-title">
                  Blog
                </h1>
                <p className="subtitle">List of blog posts</p>
              </div>
            </div>
            <div className="col-12">
              <PostList />
            </div>
          </div>
        </Provider>
  );
};

export default Blog;
