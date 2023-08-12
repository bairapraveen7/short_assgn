import React, { useEffect } from "react";
import { useRef } from "react";
import Que_box from "./Content_sub/Que_box";

const Content = (props) => {

    const Questions = props.Questions;

    const Variables = props.Variables;

    const bottomRef = useRef(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({behavior:'smooth'});
    },[Questions]);

    return (
        <div className="Content">
        
        {
            Questions.map((eachq) => {
                return (

                    <Que_box array={[Variables[0],eachq,"./images/ag.png","Hai Praveen, I am doing good! What about You?",Variables[1],Variables[2],Variables[3]]}/>

                );

                
            })
        }

        <div ref={bottomRef} />

         
        </div>
    )

}

export default Content;