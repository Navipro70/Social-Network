const FOLLOWING = "FOLLOWING";
const SET_USERS = "SET-USERS";
const SET_PAGE = "SET-PAGE";
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT";

let initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1
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
        users: action.users
      };
    case SET_PAGE:
      return {
        ...state,
        currentPage: action.currentPage
      };
    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.totalUsersCount
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

export const setCurrentPageCreator = pageNumber => ({
  type: SET_PAGE,
  currentPage: pageNumber
});

export const setTotalUsersCountCreator = totalUsersCount => ({
  type: SET_TOTAL_USERS_COUNT,
  totalUsersCount: totalUsersCount
});