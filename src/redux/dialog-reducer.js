const NEW_MESSAGE = "NEW-MESSAGE";
const NEW_MESSAGE_CHANGER = "NEW-MESSAGE-CHANGER";

const dialogReducer = (state, action) => {
  switch (action.type) {
    case "NEW-MESSAGE":
      state.messages.push({
        id: state.messages.length + 1,
        message: state.newMessage
      });
      state.newMessage = "";
      return state;
    case "NEW-MESSAGE-CHANGER":
      state.newMessage = action.text;
      return state;
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
