import React from "react";
import './Body.css';

class Body extends React.Component{
    render(){
        return(
            <>
                <div className='bio-info'>
                    <h4>UI/UX Designer</h4>
                    <h3>Professional Profile</h3>
                    <p className='paras-info'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                    <button>Download CV</button>
                </div>
            </>
        );
    }
}

export default Body;

