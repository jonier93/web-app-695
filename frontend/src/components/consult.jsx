import React from "react";
import img_consult from "../images/consult.png"

class Consult extends React.Component {
    render(){
        return(
            <div>
                <h1> Consult user </h1>
                <img className="img-icon" src={img_consult}></img> <br/> <br/>
                <label> Id </label> <input /> <br/> <br/>
                <textarea></textarea> <br/> <br/>
                <button> Consult </button>
            </div>
        )
    }
}

export default Consult
