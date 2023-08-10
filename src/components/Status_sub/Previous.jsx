import React from "react";

const Previous = (props) => {

    const Prev_que = props.Prev_que;

    return (
        <div className="Previous">
            <h4>Previous Questions</h4>
            {Prev_que.map((que) => {
                return (
                    <p>{que}</p>
                )
            })}

        </div>
    )

};

export default Previous;