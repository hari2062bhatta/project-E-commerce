import Start from "./Pages/Start"
import Register from "./Pages/Register"
import Login from "./Pages/Login"
import {BrowserRouter, Routes,Route} from "react-router-dom"
function App(){
  return<div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Start/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
      </Routes>
      </BrowserRouter>
  </div>

}
export default App;