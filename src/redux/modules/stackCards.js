// Action value
const ADD_TODO = "ADD_TODO";
const GET_TODO_BY_ID = "GET_TODO_BY_ID";
const DELETE_TODO = "DELETE_TODO";
const TOGGLE_STATUS_TODO = "TOGGLE_STATUS_TODO";

// Action Creator
// Todo ADD action creator
export const addTodo = (payload) => {
    return {
        type: ADD_TODO,
        payload,
    };
};

// Todo DELETE action creator
export const deleteTodo = (payload) => {
    return {
        type: DELETE_TODO,
        payload,
    };
};

// Todo IS DONE action creator
export const toggleStatusTodo = (payload) => {
    return {
        type: TOGGLE_STATUS_TODO,
        payload,
    };
};

// GET ID action creator
export const getTodoByID = (payload) => {
    return {
        type: GET_TODO_BY_ID,
        payload,
    };
};

// initial state
const initialState = {
    stackCards: [
        {
            id: "1",
            title: "Redux",
            body: "Finish Personal Task-Week 3",
            isDone: true,
        },
    ],
    stackCard: {
        id: "0",
        title: "",
        body: "",
        isDone: false,
    },
};

const stackCards = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                stackCards: [...state.stackCards, action.payload],
            };

        case DELETE_TODO:
            return {
                ...state,
                stackCards: state.stackCards.filter((stackCard) => stackCard.id !== action.payload),
            };

        case TOGGLE_STATUS_TODO:
            return {
                ...state,
                stackCards: state.stackCards.map((stackCard) => {
                    if (stackCard.id === action.payload) {
                        return {
                            ...stackCard,
                            isDone: !stackCard.isDone,
                        };
                    } else {
                        return stackCard;
                    }
                }),
            };

        case GET_TODO_BY_ID:
            return {
                ...state,
                stackCard: state.stackCards.find((stackCard) => {
                    return stackCard.id === action.payload;
                }),
            };
        default:
            return state;
    }
};

export default stackCards;
