import React from "react";
import Common_que from "../Common_que";

function Common(){

    return (
        <div className="Common">

        <h4>Common Questions</h4>
        {Common_que.map((item) => {
            return (
                <p>.{item}</p>
            )
        })}

        </div>
    )

}

export default Common;