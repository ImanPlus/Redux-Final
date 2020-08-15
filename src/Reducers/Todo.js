const initialState = {
  todos: []
};

const handleAddTodo = (state, action) => {
  const { todos } = state;
  return {
    ...state,
    todos: [
      ...todos,
      {
        id: todos.length + 1,
        text: action.text,
        isComplete: false
      }
    ]
  };
};

export default function todoRDS(state = initialState, action) {
  console.log("state content: ", state);
  switch (action.type) {
    case "ADD_TODO":
      return handleAddTodo(state, action);
    default:
      return state;
  }
}
