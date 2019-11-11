export const createProject = (project) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        //make async
        dispatch({ type: "CREATE_PROJECT", project })
    }
}