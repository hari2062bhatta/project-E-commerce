import { useNavigate } from "react-router-dom";
import api from "../Config/api.jsx";
import { useState } from "react";

const Register = () => {
  const [otp, setOtp] = useState(false);
  const [code ,setCode]=useState("")
  // const [error,setError]=useState("")
  const [data, setData] = useState({
    fullName: "",
    address: "",
    contact: "",
    email: "",
    password: "",
    gender: "",
  });
  const handleChange = (e) => {
    const newData = { ...data, [e.target.name]: e.target.value };
    setData(newData);
    // console.log(data)
  };
  const registerData = async (e) => {
    e.preventDefault();
        try {
          const response = await api.post("/auth/otpverify", {
            fullName: data.fullName,
            address: data.address,
            contact: data.contact,
            email: data.email,
            password: data.password,
            gender: data.gender,
            otp:code
          });

          if (response) {
            navigate("/login");
            console.log(response)
            // setData("");
          }
        } catch (err) {
          console.log(err);
          console.log(err.response);
        }
   
  };
  const sendOtp=async(e)=>{
        e.preventDefault();
      if(
      !data.fullName.trim() ||
      !data.address.trim() ||
      !data.contact.trim() ||
      !data.email.trim() ||
      !data.password.trim() ||
      !data.gender
    ) {
      return console.log("please fill all the field");
    }
    try{
      const response=await api.post("/auth/register",{email:data.email})
      console.log(response)
      setOtp(true);
    }
    catch(err){
        console.log(err)
    }
        
  }
  const navigate = useNavigate();
  return otp == true ? (
    <div className="flex justify-center items-center bg-amber-300  h-screen w-full ">
      <div className="flex flex-col justify-center gap-3 items-center bg-amber-600 border-2 rounded-md w-80 h-80  ">
        <h2 className="text-white font-semibold ">
          6 digit code is sent to your email
        </h2>
        <form className="flex flex-col gap-3 justify-center items-center">
          <input
            className="h-10 w-75 full border-2 rounded-xl text-center "
            type="text"
            value={code}
            onChange={(e)=>setCode(e.target.value)}
            placeholder="enter otp"
          ></input>
          <input
           onClick={registerData}
            className="bg-green-400 p-3 w-75 border-2 rounded-xl cursor-pointer"
            type="submit"
            value="Verify"
          ></input>
        </form>
      </div>
    </div>
  ) : (
    <div>
      <div className="flex justify-center items-center bg-amber-200  w-full h-screen">
        <div className="w-100 h-145 border-2 rounded-md flex flex-col items-center   bg-amber-700">
          <h2 className="text-white font-bold mb-2 mt-2">
            Please Fill Your Details
          </h2>
          <form className="flex flex-col items-center gap-2 w-full font-semibold">
            <label>FullName</label>
            <input
              className="w-96 h-10 border-2 rounded-xl text-center"
              type="text"
              placeholder="Hari Bhatta"
              value={data.fullName}
              name="fullName"
              onChange={handleChange}
            ></input>
            <label>Address</label>
            <input
              onChange={handleChange}
              className="w-96 h-10 border-2 rounded-xl text-center"
              type="text"
              placeholder="Chitwan"
              name="address"
            ></input>
            <label>Email</label>
            <input
              onChange={handleChange}
              className="w-96 h-10 border-2 rounded-xl text-center"
              type="email"
              placeholder="hari@gmail.com"
              value={data.email}
              name="email"
            ></input>
            <label>Contact</label>
            <input
              onChange={handleChange}
              className="w-96 h-10 border-2 rounded-xl text-center"
              type="number"
              placeholder="9819264210"
              value={data.contact}
              name="contact"
            ></input>
            <label>Gender</label>

            <div className="flex items-center justify-center w-45 ">
              Male:
              <input
                onChange={handleChange}
                className="w-96  border-2"
                type="radio"
                name="gender"
                value="male"
              ></input>
              Female:
              <input
                className="w-96 border-2"
                type="radio"
                name="gender"
                value="female"
                onChange={handleChange}
              ></input>
            </div>
            <label>Password</label>
            <input
              onChange={handleChange}
              className="w-96 h-10 border-2 rounded-xl text-center"
              type="password"
              value={data.password}
              name="password"
            ></input>
            <button
              className="w-96 p-2 bg-green-600 rounded-xl cursor-pointer text-center text-white font-bold"
              // onClick={(e) => registerData(e)}
              onClick={sendOtp}
            >
              Send otp
            </button>
          </form>
          <p className="mt-1">
            Already Register ?{" "}
            <a
              onClick={() => navigate("/login")}
              className="text-blue-400 cursor-pointer font-semibold"
            >
              Login Here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
