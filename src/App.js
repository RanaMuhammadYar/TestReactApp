import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Alert from "./components/Alert";
// import Navbar1 from "./components/Navbar1";
// import Home from "./components/Home";



function App() {
  const [mode, setmode] = useState("dark");
  const [usetext, setText] = useState("white");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 5000);
  };

  const togglemode = () => {
    if (mode === "dark") {
      setmode("primary");
      setText("white");
      document.body.style.backgroundColor = "blue";
      showAlert("Dark Mode Has Been Enabled", "success");
      document.title = "Home - Dark Mode Enabled";
    } else {
      setmode("dark");
      setText("white");
      document.title = "Home -Light Mode Enabled";
      document.body.style.backgroundColor = "black";
      showAlert("Light Mode Has Been Enabled", "success");
    }
  };

  return (
    <>
      
        <Navbar
          title="Home"
          aboutUs="About Us"
          contactUs="Contect Us "
          home="Home"
          mode={mode}
          togglemode={togglemode}
        />
        <Alert alert={alert} />
        

        {/* <Home/> */}
        {/* <About/> */}
        <TextForm text="Enter The text " mode={mode} usetext={usetext} />

          
          

      
    </>
  );
}

export default App;
