import React, { useState , useContext, useEffect } from 'react';
import SignUp from './SignUp';
import UserContext from './UserContext';

const Login = () => {

    const [excess , setExcess] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [page, setPage] = useState(true);

    //image url
    const backgroundImageUrl = 'https://asset.brandfetch.io/idhXjxLF9g/idDdtM-Aux.png';
    //   console.log(page)

     const { isLogin,setAuthrise } = useContext(UserContext);
     const { user,setUserName } = useContext(UserContext);
     

    let headersList = {
        projectId: "d5qpkle1fta5",
        "Content-Type": "application/json",
    };

    let bodyContent = JSON.stringify({
        email: email,
        password: password,
        appType: 'music',
    });

    const getLoginData = async() =>{
        try{
        const data = await fetch(
            "https://academics.newtonschool.co/api/v1/user/login",
            {
              method: "POST",
              body: bodyContent,
              headers: headersList,
            }
          );
          const json = await data.json();
        //   console.log(json.data);
          setExcess(json.status);
          setUserName(json.data.name);
          
        }catch(error) {
                console.log(error);
        }
    }
    useEffect(()=>{
        if(excess === "success"){
            setAuthrise(true);
        }
    },[excess])

    function handleSignIn() {
        getLoginData()
        // console.log(email, password);
    }


    return !page ? (
        <SignUp />
    ) : (
        <div className="flex flex-col sm:flex-row">
            <div className="w-full sm:w-1/2 bg-gray-900 flex flex-col justify-center items-center">
                <img className="max-w-full h-[50%]" src={backgroundImageUrl} alt="Signup" />
                <p className="text-white mt-2 text-center font-bold text-3xl sm:text-5xl">
                    Play The Music.
                </p>
                <p className="text-yellow-200 mt-2 text-center font-semibold text-xl sm:text-4xl">
                    Anytime, anywhere.
                </p>
            </div>
            {/* Add the login form or content for the right half */}

            <div className="w-full sm:w-1/2 ">
                <div className="flex flex-col justify-center items-center h-full bg-gray-900">
                    <div className="mb-6 flex justify-center items-center">
                        <h1 className="pr-2 text-center sm:text-left text-white">
                            SignUp for create Account
                        </h1>
                        <button
                            onClick={() => setPage(false)}
                            className="w-20 bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
                        >
                            SignUp
                        </button>
                    </div>

                    <p className="p-5 text-gray-600 font-semibold text-2xl sm:text-5xl">
                        Welcome to wynk
                    </p>
                    <p className="pb-10 text-gray-400 font-semibold text-lg sm:text-3xl">
                        Login with your email address.
                    </p>

                    <div className="bg-white p-8 rounded shadow-md w-80 sm:w-96">
                        <h1 className="text-xl sm:text-2xl font-semibold mb-4">Login</h1>
                        <form onClick={(e) => e.preventDefault()} className="space-y-4">
                            <input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                placeholder="Email"
                                className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
                            />
                            <input
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                type="password"
                                placeholder="Password"
                                className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
                            />
                            <button
                                onClick={handleSignIn}
                                type="submit"
                                className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition"
                            >
                                Login
                            </button>
                        </form>
                    </div>
                    <h1 className="italic font-thin text-orange-400">
                        Use "mukul123@gmail.com" as Email & "12345678"Password{" "}
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default Login;
