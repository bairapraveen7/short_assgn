import React from "react";

function Que_box(props){

    const arr = props.array;

    return (
        <>
        <div className="grid1">
            <img className="Content_img1" src={arr[0]}></img>
        </div>

        <div className="grid2">
            <p>{arr[1]}</p>
        </div>

        <div className="grid3 Content_img2">
            <img className="Content_img2" src={arr[2]}></img>
        </div>

        <div className="grid4">
            <p className="Chat_output_p" style={{fontFamily:arr[4],fontSize:arr[5]}}>{arr[3]}</p>
        </div>

        
        </>
    )
}

export default Que_box;