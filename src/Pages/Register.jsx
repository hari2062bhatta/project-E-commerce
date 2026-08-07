


const Register=()=>{
        return<div className="flex justify-center items-center bg-amber-200  w-full h-screen">
                <div className="w-100 h-140 border-2 rounded-md flex flex-col items-center   bg-amber-700">
                <h2 className="text-white font-bold mb-2 mt-2">Please Fill Your Details</h2>
                <form className="flex flex-col items-center gap-2 w-full font-semibold">
                <label>FullName</label>
                <input className="w-96 h-10 border-2 rounded-xl text-center" type="text" placeholder="Hari Bhatta"></input>
                <label>Address</label>
                <input className="w-96 h-10 border-2 rounded-xl text-center" type="text" placeholder="Chitwan"></input>
                <label>Email</label>
                <input className="w-96 h-10 border-2 rounded-xl text-center" type="email" placeholder="hari@gmail.com"></input>
                <label>Contact</label>
                <input className="w-96 h-10 border-2 rounded-xl text-center" type="number" placeholder="9819264210"></input>
                <label>Gender</label>
                <div className="flex items-center justify-center w-45 ">
                Male:<input className="w-96  border-2" type="radio" name="gender" ></input>
                Female:<input className="w-96 border-2" type="radio" name="gender" ></input>
                
                </div>
                <label>Password</label>
                <input className="w-96 h-10 border-2 rounded-xl text-center" type="password" ></input>
                <button className="w-96 p-2 bg-green-600 rounded-xl cursor-pointer text-center text-white font-bold  ">Register</button>
                </form>
                </div>          
        </div>
}

export default Register;