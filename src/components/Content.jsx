import React from "react";
import Que_box from "./Content_sub/Que_box";

const Content = (props) => {

    const Questions = props.Questions;

    console.log(Questions);

    return (
        <div className="Content">
        
        {
            Questions.map((eachq) => {
                return (

                    <Que_box array={["./images/P_logo.jpeg",eachq,"./images/ag.png","Hai Praveen, I am doing good! What about You?"]}/>

                );

                
            })
        }

         
        </div>
    )

}

export default Content;