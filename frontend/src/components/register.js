import img_register from '../images/register.png'

function Register () {
    return (
        <div>
            <h1> Register users </h1>
            <img className='img-icon' src={img_register}></img> <br/> <br/>
            <form action='/register_user' method='post'>
                <label> Name </label> <input name="name" /> <br/> <br/>
                <label> Lastname </label> <input name="lastname"/> <br/> <br/>
                <label> Id </label> <input name="id" /> <br/> <br/>
                <button> Register </button>
            </form>
        </div>
    )
}

export default Register