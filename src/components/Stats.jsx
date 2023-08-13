import React from "react";
import Common from "./Status_sub/Common";
import Previous from "./Status_sub/Previous";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

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
            <FontAwesomeIcon className="Comm_prev_del_image" icon={faXmark} />
        </div>
        
        </div>
    )

}

export default Stats;