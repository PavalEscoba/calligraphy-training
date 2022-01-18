import React from "react";
import { connect } from "react-redux";

const UserHeader = (props) => {
  const { user } = props;

  if (!user) {
    return null;
  }

  return <p className="title">{user.name}</p>;
  };

const mapStateToProps = (state, ownProps) => {
  return { user: state.users.find((user) => user.id === ownProps.userId) };
};

export default connect(mapStateToProps)(UserHeader);
