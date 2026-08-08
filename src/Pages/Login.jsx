import { useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "../Config/api";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const Login = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/auth/login", {
        email,
        password,
      });
      console.log(response);
    } catch (err) {
      console.log(err);
      console.log(err.response);
    }
  };
  // const signupwithgoogle=async(e)=>{

  //   try{
  //     window.location.href = "http://localhost:5000/auth/googleverify";
  //     console.log(response)
  //   }
  //   catch(err){

  //   }
  // }
  return (
    <div className="flex justify-center items-center bg-amber-400  h-screen w-full  ">
      <div className="flex flex-col gap-2 border-2 rounded-md w-80 h-90 justify-center items-center  bg-amber-700">
        <h2 className="text-white font-bold ">Welcome to Big-Mart</h2>
        <h2 className="text-white font-semibold">Please Login</h2>
        <form className="flex flex-col justify-center items-center gap-2 text-blue-950 font-semibold">
          <label>Email</label>
          <input
            className="w-75 h-10 border-2 rounded-xl text-center"
            type="email"
            placeholer="hari@gmail.com"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          ></input>
          <label>Password</label>
          <input
            className="w-75 h-10 border-2 rounded-xl text-center"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          ></input>
          <input
            className="w-75 h-10 border-2 rounded-xl text-center cursor-pointer bg-green-500"
            type="button"
            value="Login"
            onClick={(e) => Login(e)}
          ></input>
        </form>

                  ` <button
              className="w-50 h-10 border-2 rounded-xl text-blue-300 mt-2 cursor-pointer"
              onClick={() => {
                window.location.href = "http://localhost:5000/auth/googleverify";
              }}
            >
              Signup with Google
            </button>`
        <p className="m-3">
          Not Register yet?
          <a
            onClick={() => navigate("/register")}
            className="text-blue-400 cursor-pointer"
          >
            {" "}
            Please Register
          </a>
        </p>
      </div>
    </div>
  );
};
export default Login;
