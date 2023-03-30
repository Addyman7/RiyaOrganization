import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef(null);
  
  


  useEffect(() => {

    

    
    init(textRef.current, {
      showCursor: false,
      backDelay: 1500,
      backSpeed:60,
      
      strings: ["Hotel & Restaurant", "Dj Sound", "Transport Services"],

  
    
    });
  
  }, []);
  return (
    <div className="intro" id="intro">
    <div className="left">
      <div className="imgContainer">
        <img src="assets/Aadii.jpeg" alt="" />
      </div>
    </div>
    <div className="right">
      <div className="wrapper">
        <h3> Hi There , I'm</h3>
        <h2>Aditya Khareshiya</h2>
        <h4> & I Heartly ❤️ Welcome 🙏 all of you to </h4>
        <h1> Riya <span ref={textRef}></span></h1>
      </div>
      <a href="#portfolio">
        <img src="assets/down.png" alt="" />
      </a>
    </div>      
    </div>
  );
}
