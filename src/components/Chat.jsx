import React from "react";
import { useState } from "react";

const Chat = (props) => {

    const setAppquest = props.setAppquest;

    const setArr = props.setArr;

    const submit = () => {

        const quest = document.getElementsByClassName("Chat_input")[0].value;

        document.getElementsByClassName("Chat_input")[0].value = "";
    
        setAppquest(quest);

        setArr((prev) => [...prev,quest]);

    }

    return (
        <div className="Chat">
        
        <img className="Chat_img" src="./images/P_logo.jpeg" alt="Person_logo"></img>
        <input className="Chat_input" type="text" onKeyDown={ (e) => {e.key == "Enter" && submit()}}></input>
        <img className="Chat_img" src="./images/send.jpeg" onClick={submit} alt="Send logo"></img>
        
        </div>
    )

}

export default Chat;