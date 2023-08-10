import React from "react";
import Common from "./Status_sub/Common";
import Previous from "./Status_sub/Previous";

const Stats = (props) => {

    const Prev_que = props.Prev_que;

    return (
        <div className="Comm_prev">
        
        <Common />
        <Previous Prev_que={Prev_que}/>
        
        
        </div>
    )

}

export default Stats;