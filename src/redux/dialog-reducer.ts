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
        case 'dialog/NEW_MESSAGE':
            return {
                ...state,
                messages: [...state.messages, {id: state.messages.length + 1, message: action.messageText}],
            };
        default:
            return state;
    }
};

export const actions = {
    addMessage: (messageText: string) => ({
        type: 'dialog/NEW_MESSAGE',
        messageText
    } as const)
};

export default dialogReducer;