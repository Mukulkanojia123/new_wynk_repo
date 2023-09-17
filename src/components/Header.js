import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSearch, faHouse, faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import UserContext from './UserContext';
import { GenreButton } from './GenreButton';
import Humbarger from './Humbarger';


const Header = () => {

    const { user } = useContext(UserContext);
    const { setSearchItem } = useContext(UserContext);
    const { isLogin, setAuthrise } = useContext(UserContext);
    const [hum , setHum ] = useState(false);

    const [changeValue, setChangeValue] = useState('');

    // console.log(user);
    const Logoutfun = () => {
        setAuthrise(false);
    }

    const handleChange = () => {
        setSearchItem(changeValue);
        // console.log(changeValue)
        setChangeValue('');
    }
    const handleHumbarger = () =>{
            setHum(!hum);
    }

    return (
        <div>
            <div className='bg-black flex justify-between'>

                <div className='flex md:w-4/12  w-6/12' >
                    <img className='md:w-12 h-14 m-4' src='https://asset.brandfetch.io/idhXjxLF9g/idDdtM-Aux.png' />
                    <p className='text-white my-8 ' >Wynk Music</p>
                </div>

                <div className='  w-8/12'>
                    <ul className=' hidden md:flex md:justify-evenly sm:my-8 '>
                        <li className='md:flex '>
                            <div className="relative">
                                <input
                                    type="text"
                                    className="  rounded-full pl-10 pr-4 py-2 w-full focus:outline-none"
                                    placeholder="Search Song.."
                                    value={changeValue}
                                    onChange={(e) => setChangeValue(e.target.value)}
                                />
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <FontAwesomeIcon className="h-5 w-5 text-gray-400" icon={faSearch} />
                                </div>
                            </div>
                            <Link to={"/search/song"}> <button className='text-white mx-2 mt-2 hover:text-red-600' onClick={handleChange} >search</button></Link>
                        </li>
                        <li className=' text-white mt-2 hover:text-red-600'><Link to={"/favourite/"}>Fav</Link></li>
                        <li className=' text-white mt-2 hover:text-red-600'><Link to={"/managesubscription/"}>Manage Subscription</Link></li>
                        <li className=' text-white mt-2 hover:text-red-600' onClick={Logoutfun}>  {user} : Logout</li>
                        <li className=' text-white mt-2 '><Link to={"/"}><FontAwesomeIcon className="text-gray-400 hover:text-red-600" icon={faHouse} /></Link></li>
                    </ul>


                </div>
                <div className='block md:hidden mr-10'>
                    <FontAwesomeIcon className="text-gray-400 font-extrabold mt-10 hover:text-red-600" icon={faBars} onClick={handleHumbarger}/>
                </div>
            </div>
            <div>
                {
                    hum && <Humbarger/>
                }
                <GenreButton />
            </div>
        </div>
    )
}

export default Header;
