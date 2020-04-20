const NEW_MESSAGE = "NEW-MESSAGE";

type messageType = {
    id: number
    message: string
};

type usersType = {
    id: number
    name: string
}

let initialState = {
    messages: [
        {id: 1, message: "Hello"},
        {id: 2, message: "How are you"},
        {id: 3, message: "Fine. What about you?"},
        {id: 4, message: "Me too, thanks"},
        {id: 5, message: "Goodbye"}
    ] as Array<messageType>,
    users: [
        {id: 1, name: "Bill"},
        {id: 2, name: "Sasha"},
        {id: 3, name: "Alex"},
        {id: 4, name: "Diana"},
        {id: 5, name: "Andrew"},
        {id: 6, name: "Liza"}
    ] as Array<usersType>,
};

type initialStateType = typeof initialState

const dialogReducer = (state: initialStateType = initialState, action: any): initialStateType => {
    switch (action.type) {
        case NEW_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, {id: state.messages.length + 1, message: action.messageText}],
            };
        default:
            return state;
    }
};

type addMessageType = {
    type: typeof NEW_MESSAGE
    messageText: string
}

export const addMessage = (messageText: string): addMessageType => ({
    type: NEW_MESSAGE,
    messageText
});

export default dialogReducer;
