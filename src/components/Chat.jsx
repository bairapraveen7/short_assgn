import React from "react";

const Chat = () => {

    const changeit = (e) => {


        
    }

    const submit = (e) => {

          console.log("hi I am good");

    }

    return (
        <div className="Chat">
        
        <img className="Chat_img" src="./images/P_logo.jpeg" alt="Person_logo"></img>
        <input className="Chat_input" type="text" onChange={changeit}></input>
        <img className="Chat_img" src="./images/send.jpeg" onClick={submit} alt="Send logo"></img>
        
        </div>
    )

}

export default Chat;