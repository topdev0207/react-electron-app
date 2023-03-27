import logo from "./logo.svg";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Dashboard from "./Pages/Dashboard/dashboard";
import Menu from "./Pages/Menu/Menu";
import Setting from "./Pages/Setting/setting";
import Login from "./Pages/Login/login";

function App() {
  // const [useremail, setuseremail] = useState("");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/menu" element={<Menu />} />
        {/* <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </BrowserRouter>
    // <div>
    //   <MenuPages />
    // </div>
  );
}

export default App;
