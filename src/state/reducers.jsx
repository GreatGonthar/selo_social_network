export const SET_USERS = "set users";
export const SET_MAIN_USER = "set main user";
export const SET_MESSAGE = "set message";

export const initialState = {
    mainUser: {

    },
    users: [],
    messages: [],
};

export function reducer(state, action) {
    switch (action.type) {
        case SET_USERS:
            return { ...state, users: [...action.payload] };
        case SET_MAIN_USER:
            return { ...state, mainUser: action.payload };
        case SET_MESSAGE:
            return { ...state, messages: [...action.payload] };
        default:
            return state;
    }
}
