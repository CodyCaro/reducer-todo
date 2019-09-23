export const initialState = [
  {
    item: "Learn about reducers",
    completed: false,
    id: 3892987589
  }
];

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        { item: action.payload, completed: false, id: new Date() }
      ];
    case "TOGGLE_COMPLETED":
      return state.map(item => {
        if (item.id === action.payload) {
          return {
            ...item,
            completed: !item.completed
          };
        } else {
          return item;
        }
      });
    case "COMPLETED_BEGONE":
      return state.filter(item => {
        if (item.completed === true) {
          return null;
        } else {
          return item;
        }
      });
    default:
      return state;
  }
};
