import React from "react";

function Details(props)
{
    return(
        <div>
        <h2>{props.name}</h2>
        <h5 className="personrole">{props.role}</h5>
        <p className="experience">{props.experience}</p>
        </div>
    )
}

export default Details;