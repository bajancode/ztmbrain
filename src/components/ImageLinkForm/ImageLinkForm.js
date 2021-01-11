import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
    return (
        <div>
            <p className ="f3">
                {"This Magic Alien will detect faces in your pictures. Give it a try!"}
            </p>
            <div className="center">
                <div className="form pa4 br3 shadow-5">
                {/*Note tutorial uses center after form in above class name, but I didn't for now so I could see the wave pattern. Just in case formatting issues later, note also mobile display default on current screen */}
                <input className="f4 pa2 w-70 center" type="text" onChange={onInputChange} />
                <button 
                className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple"
                onClick={onButtonSubmit}
                >Detect</button>
                </div>
            </div>
        </div>
    )
}

export default ImageLinkForm