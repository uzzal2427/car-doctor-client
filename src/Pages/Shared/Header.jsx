
import { Link, useLoaderData } from 'react-router-dom';
import logo from '../../assets/logo.svg'
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const Header = () => {
    const {logOut , user} = useContext(AuthContext);

    const handleSingOut =()=>{
        logOut()
        .then(()=>{})
        .catch(error => console.log(error))
    }

    const NavBtn = <>
    <li><Link to='/ '>Home</Link></li>
    <li><Link to='/about'>About</Link></li>
    { user?.email? <>
        <li><Link to='/booking'>My Booking</Link></li>
        <li><button onClick={handleSingOut}>Sing Out</button></li>
    </>  :
    <li><Link to='/login'>Login</Link></li>}
    
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                       {NavBtn}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl"><img className='w-24 h-12' src={logo} alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                   {NavBtn}
                </ul>
            </div>
            <div className="navbar-end">
            <button className="btn btn-outline btn-error">Appointment</button>
            </div>
        </div>
    );
};

export default Header;