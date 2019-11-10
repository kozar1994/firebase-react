import React from "react";
import PrjectSummary from "./ProjectSummary";

const ProjectList = ({projects}) => {
    return (
        <div className="project-list section">
            {projects && projects.map((project) => {
                return (
                    <PrjectSummary project={project} key={project.id}/>
                )
            })}
        </div>
    )
}

export default ProjectList;