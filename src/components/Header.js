import React , {useContext, useState}from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import UserContext from './UserContext';
import { GenreButton } from './GenreButton';


const Header = () => {

    const { user } = useContext(UserContext);
    const {setSearchItem } = useContext(UserContext);
    const { isLogin,setAuthrise } = useContext(UserContext);

    const [changeValue , setChangeValue] = useState('');

    // console.log(user);
    const Logoutfun =() =>{
        setAuthrise(false);
    }

    const handleChange =() =>{
        setSearchItem(changeValue);
        setChangeValue('');
    }
   
    return (
        <div>
        <div className='bg-black flex justify-between'>

            <div className='flex w-4/12 ' >
                <img className='w-12 m-4' src='https://asset.brandfetch.io/idhXjxLF9g/idDdtM-Aux.png' />
                <p className='text-white my-8' >Wynk Music App</p>
            </div>

            <div className='w-8/12'>
                <ul className=' flex justify-evenly my-8 '>
                    <li className='flex '>
                        <div className="relative">
                            <input
                                type="text"
                                className="  rounded-full pl-10 pr-4 py-2 w-full focus:outline-none"
                                placeholder="Search..." 
                                value={changeValue}     
                                onChange={(e) =>setChangeValue(e.target.value)}                  
                            />
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <FontAwesomeIcon className="h-5 w-5 text-gray-400" icon={faSearch} />
                            </div>
                        </div>
                            <button className='text-white mx-2' onClick={handleChange} >search</button>
                    </li>
                    <li className='   text-white'><Link to={"/managesubscription/"}>Manage Subscription</Link></li>
                    <li className='  text-white' onClick={Logoutfun}>  {user} : Logout</li>
                   <li className='  text-white'><Link to={"/"}>Home</Link></li>
                </ul>
            </div>
            </div>
            <div>
                    <GenreButton/>
            </div>
        </div>
    )
}

export default Header;
// border-gray-300