import React from "react";
import "typeface-roboto"

const Customise = () => {

   let toggle = 0;

   function Customise_set_font()
   {
      const elements = document.getElementsByClassName("Chat_output_p");
      for(const ele of elements)
      {
        ele.style.fontFamily = 'typeface-roboto';
      }
      
   }

   function Customise_set_sizef()
   {

    const elements = document.getElementsByClassName("Chat_output_p");

    for(const ele of elements)
    {
      ele.style.fontSize = '2em';
    }


   }

   function Customise_set_img(){

      const elements = document.getElementsByClassName("Content_img1");
      for(const ele of elements)
      {
        ele.src="/images/M1.png";
      }

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
                <p onClick={Customise_set_font}>Roboto</p>
                <p onClick={Customise_set_font}>Sans-serif</p>
                <p onClick={Customise_set_font}>Monteserrat</p>
                <p onClick={Customise_set_font}>hillac</p>
                <p onClick={Customise_set_font}>hillab</p>
                </div>
                
                </li>
                <li className="Customise_fsize"><a href="#">Font-size</a>
                
                <div className="Customise_font_size">
                <p onClick={Customise_set_sizef}>2em</p>
                <p onClick={Customise_set_sizef}>3em</p>
                <p onClick={Customise_set_sizef}>4em</p>
                </div>
                
                </li>

                <li className="Customise_clogo"><a href="#">Choose Logo</a>
                
                <div className="Customise_logo">

                 <div onClick={Customise_set_img}>
                  <img className="Customise_logo_ag" src="/images/M1.png"></img>
                  </div>
                <div>
                  <img className="Customise_logo_ag" src="/images/M2.png"></img>
                  </div>
                <div>
                  <img className="Customise_logo_ag" src="/images/M3.png"></img>
                </div>
                <div>
                  <img className="Customise_logo_ag" src="/images/F1.png"></img>
                </div>
                <div>
                  <img className="Customise_logo_ag" src="/images/F2.jpg"></img>
                  </div>

                </div>
                
                </li>

                

             </ul>

            </nav>
         
          </div>
    )

}

export default Customise;