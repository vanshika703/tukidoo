import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import SubSidebar from "./components/SubSidebar";
import Videoplayer from "./components/Videoplayer";
import { IconContext } from "react-icons";

function App() {
  return (
    <IconContext.Provider
      value={{className: "global-class-name" }}
    >
      <div className="flex flex-row">
        <Sidebar />
        <div className="w-full">
          <Navbar />
          <div className="flex">
            <SubSidebar />
            <Videoplayer />
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}

export default App;
