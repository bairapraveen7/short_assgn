import React from "react";

const Customise = () => {

   let toggle = 0;

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
                <p>Roboto</p>
                <p>Sans-serif</p>
                <p>Monteserrat</p>
                <p>hillac</p>
                <p>hillab</p>
                </div>
                
                </li>
                <li className="Customise_fsize"><a href="#">Font-size</a>
                
                <div className="Customise_font_size">
                <p>2em</p>
                <p>3em</p>
                <p>4em</p>
                </div>
                
                </li>
                <div className="Customise_font_size">
                <p>2em</p>
                <p>3em</p>
                <p>4em</p>
                </div>

                <li className="Customise_clogo"><a href="#">Choose Logo</a>
                
                <div className="Customise_logo">

                  <img className="Customise_logo_ag" src="/images/ag.png"></img>
                  <img className="Customise_logo_ag" src="/images/ag.png"></img>
                  <img className="Customise_logo_ag" src="/images/ag.png"></img>
                  <img className="Customise_logo_ag" src="/images/ag.png"></img>
                  <img className="Customise_logo_ag" src="/images/ag.png"></img>

                </div>
                
                </li>

                

             </ul>

            </nav>
         
          </div>
    )

}

export default Customise;