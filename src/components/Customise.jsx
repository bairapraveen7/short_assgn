import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "typeface-roboto"

const Customise = (props) => {

   let toggle = 0;

   const Functions = props.Functions;

   function Customise_set_font(e)
   {
       Functions[1](e.target.innerText);
   }

   function Customise_set_sizef(e)
   {

     Functions[2](e.target.innerText);

   }

   function Customise_set_img(e){
      Functions[0](e.target.alt);

   }

    function toggleit(e)
    {
      
        const toggle_button = document.getElementsByClassName("toggle_button")[0];

        if(toggle == 0)
        {
            toggle = 1;
            toggle_button.style.backgroundColor='blue';
            e.target.style.marginLeft = "2em";
            document.querySelector("body").setAttribute("dark-theme","dark");
            
        }
        else{
            toggle = 0;
            toggle_button.style.backgroundColor='#555553';
            e.target.style.marginLeft = "0em";
            document.querySelector("body").setAttribute("dark-theme","light");
        
        }


       
        
    }

    function rem_customise(){
      const Customise = document.getElementsByClassName("Customise")[0];
      Customise.style.display = 'none';
    }

    return (
        <div className="Customise">

<div className="Par_Customise_image" onClick={rem_customise}>
         <FontAwesomeIcon icon={faXmark} />
      </div>

            <h4>Customise</h4>

            <nav>

             <div>
                <div className="toggle Customise_font_li"> 
                 Dark mode
                <div className="toggle_button">

                    <div onClick={toggleit} className="toggle_inner_circle">

                    </div>

                </div> 
                </div>


                <div className="Customise_font"><div className="Customise_font_li"><p>Font family</p><img className="Customise_font_image" src="/images/d_arrow.png"></img></div>
                
                <div className="Customise_font_family"> 
                <p onClick={Customise_set_font}>Sansserif</p>
                <p onClick={Customise_set_font}>Open Sans</p>
                <p onClick={Customise_set_font}>Merriweather</p>
                <p onClick={Customise_set_font}>Satisfy</p>
                <p onClick={Customise_set_font}>Libre Baskerville</p>
                </div>
                
                </div>
                <div className="Customise_fsize"><div className="Customise_font_li"><p>Font Size</p><img className="Customise_font_image" src="/images/d_arrow.png"></img></div>
                
                <div className="Customise_font_size">
                <p onClick={Customise_set_sizef}>0.8em</p>
                <p onClick={Customise_set_sizef}>1.0em</p>
                <p onClick={Customise_set_sizef}>1.2em</p>
                </div>
                
                </div>

                <div className="Customise_clogo"><div className="Customise_font_li"><p>Choose logo</p><img className="Customise_font_image" src="/images/d_arrow.png"></img></div>
                
                <div className="Customise_logo">

                 <div onClick={Customise_set_img}>
                  <img className="Customise_logo_ag" src="/images/M1.png" alt="/images/M1.png"></img>
                  </div>
                <div onClick={Customise_set_img}>
                  <img className="Customise_logo_ag" src="/images/M2.png" alt="/images/M2.png"></img>
                  </div>
                <div onClick={Customise_set_img}>
                  <img className="Customise_logo_ag" src="/images/M3.png" alt="/images/M3.png"></img>
                </div>
                <div onClick={Customise_set_img}>
                  <img className="Customise_logo_ag" src="/images/F1.png" alt="/images/F1.png"></img>
                </div>
                <div onClick={Customise_set_img}>
                  <img className="Customise_logo_ag" src="/images/F2.jpg" alt="/images/F2.jpg"></img>
                  </div>

                </div>
                
                </div>

                

             </div>

            </nav>

           
         
          </div>
    )

}

export default Customise;