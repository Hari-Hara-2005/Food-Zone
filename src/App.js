import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Login_page from "./Pages/login";
import Sign_up_page from "./Pages/sign-up";
import Main_Page from "./Pages/main";
function App(){
    return(<div>
        <BrowserRouter>
         <Routes>
            <Route path="/" element={<Sign_up_page/>}/>
            <Route path="/Login_page" element={<Login_page/>}/>
            <Route path="/FoodZone" element={<Main_Page/>}/>
        </Routes>
        </BrowserRouter>
    </div>)
}
export default App;