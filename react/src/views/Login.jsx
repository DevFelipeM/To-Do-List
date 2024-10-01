import {Link} from "react-router-dom";

export default function Login() {


    const onSubmit = (ev) =>{
        ev.preventDefault
    }

    return (
        <div className="login-signup-form animated fadeInDown">
         <div className="form">
            <form onSubmit={onSubmit}>
                <h1 className="tittle"> 
                    Login into your accout
                </h1>
                <input type='email 'placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <button className="btn btn-block">Login</button>
                <p className="messege">
                    Não tem uma conta? <Link to="/signup" >Create Account</Link>
                </p>
            </form>
         </div>
        </div>
    )
}