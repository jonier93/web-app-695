import Rec from 'react'

class Navegation extends Rec.Component {
    render(){
        function go_to_home() {
            window.location = "/"
        }
        let go_to_register = () => {
            window.location = "/register"
        }
        function go_to_consult() {
            window.location = "/consult"
        }
        function go_to_contact() {
            window.location = "/contact"
        }
        return(
            <div className="block-navegation">
                <li class='block-items'>
                    <button id="btn-nav" onClick={go_to_home}> Home </button>
                </li>
                <li class='block-items'>
                    <button id="btn-nav" onClick={go_to_register}> Register </button>
                </li>
                <li class='block-items'>
                    <button id="btn-nav" onClick={go_to_consult}> Consult </button>
                </li>
                <li class='block-items'>
                    <button id="btn-nav" onClick={go_to_contact}> Contact </button>
                </li>
            </div>
        )
    }
}

export default Navegation