import {userApi} from "../API/usersAPI";
import {userType} from "../Types/types";

const FOLLOWING = "FOLLOWING";
const SET_USERS = "SET-USERS";
const SET_PAGE = "SET-PAGE";
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT";
const TOGGLE_FETCHING = "TOGGLE-FETCHING";
const TOGGLE_IS_FOLLOWING_BLOCKER = "TOGGLE-IS-FOLLOWING-BLOCKER";

let initialState = {
    users: [] as Array<userType>,
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    isFollowingBlocker: [] as Array<number> //array of users id
};

type initialStateType = typeof initialState

const usersReducer = (state: initialStateType = initialState, action: any): initialStateType => {
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
            return {
                ...state,
                isFollowingBlocker: action.isFollowingBlocker ?
                    [...state.isFollowingBlocker, action.userId] :
                    state.isFollowingBlocker.filter((id) => id !== action.userId)
            };
        default:
            return state;
    }
};

export type followingType = {
    type: typeof FOLLOWING
    id: number
}

const following = (id: number): followingType => ({
    type: FOLLOWING,
    id: id
});

type setUsersType = {
    type: typeof SET_USERS
    users: Array<userType>
}

const setUsers = (users: Array<userType>): setUsersType => ({
    type: SET_USERS,
    users: users
});

type setCurrentPageType = {
    type: typeof SET_PAGE
    currentPage: number
}

const setCurrentPage = (pageNumber: number): setCurrentPageType => ({
    type: SET_PAGE,
    currentPage: pageNumber
});

type setTotalUsersCountType = {
    type: typeof SET_TOTAL_USERS_COUNT
    totalUsersCount: number
}

const setTotalUsersCount = (totalUsersCount: number): setTotalUsersCountType => ({
    type: SET_TOTAL_USERS_COUNT,
    totalUsersCount
});

type toggleFetchingType = {
    type: typeof TOGGLE_FETCHING
    isFetching: boolean
}

const toggleFetching = (isFetching: boolean): toggleFetchingType => ({
    type: TOGGLE_FETCHING,
    isFetching
});

type toggleBlockerType = {
    type: typeof TOGGLE_IS_FOLLOWING_BLOCKER
    isFollowingBlocker: boolean
    userId: number
}

const toggleBlocker = (isFollowingBlocker: boolean, userId: number): toggleBlockerType => ({
    type: TOGGLE_IS_FOLLOWING_BLOCKER,
    isFollowingBlocker,
    userId
});

export const thunkGetUsers = (currentPage: number, pageSize: number, isFetching: boolean) => {
    return async (dispatch: any) => {
        dispatch(toggleFetching(!isFetching));
        const data = await userApi.getUsers(currentPage, pageSize);
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
        dispatch(toggleFetching(isFetching));
    }
};

export const thunkLoadUsers = (pageNumber: number, pageSize: number, isFetching: boolean) => {
    return async (dispatch: any) => {
        dispatch(toggleFetching(!isFetching));
        const data = await userApi.getUsers(pageNumber, pageSize);
        await dispatch(setUsers(data.items));
        await dispatch(setCurrentPage(pageNumber));
        dispatch(toggleFetching(isFetching));
    }
};

export const thunkUserFollowing = (followed: boolean, id: number) => {
    return async (dispatch: any) => {
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

export default usersReducer;
