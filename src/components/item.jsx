import React from "react";

const Item = (props) =>{
    const myStyle = {
        height:"500px",
        width:"300px",
        padding:"0px",
        margin:"15px 40px",
        boxShadow:"5px 5px 5px grey",
        borderRadius:"0 0 10px 10px"
    };
    return (
        <div className={"item"} style={myStyle}> 
        <img src={props.image} alt="" height={"300px"} width={"300px"} />
        <h3>{props.name}</h3> 
        <a href={props.url}><button>View Resources</button></a>
        </div>
    )
};

export default Item;