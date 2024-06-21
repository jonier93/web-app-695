import React from "react";
import img_consult from "../images/consult.png"

class Consult extends React.Component {
    render(){
        function consult_user() {
            
            let obj_user = {
                "id": document.getElementById("id-user").value
            }
            fetch('/consult_user', {
                "method":"post",
                "headers":{"Content-Type":"application/json"},
                "body":JSON.stringify(obj_user)
            })
        }
        return(
            <div>
                <h1> Consult user </h1>
                <img className="img-icon" src={img_consult}></img> <br/> <br/>
                <label> Id </label> <input id="id-user"/> <br/> <br/>
                <textarea></textarea> <br/> <br/>
                <button onClick={consult_user}> Consult </button>
            </div>
        )
    }
}

export default Consult
