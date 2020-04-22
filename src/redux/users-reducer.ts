import {userApi} from "../API/usersAPI"
import {userType} from "../Types/types"
import {ResultCodesEnum} from "../API/axiosInstance"
import {AppStateType, InferActionsType} from "./redux-store"
import {ThunkAction} from "redux-thunk"

let initialState = {
    users: [] as Array<userType>,
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    isFollowingBlocker: [] as Array<number> //array of users id
};

type initialStateType = typeof initialState

type ActionType = InferActionsType<typeof actions>

const usersReducer = (state: initialStateType = initialState, action: ActionType): initialStateType => {
    switch (action.type) {
        case 'users/FOLLOWING':
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
        case 'users/SET_USERS':
            return {
                ...state,
                users: action.users,
            };
        case 'users/SET_PAGE':
            return {
                ...state,
                currentPage: action.currentPage
            };
        case 'users/SET_TOTAL_USERS_COUNT':
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            };
        case 'users/TOGGLE_FETCHING':
            return {...state, isFetching: !action.isFetching};
        case 'users/TOGGLE_IS_FOLLOWING_BLOCKER':
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

const actions = {
    following: (id: number) => ({type: 'users/FOLLOWING', id: id} as const),
    setUsers: (users: Array<userType>) => ({type: 'users/SET_USERS', users: users} as const),
    setCurrentPage: (pageNumber: number) => ({type: 'users/SET_PAGE', currentPage: pageNumber} as const),
    setTotalUsersCount: (totalUsersCount: number) => ({type: 'users/SET_TOTAL_USERS_COUNT', totalUsersCount} as const),
    toggleFetching: (isFetching: boolean) => ({type: 'users/TOGGLE_FETCHING', isFetching} as const),
    toggleBlocker: (isFollowingBlocker: boolean, userId: number) => ({
        type: 'users/TOGGLE_IS_FOLLOWING_BLOCKER',
        isFollowingBlocker,
        userId
    } as const)
};

type ThunkActionType = ThunkAction<Promise<void>, AppStateType, unknown, ActionType>

export const thunkGetUsers = (currentPage: number, pageSize: number, isFetching: boolean): ThunkActionType => {
    return async (dispatch) => {
        dispatch(actions.toggleFetching(!isFetching));
        const data = await userApi.getUsers(currentPage, pageSize);
        dispatch(actions.setUsers(data.items));
        dispatch(actions.setTotalUsersCount(data.totalCount));
        dispatch(actions.toggleFetching(isFetching));
    }
};

export const thunkLoadUsers = (pageNumber: number, pageSize: number, isFetching: boolean): ThunkActionType => {
    return async (dispatch) => {
        dispatch(actions.toggleFetching(!isFetching));
        const data = await userApi.getUsers(pageNumber, pageSize);
        await dispatch(actions.setUsers(data.items));
        await dispatch(actions.setCurrentPage(pageNumber));
        dispatch(actions.toggleFetching(isFetching));
    }
};

export const thunkUserFollowing = (followed: boolean, id: number): ThunkActionType => {
    return async (dispatch) => {
        dispatch(actions.toggleBlocker(true, id));
        if (!followed) {
            const data = await userApi.postFollowing(id);
            if (data.resultCode === ResultCodesEnum.Success) {
                await dispatch(actions.following(id));
            }
            dispatch(actions.toggleBlocker(false, id));
        } else {
            const data = await userApi.deleteFollowing(id);
            if (data.resultCode === ResultCodesEnum.Success) {
                await dispatch(actions.following(id));
            }
            dispatch(actions.toggleBlocker(false, id));
        }
    }
};

export default usersReducer;