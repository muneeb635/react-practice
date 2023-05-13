import React from "react";
import { NativeBaseProvider } from "native-base";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./component/login";
import Singup from "./component/singup";
import Navbar from "./component/navbar";
import Home from "./component/home";
export default function App() {
  return (
    <NativeBaseProvider>
      <BrowserRouter>
      {/* <Navbar/> */}
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="singup" element={<Singup />}/>
        
         
        </Routes>
        </BrowserRouter>
    </NativeBaseProvider>
  );
}