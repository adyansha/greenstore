import './App.css';
import { Layout } from './Layout';
import { Homelayout } from './Features/Home/homelayout';
import { Feedbacklayout } from './Features/Feedback/feedbacklayout';
import { Shoplayout } from './Features/Shop/shoplayout';
import { Routes,Route } from 'react-router-dom';
import { Userheader } from './Layout/Header/userheader';
import { Signup } from './Features/signup/signup';
import { Productshop } from './Features/Shop/product';
import { Adminheader } from './Layout/Header/adminheader';
import { useState } from 'react';
import {Adminlogsucc} from './Features/admin/adminlogsucc';
function App() {
  // const [adminemail,setadminemail] = useState("");
  // const [adminpassword,setadminpassword] = useState("");
  // const validemail = "abc@gmail.com";
  // const validpassword = "123456789";
  // const isadmin = adminemail === validemail && adminpassword === validpassword;
  const [isadmin,setisadmin] = useState(false);
  const handleadminlogin = (email,password) => {
    const validemail = "abc@gmail.com";
    const validpassword = "123456789";
    if(email===validemail && password===validpassword) {
      setisadmin(true);
    }
    else{
      setisadmin(false);
    }
  }
  return (
    <div>
     
      
      {/* <Userheader /> */}
      {/* <Adminheader /> */}
      {/* if(adminemail===validemail && adminpassword===validpassword){
        <Adminheader />
      }
      else{
        <Userheader />
      } */}
       {isadmin ? <Adminheader /> : <Userheader />}
      <Routes>
        <Route path="/" element={<Homelayout />} />
        {/* <Route path="/home" element={<Homelayout />} /> */}
        <Route path="/feedback" element={<Feedbacklayout />} />
        <Route path='/signup' element={<Signup />} />
        <Route path="/shopnow" element={<Shoplayout />} />
        <Route path="/adminsucc" element={<Adminlogsucc />} />
      </Routes>

    </div>
  );
}

export default App;
