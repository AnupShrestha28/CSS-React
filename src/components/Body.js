import React from "react";
import '../assets/css/Body.css';

class Body extends React.Component{
    render(){
        return(
            <>
                <div className="bio-info">
                    <div className="bio-description">
                        <span>UI/UX Designer</span>
                        <h1>Professional Profile</h1>
                        <p> Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy text ever
                        since the 1500s, when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. Lorem Ipsum is simply dummy
                        text of the printing and typesetting industry. Lorem Ipsum is simply
                        dummy text of the printing and typesetting industry. Lorem Ipsum is
                        simply dummy text of the printing and typesetting industry.
                        </p>

                        <p> Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy text ever
                        since the 1500s, when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. Lorem Ipsum is simply dummy
                        text of the printing and typesetting industry. Lorem Ipsum is simply
                        dummy text of the printing and typesetting industry. Lorem Ipsum is
                        simply dummy text of the printing and typesetting industry.
                        </p>

                        <p> Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy text ever
                        since the 1500s, when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. Lorem Ipsum is simply dummy
                        text of the printing and typesetting industry. Lorem Ipsum is simply
                        dummy text of the printing and typesetting industry. Lorem Ipsum is
                        simply dummy text of the printing and typesetting industry.
                        </p>

                        <button className="resume-description-btn">Download CV</button>
                        <p className="resume-description-sign">Anoop Shrestha</p>
                    </div>
                </div>
            </>
        );
    }
}

export default Body;

