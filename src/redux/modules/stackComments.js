// Action value
const ADD_TODO = "ADD_TODO";
const GET_COMMENT_BY_ID = "GET_COMMENT_BY_ID";
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
export const getCommentByID = (payload) => {
    return {
        type: GET_COMMENT_BY_ID,
        payload,
    };
};

// initial state
const initialState = {
    stackComments: [
        {
            id: "1",
            title: "Redux",
            body: "Finish Personal Task-Week 3",
            isDone: true,
        },
    ],
    stackComment: {
        id: "0",
        title: "",
        body: "",
        isDone: false,
    },
};

const stackComments = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                stackComments: [...state.stackComments, action.payload],
            };

        case DELETE_TODO:
            return {
                ...state,
                stackComments: state.stackComments.filter((stackComment) => stackComment.id !== action.payload),
            };

        case TOGGLE_STATUS_TODO:
            return {
                ...state,
                stackComments: state.stackComments.map((stackComment) => {
                    if (stackComment.id === action.payload) {
                        return {
                            ...stackComment,
                            isDone: !stackComment.isDone,
                        };
                    } else {
                        return stackComment;
                    }
                }),
            };

        case GET_COMMENT_BY_ID:
            return {
                ...state,
                stackComment: state.stackComments.find((stackComment) => {
                    return stackComment.id === action.payload;
                }),
            };
        default:
            return state;
    }
};

export default stackComments;
