import React from "react";
import Common_que from "../Common_que";

function Common(){

    return (
        <div className="Common">

        <h4>Common Questions</h4>
        {Common_que.map((item) => {
            return (
                <div className="Common_item_class">
                <p className="Common_item">{item}</p>
                <img className="Common_item_img" src="./images/question.png"></img>
                </div>
            )
        })}

        </div>
    )

}

export default Common;