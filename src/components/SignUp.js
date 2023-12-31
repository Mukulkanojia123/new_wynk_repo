import React,{useState} from 'react'
import Login from './Login';

 const SignUp = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [page,setPage] = useState(false);

    const backgroundImageUrl = 'https://asset.brandfetch.io/idhXjxLF9g/idDdtM-Aux.png';

    let headersList = {
        projectId: "d5qpkle1fta5",
        "Content-Type": "application/json",
      };

      let bodyContent = JSON.stringify({
        name: name,
        email: email,
        password: password,
        appType: 'music',
      });

      const apiPostDetail = async() =>{
        const data = await  fetch(
            "https://academics.newtonschool.co/api/v1/user/signup",
            {
              method: "POST",
              body: bodyContent,
              headers: headersList,
            }
          );
          const json = await data.json();
        //   console.log(json);
      }

    function handleForm(){
        apiPostDetail()
        // console.log(name , email , password);
    }
    

  return page ?(
    <Login />
  ) : (
    <div className="flex flex-col sm:flex-row">
      <div className="w-full sm:w-1/2 bg-black flex flex-col justify-center items-center">
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
          <div className="flex flex-col justify-center items-center h-full bg-black">
            <div className="mb-6 flex justify-center items-center">
              {/* <h1 className="pr-2 text-center sm:text-left text-white">
               go to login ?
              </h1> */}
              <button
                 onClick={() => setPage(true)}
                className="w-20 bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
              >
                go to Login
              </button>
            </div>

            <p className="p-5 text-gray-600 font-semibold text-2xl sm:text-5xl">
              Welcome to wynk
            </p>
            <p className="pb-10 text-gray-400 font-semibold text-lg sm:text-3xl">
              Login with your email address.
            </p>

            <div className="bg-white p-8 rounded shadow-md w-80 sm:w-96">
              <h1 className="text-xl sm:text-2xl font-semibold mb-4">SignUp form</h1>
              <form onClick={(e) => e.preventDefault()} className="space-y-4">
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
                />
                <input
                  value={email}
                  onChange={(e)=> setEmail(e.target.value)}
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
                />
                <input
                 value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                  type="password"
                  placeholder="Password"
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
                />
                <button
                 onClick={() => {
                    handleForm();
                    alert("User created, go to login page");
                  }}
                  type="submit"
                  className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
                >
                  Login
                </button>
              </form>
            </div>
            <h1 className="italic font-thin">
              Use "Mukul@mukul" as Email & Password{" "}
            </h1>
          </div>
        </div>
    </div>
  )
}

export default SignUp