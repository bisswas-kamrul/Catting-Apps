import { BrowserRouter, Routes, Route } from "react-router";
import "./App.css";
import RootLayout from "./RootLayout";
import Home from "./Component/Pages/Home";
import Login from "./Component/Pages/Login";
import SingUp from "./Component/Pages/SingUp";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index path="/" element={<Home />} />
          <Route index path="/Login" element={<Login />} />
          <Route index path="/Singup" element={<SingUp />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
