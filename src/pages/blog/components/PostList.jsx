import React from 'react';
import { connect } from 'react-redux'
import {fetchPosts} from '../actions';
import UserHeader from './UserHeader';

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  };

  renderList () {
    return this.props.posts.map(post => {
      return (
        <div key={post.id} className="list-group-item post">
          <div className="post__header">
            <UserHeader userId={post.userId}/>
            <h3 className="post__title">
              {post.title}
            </h3>
          </div>
          <div className="post__main">
            <p className="post__text">
              {post.body}
            </p>
          </div>
        </div>
      )
    })
  }

  render() {
    console.log(this.props.posts);
    return (
      <div className="list-group">
        {this.renderList()}
      </div>
    )
  }
};

const mapStateToProps = (state)=> {
  return {posts: state.posts}
}

export default connect(mapStateToProps, {fetchPosts})(PostList);