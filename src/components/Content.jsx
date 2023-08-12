import React from "react";
import Que_box from "./Content_sub/Que_box";

const Content = (props) => {

    const Questions = props.Questions;

    const Variables = props.Variables;

    return (
        <div className="Content">
        
        {
            Questions.map((eachq) => {
                return (

                    <Que_box array={[Variables[0],eachq,"./images/ag.png","Hai Praveen, I am doing good! What about You?",Variables[1],Variables[2],Variables[3]]}/>

                );

                
            })
        }

         
        </div>
    )

}

export default Content;