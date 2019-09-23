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
        if (state.id === action.payload.id) {
          console.log("Toggle completed");
          console.log(!item.completed);
          console.log(item);

          return {
            ...item,
            completed: !item.completed
          };
        } else {
          return item;
        }
      });
    default:
      return state;
  }
};
