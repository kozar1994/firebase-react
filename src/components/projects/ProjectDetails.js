import React from "react"

const ProjectDetails = (props) => {
    const { id } = props.match.params; // є id яке приходе через url
    
    console.log(id); 
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - { id }</span>
                    <p>lorem asda sdfasdfasdgfasdgfasdgfasdfsdfasdf asdfasdf </p>
                </div>
                <div className="card-action gret lighten-4 grey-text">
                    <div>Post by the Vova</div>
                    <div>2nd Semtember</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails;