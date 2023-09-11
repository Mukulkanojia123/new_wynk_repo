import React , {useState} from 'react';
import Header from './components/Header';
import Body from './components/Body';
import './App.css';
import Buttons from './components/Buttons';
import UserContext from './components/UserContext';
import { Outlet } from 'react-router-dom';
import  Login  from './components/Login';


function App() {
  const [searchItem , setSearchItem] = useState('');
  const[authrise , setAuthrise] = useState(false);
  const [userName , setUserName] = useState("");
  const [fav , setFav] = useState([]);
  return (
    <UserContext.Provider value={{ userSearchText : searchItem ,
    isLogin: authrise,user : userName, favList:fav,setFav,
    setAuthrise, setSearchItem,setUserName
    }}>
    
      {
        !authrise ? (
          <Login/>
        ) : (
          <div>
 
 
          <Header/>     
          <Outlet/>
          </div>
        )
      }
      
    
    </UserContext.Provider>
  );
}

export default App;
