const NEW_MESSAGE = "NEW-MESSAGE";
const NEW_MESSAGE_CHANGER = "NEW-MESSAGE-CHANGER";

let initialState = {
  messages: [
    { id: 1, message: "Hello" },
    { id: 2, message: "How are you" },
    { id: 3, message: "Fine. What about you?" },
    { id: 4, message: "Me too, thanks" },
    { id: 5, message: "Goodbye" }
  ],
  users: [
    { id: 1, name: "Bill" },
    { id: 2, name: "Sasha" },
    { id: 3, name: "Alex" },
    { id: 4, name: "Diana" },
    { id: 5, name: "Andrew" },
    { id: 6, name: "Liza" }
  ],
  newMessage: ""
};

const dialogReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEW_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, {id: state.messages.length+1, message: state.newMessage}],
        newMessage: ""
      };
    case NEW_MESSAGE_CHANGER:
      return {
        ...state,
        newMessage: action.text
      };
    default:
      return state;
  }
};

export const newMessageActionCreator = () => ({ type: NEW_MESSAGE });
export const newMessageChangerActionCreator = text => ({
  type: NEW_MESSAGE_CHANGER,
  text: text
});

export default dialogReducer;
