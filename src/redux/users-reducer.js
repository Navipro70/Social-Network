import {userApi} from "../API/usersAPI";

const FOLLOWING = "FOLLOWING";
const SET_USERS = "SET-USERS";
const SET_PAGE = "SET-PAGE";
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT";
const TOGGLE_FETCHING = "TOGGLE-FETCHING";
const TOGGLE_IS_FOLLOWING_BLOCKER = "TOGGLE-IS-FOLLOWING-BLOCKER";

let initialState = {
  users: [],
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  isFollowingBlocker: []
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
    case TOGGLE_FETCHING:
      return {...state, isFetching: !action.isFetching};
    case TOGGLE_IS_FOLLOWING_BLOCKER:
      return {...state,
        isFollowingBlocker: action.isFollowingBlocker ?
            [...state.isFollowingBlocker, action.userId]:
            state.isFollowingBlocker.filter((id) => id !== action.userId)
      };
    default:
      return state;
  }
};

export default usersReducer;

const following = id => ({
  type: FOLLOWING,
  id: id
});

const setUsers = users => ({
  type: SET_USERS,
  users: users
});

const setCurrentPage = pageNumber => ({
  type: SET_PAGE,
  currentPage: pageNumber
});

const setTotalUsersCount = totalUsersCount => ({
  type: SET_TOTAL_USERS_COUNT,
  totalUsersCount: totalUsersCount
});

const toggleFetching = isFetching => ({
  type: TOGGLE_FETCHING,
  isFetching: isFetching
});

const toggleBlocker = (isFollowingBlocker, userId) => ({
  type: TOGGLE_IS_FOLLOWING_BLOCKER,
  isFollowingBlocker,
  userId
});

export const thunkGetUsers = (currentPage, pageSize, isFetching) => {
  return async dispatch => {
    dispatch(toggleFetching(isFetching));
    const data = await userApi.getUsers(currentPage, pageSize);
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
    dispatch(toggleFetching(!isFetching));
  }
};

export const thunkLoadUsers = (pageNumber, pageSize, isFetching) => {
  return async dispatch => {
    dispatch(toggleFetching(isFetching));
    const data = await userApi.getUsers(pageNumber,pageSize);
    await dispatch(setUsers(data.items));
    await dispatch(setCurrentPage(pageNumber));
          dispatch(toggleFetching(!isFetching));
  }
};

export const thunkUserFollowing = (followed, id) => {
  return async dispatch => {
    dispatch(toggleBlocker(true, id));
    if (!followed) {
          const data = await userApi.postFollowing(id);
            if (data.resultCode === 0) {
                await dispatch(following(id));
            }
              dispatch(toggleBlocker(false, id));
    } else {
      const data = await userApi.deleteFollowing(id);
            if (data.resultCode === 0) {
              await dispatch(following(id));
            }
            dispatch(toggleBlocker(false, id));
    }
  }
};