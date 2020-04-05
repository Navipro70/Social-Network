const FOLLOWING = "FOLLOWING";
const SHOW_MORE = "SHOW-MORE";

let initialState = {
  users: [
    {id: 1, fullName: "Diana", status: "I'm boss", followed: true, location:{country: "Belarus", city:"Minsk"}},
    {id: 2, fullName: "Alex", status: "Looking for job", followed: false, location:{country: "USA", city:"New-York"}},
    {id: 3, fullName: "Andrew", status: "Create my app", followed: false, location:{country: "Russia", city:"Kiev"}},
    {id: 4, fullName: "Bill", status: "Build my company", followed: true, location:{country: "USA", city:"Washington"}}
  ]
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
    case SHOW_MORE:
      return {
        ...state
      };
    default:
      return state;
  }
};

export const followingCreator = id => ({
  type: FOLLOWING,
  id: id
});

export const showingMoreAction = () => ({type: SHOW_MORE});

export default usersReducer;
