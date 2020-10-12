import authors from "../data";
const initialState = {
  authors: authors,
  newAuthorId: authors.length
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD_AUTHOR": {
      return {
        ...state,
        newAuthorId: state.newAuthorId + 1,
        authors: state.authors.concat(action.payload)
      }
    }
    case "DELETE_AUTHOR": {
      return {
        ...state,
        authors: state.authors.filter(author => author !== action.payload)
      }
    }
    default:
      return state;
  }
};
