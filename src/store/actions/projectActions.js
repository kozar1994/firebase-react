export const createProject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        //make async

        const firestore = getFirestore();
        firestore.collection("projects").add({
            ...project,
            authorFirstName: "Vova",
            authorLastName: "Kozar",
            authorId: 12345,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: "CREATE_PROJECT", project })
        }).catch((err)=>{
            console.log(err);
            dispatch({type: "CREATE_PROJECT_ERROR",err})
        })

    }
}