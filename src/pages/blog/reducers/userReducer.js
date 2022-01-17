const userReducer = (users =[], action) => {
  switch (action.type) {
    case 'FETCH_USERS':
      return [...users, action.payload]
    default:
      return users;
  };
};

export default userReducer;