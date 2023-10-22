import { Link } from "react-router-dom";
import img from '../../assets/images/login/login.svg'
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Register = () => {
    const {handleSingUp} = useContext(AuthContext)

    const handleRegister = event =>{
        event.preventDefault();

        const from = event.target;
        const name = from.name.value;
        const email = from.email.value;
        const password = from.password.value;
        console.log(name , password, email);

        handleSingUp(email,password)
        .then(result =>{
            const newUser = result.user;
            console.log(newUser);
            from.reset()
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode,errorMessage);
          });
    }
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
            <div className="w-1/2 pr-5">
               <img src={img} alt="" />
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <h1 className="text-3xl text-center font-bold">Sing up</h1>
                <form onSubmit={handleRegister} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="Enter Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button  className="btn btn-primary"><input type="submit" value="Login" /></button>
                    </div>
                    <p>Have an account? <Link className='text-[#FF3811]' to='/login'> Login</Link></p>
                </form>   
            </div>
        </div>
    </div>
    );
};

export default Register;