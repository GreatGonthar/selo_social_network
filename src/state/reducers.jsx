export const GET_USERS = "get users";
export const SET_USERS = "set users";
export const SET_MAIN_USER = "set main user"

export const initialState = {
    mainUser: {
        id: 0,
        name: "",
        email: "",
        photo: "",
        date: 0,
    },
    users: [
        {
            id: 0,
            name: "eefix",
            email: "iop@iop.com",
            photo: "https://hsto.org/r/w1560/webt/5k/yx/v3/5kyxv3j_arei6bk5dzy1niailh4.jpeg",
            date: 1000,
        },
        {
            id: 2,
            name: "betrix",
            email: "iop@iop2.com",
            photo: "https://hsto.org/r/w1560/webt/5k/yx/v3/5kyxv3j_arei6bk5dzy1niailh4.jpeg",
            date: 1000,
        },
    ],
};


export function reducer(state, action) {
    switch (action.type) {
        case SET_USERS:
            return {...state, users:[...action.payload]};
        case SET_MAIN_USER:
            return {...state, mainUser: action.payload};
        default:
            console.log("default");
            return state;
    }
    
}
