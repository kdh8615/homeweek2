const ADDH = "ADDH";
const DELETEH = "DELETEH";
const COMPLETE = "COMPLETE";

export const AddHandler = (payload) => {
  return {
    type: ADDH,
    payload,
  };
};

export const DeleteHandler = (payload) => {
  return {
    type: DELETEH,
    payload,
  };
};

export const Complete = (payload) => {
  return {
    type: COMPLETE,
    payload,
  };
};

const initialState = {
  todos: [
    {
      id: 1,
      title: "리액트 강의보기",
      body: "챕터 1부터 챕터 12까지 학습",
      isDone: false,
    },
    {
      id: 2,
      title: "점심 먹기",
      body: "점심 뭐먹지..?",
      isDone: true,
    },
  ],
};

const todo = (state = initialState, action) => {
  switch (action.type) {
    case ADDH:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case DELETEH:
      return {
        todos: state.todos.filter((to_do) => to_do.id !== action.payload),
      };
    case COMPLETE:
      return {
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload) {
            return { ...todo, isDone: !todo.isDone };
          } else {
            return { ...todo };
          }
        }),
      };
    default:
      return state;
  }
};

export default todo;
