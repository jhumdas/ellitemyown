import React from 'react';
import charbot from "../../Images/charbot.png"
function Chatbot() {

    // const [ scrollBtn, setScrollBtn]=useState(false)

    // useEffect(() => {
    //     window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    // }, []);
  
    // function scrollBy () {
    //     if(window.scrollY > 500){
    //         setScrollBtn (true);
    //     }
    //     else {
    //         setScrollBtn (false);
    //     }
    //   }
    // window.addEventListener("scroll" ,scrollBy);

    return (
        <>
            <div className='scrolltop_btn'>

                <div className='chatbtimg'>
                   <img src={charbot} alt="..." />
                </div>

            </div>
        </>
    )
}

export default Chatbot
