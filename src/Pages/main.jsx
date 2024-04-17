import React from 'react';
import './CSS/mani_page.css';
import { Link } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import LogoutIcon from '@mui/icons-material/Logout';
import img_1 from "./Image/img_1.jpg";
import img_2 from "./Image/img_2.jpg";
import img_3 from "./Image/img_3.jpg";
import img_4 from "./Image/img_4.jpg";
import img_5 from "./Image/img_5.jpg";
import img_6 from "./Image/img_6.jpg";
import img_7 from "./Image/img_7.jpg";
import img_8 from "./Image/img_8.jpg";
import img_9 from "./Image/img_9.jpg";
function Main_Page(){
    return(
        <div>
    <div className="container">
        <nav>
            <h1>F<span>oo</span>dy Z<span>o</span>ne</h1>            
            <input type='text'  placeholder="Search Food.."/>
            <SearchIcon  sx={
            {backgroundColor:'white',
            height:'31px',
            float:"right",
            marginRight:'-17.8%',
            width:'2%',
            marginTop:'3%',
            border:'2px solid red',
            borderRadius:'5px'}}/>
            <ul>
                <li>All</li>
                <li>BreakFast</li>
                <li>Lunch</li>
                <li>Dinner</li>
            </ul>
        </nav>
        <div className="container-2">
            <img src={img_1} alt="food-img"/>
            <h2>Foodname</h2>
            <p>Lorem ipsum dolor sit commodi soluta aliquid culpa aut officia animi.</p>
            <button>₹1500</button>
        </div>
        <div className="container-2">
            <img src={img_2} alt="food-img"/>
            <h2>Foodname</h2>
            <p>Lorem ipsum dolor sit commodi soluta aliquid culpa aut officia animi.</p>
            <button>₹1500</button>
        </div>
        <div className="container-2">
            <img src={img_3} alt="food-img"/>
            <h2>Foodname</h2>
            <p>Lorem ipsum dolor sit commodi soluta aliquid culpa aut officia animi.</p>
            <button>₹1500</button>
        </div>
        <div className="container-2">
            <img src={img_4} alt="food-img"/>
            <h2>Foodname</h2>
            <p>Lorem ipsum dolor sit commodi soluta aliquid culpa aut officia animi.</p>
            <button>₹1500</button>
        </div>
        <div className="container-2">
            <img src={img_5} alt="food-img"/>
            <h2>Foodname</h2>
            <p>Lorem ipsum dolor sit commodi soluta aliquid culpa aut officia animi.</p>
            <button>₹1500</button>
        </div>
        <div className="container-2">
            <img src={img_6} alt="food-img"/>
            <h2>Foodname</h2>
            <p>Lorem ipsum dolor sit commodi soluta aliquid culpa aut officia animi.</p>
            <button>₹1500</button>
        </div>
        
        <div className="container-2">
            <img src={img_7} alt="food-img"/>
            <h2>Foodname</h2>
            <p>Lorem ipsum dolor sit commodi soluta aliquid culpa aut officia animi.</p>
            <button>₹1500</button>
        </div>
        
        <div className="container-2">
            <img src={img_8} alt="food-img"/>
            <h2>Foodname</h2>
            <p>Lorem ipsum dolor sit commodi soluta aliquid culpa aut officia animi.</p>
            <button>₹1500</button>
        </div>
        
        <div className="container-2">
            <img src={img_9} alt="food-img"/>
            <h2>Foodname</h2>
            <p>Lorem ipsum dolor sit commodi soluta aliquid culpa aut officia animi.</p>
            <button>₹1500</button>
        </div>
        </div>
        <div>
        <Link to="/"><LogoutIcon
            sx={
                {backgroundColor:'white',
                height:'35px',
                float:"right",
                width:'2%',
                marginTop:'18%',
                border:'2px solid red',
                borderRadius:'5px'}}/></Link>
                </div>
    </div>
    )
}
export default Main_Page;