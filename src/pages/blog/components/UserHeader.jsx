import React from "react";
import { connect } from "react-redux";

class UserHeader extends React.Component {
  render() {
    const { user } = this.props;

    if (!user) {
      return null;
    }

    return <p>{user.name}</p>;
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  return { user: state.users.find((user) => user.id === ownProps.userId) };
};

export default connect(mapStateToProps)(UserHeader);
