import { Routes, Route } from "react-router";
import "./App.css";
import RootLayout from "./RootLayout";
import Home from "./Component/Pages/Home";
import Login from "./Component/Pages/Login";
import SingUp from "./Component/Pages/SingUp";
import DashBord from "./Component/Pages/DashBord";
import Notifacaton from "./Component/Pages/Notifacaton";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index path="/" element={<Home />} />
          <Route index path="/Login" element={<Login />} />
          <Route index path="/Singup" element={<SingUp />} />
        </Route>
          <Route index path="/DashBord" element={<DashBord />} />
          <Route index path="/Notifacaton" element={<Notifacaton />} />
      </Routes>
    </>
  );
}

export default App;
