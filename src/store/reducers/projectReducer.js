const initState = {
    projects: [
        {id:1, title: "Help me find peach", content: "blah blach blah blach blah blach"},
        {id:2, title: "Connect for firebase", content: "blah blach blah blach blah blach"},
        {id:3, title: "One more title of article", content: "blah blach blah blach blah blach"},
    ]
};

const projectReducer = (state = initState, action) => {
    return state;
}

export default projectReducer;