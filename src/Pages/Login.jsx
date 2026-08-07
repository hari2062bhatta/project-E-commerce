

const Login=()=>{
    return<div className="flex justify-center items-center bg-amber-400  h-screen w-full  ">
        <div className="flex flex-col gap-2 border-2 rounded-md w-80 h-85 justify-center items-center  bg-amber-700">
            <h2 className="text-white font-bold ">Welcome to Big-Mart</h2>
            <h2 className="text-white font-semibold">Please Login</h2>
            <form className="flex flex-col justify-center items-center gap-2 text-blue-950 font-semibold">
                <label>Email</label>
                <input className="w-75 h-10 border-2 rounded-xl text-center" type="email" placeholer="hari@gmail.com"></input>
                <label>Password</label>
                <input className="w-75 h-10 border-2 rounded-xl text-center" type="password"></input>
                <input className="w-75 h-10 border-2 rounded-xl text-center bg-green-500" type="button" value="Login"></input>
            </form>
            <p className="m-3">Not Register yet?<a className="text-blue-400 cursor-pointer"> Please Register</a></p>
        </div>
    </div>

}
export default Login;