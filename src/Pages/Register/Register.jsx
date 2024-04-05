import { Link } from "react-router-dom";
import Navbar from "../../Shared/Header/Navbar/Navbar";



const Register = () => {
    

    const handleRegister = e =>{
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        console.log(form)
    }
    return (
        <div>
           
            <Navbar></Navbar>
            <div className="m-10">
                <h2 className="text-4xl text-center">Please Register</h2>
                <form onSubmit={handleRegister} className="card-body md:w-2/3 lg:w-1/3 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your name</span>
                        </label>
                        <input type="text" placeholder="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" placeholder="upload photo" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>
                </form>
                <h2 className="text-center">Already Have An Account ? <Link className="text-blue-500 font-bold" to="/login">Login</Link></h2>
            </div>
        </div>
    );
}



export default Register;