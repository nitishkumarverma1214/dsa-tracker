function navReducer(state, action) {
  switch (action.type) {
    case "toggle":
      return {
        ...state,
        isMenuToggle: !state.isMenuToggle,
      };
    case "scroll":
      return {
        ...state,
        isScreenTop: !state.isScreenTop,
      };
    default:
      return state;
  }
}

export default navReducer;
