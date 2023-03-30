import Contacts from "./components/contacts/Contacts";
import Works from "./components/works/Works";
import Intro from "./components/intro/Intro";
import Topbar from "./components/topbar/Topbar";
import "./app.scss"
import { useState } from "react";
import Menu from "./components/menu/Menu";
import Business from "./components/business/Business";

function App() {
  const[menuOpen,setMenuOpen]=useState(false)
  return (
    <div className="app">
    <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    <Menu  menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    <div className="sections">
    <Intro />
    <Business />
    <Works />
    <Contacts/>
    </div>
    </div>
  );
}

export default App;
