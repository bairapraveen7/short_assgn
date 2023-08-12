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
        }
        else{
            toggle = 0;
            toggle_button.style.backgroundColor='#555553';
            e.target.style.marginLeft = "0em";
        }

       
        
    }

    return (
        <div className="Customise">
            <h4>Customise</h4>

            <nav>

             <ul>
                <div className="toggle"> 
                <li>Dark mode:</li>
                <div className="toggle_button">

                    <div onClick={toggleit} className="toggle_inner_circle">

                    </div>

                </div>
                </div>


                <li className="Customise_font"><a href="#">Font family</a>
                
                <div className="Customise_font_family"> 
                <p onClick={Customise_set_font}>Sansserif</p>
                <p onClick={Customise_set_font}>Open Sans</p>
                <p onClick={Customise_set_font}>Merriweather</p>
                <p onClick={Customise_set_font}>Satisfy</p>
                <p onClick={Customise_set_font}>Libre Baskerville</p>
                </div>
                
                </li>
                <li className="Customise_fsize"><a href="#">Font-size</a>
                
                <div className="Customise_font_size">
                <p onClick={Customise_set_sizef}>0.8em</p>
                <p onClick={Customise_set_sizef}>1.0em</p>
                <p onClick={Customise_set_sizef}>1.2em</p>
                </div>
                
                </li>

                <li className="Customise_clogo"><a href="#">Choose Logo</a>
                
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
                
                </li>

                

             </ul>

            </nav>
         
          </div>
    )

}

export default Customise;