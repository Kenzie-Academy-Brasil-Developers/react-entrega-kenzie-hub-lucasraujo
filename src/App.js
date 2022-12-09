import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { UserProvider } from "./contexts/userContext";

function App() {
  return (
    <div>
      <UserProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Register" element={<Register />} />

          <Route path="/Home" element={<Home />} />
        </Routes>
      </UserProvider>

      <ToastContainer />
    </div>
  );
}

export default App;
