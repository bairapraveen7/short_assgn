import React from "react";

const Previous = (props) => {

    const Prev_que = props.Prev_que;

    return (
        <div className="Previous">
            <h4>Previous Questions</h4>
            {Prev_que.map((que) => {
                return (

                    <div className="Previous_item_class">
                    <p className="Previous_item">{que.substr(0,25)+(que.substr(25) && "...")}</p>
                    {/* <img className="Previous_item_img" src="./images/question.png"></img> */}
                    </div>
                )
            })}

        </div>
    )

};

export default Previous;