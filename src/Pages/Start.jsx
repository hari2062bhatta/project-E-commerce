import {useNavigate} from "react-router-dom"


const Start = () => {

  const navigate=useNavigate()
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-amber-100">
      <div className="border-2  w-90 h-90 flex flex-col justify-center items-center bg-amber-700">
        <h3 className="mb-8 text-white font-bold">Welcome To Big Mart</h3>

        <p className="mb-5 text-white ">Choose your type </p>
        <div className="flex  gap-3.5">
          <button onClick={()=>navigate("/register")} className="p-2 border-2 bg-green-500 text-center w-15 rounded-md cursor-pointer">
            Admin
          </button>
          <button onClick={()=>navigate("/register")} className="p-2 border-2 bg-red-500 text-center w-15 rounded-md cursor-pointer">
            User
          </button>
        </div>
        <p className="m-4">Already have accound?<a onClick={()=>navigate("/login")}  className="text-blue-300 font-semibold cursor-pointer">  Click Here</a></p>
      </div>
    </div>
  );
};

export default Start;
