import React from "react";
import Common from "./Status_sub/Common";
import Previous from "./Status_sub/Previous";

const Stats = (props) => {

    const Prev_que = props.Prev_que;

    function del_comm_prev(){
        const comm_prev = document.getElementsByClassName("Comm_prev")[0];
        comm_prev.style.display = 'none';
    }

    return (
        <div className="Comm_prev">
        
        <div>
        <Common />
        <Previous Prev_que={Prev_que}/>
        </div>
        <div className="Comm_prev_del" onClick={del_comm_prev}>
            <img className="Comm_prev_del_image" src="/images/ag.png"></img>
        </div>
        
        </div>
    )

}

export default Stats;