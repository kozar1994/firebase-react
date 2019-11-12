const initState = {
    projects: [
        {id:1, title: "Help me find peach", content: "blah blach blah blach blah blach"},
        {id:2, title: "Connect for firebase", content: "blah blach blah blach blah blach"},
        {id:3, title: "One more title of article", content: "blah blach blah blach blah blach"},
    ]
};

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case "CREATE_PROJECT":
            console.log("CREATE_PROJECT", action.project);
            return state;
        case "CREATE_PROJECT_ERROR":
            console.log("CREATE_PROJECT", action.err);
            return state;
        default:
            return state;
    }
}

export default projectReducer;