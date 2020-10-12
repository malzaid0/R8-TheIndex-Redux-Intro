/**
 * Add your actions here
 */
export const addAuthor = (payload) => {
    return ({type: "ADD_AUTHOR", payload: payload})
}
export const deleteAuthor = (payload) => {
    return ({type: "DELETE_AUTHOR", payload: payload})
}