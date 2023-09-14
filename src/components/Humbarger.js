import React,{useContext} from 'react'
import UserContext from './UserContext'
import { Link } from 'react-router-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser, faSearch, faHouse, faBars } from '@fortawesome/free-solid-svg-icons';

const Humbarger = () => {
    const { isLogin, setAuthrise } = useContext(UserContext);
    const { user } = useContext(UserContext);

    const Logoutfun = () => {
        setAuthrise(false);
    }
    return (
        <div >
            <ul className='flex flex-col items-center md:hidden'>
                <li className='  hover:text-blue-600 text-white mt-2'><Link to={"/favourite/"}>Fav</Link></li>
                <li className=' hover:text-blue-600 text-white mt-2'><Link to={"/managesubscription/"}>Manage Subscription</Link></li>
                <li className=' hover:text-blue-600 text-white mt-2' onClick={Logoutfun}>  {user} : Logout</li>
                <li className='hover:text-blue-600 text-white mt-2'><Link to={"/"}>Home</Link></li>
                <li className='hover:text-blue-600 text-white mt-2'><Link to={"/genre/excited"}>Excited</Link></li>
                <li className='hover:text-blue-600 text-white mt-2'><Link to={"/genre/happy"}>Happy</Link></li>
                <li className='hover:text-blue-600 text-white mt-2'><Link to={"/genre/romantic"}>Romantic</Link></li>
                <li className='hover:text-blue-600 text-white mt-2'><Link to={"/genre/sad"}>Sad</Link></li>
            </ul>
        </div>
    )
}

export default Humbarger