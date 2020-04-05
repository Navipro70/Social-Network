const FOLLOWING = "FOLLOWING";
const SET_USERS = "SET-USERS";

let initialState = {
  users: []
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOWING:
      return {
        ...state,
        users: state.users.map(
            user => {
              if (user.id === action.id) {
                let userCopy = {...user};
                userCopy.followed = !user.followed;
                return userCopy;
              }
              return user;
            }
        )
      };
    case SET_USERS:
      return {
        ...state,
        users: [...state.users, ...action.users]
      };
    default:
      return state;
  }
};

export default usersReducer;

export const followingCreator = id => ({
  type: FOLLOWING,
  id: id
});

export const setUsersCreator = users => ({
  type: SET_USERS,
  users: users
});
