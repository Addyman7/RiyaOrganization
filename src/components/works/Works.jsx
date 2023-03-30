import { useState } from "react";
import "./works.scss";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/hotel.png",
      title: "Riya Hotel & Restaurant",
      desc:
        "Your happy place is our happy place! Welcome to the best restaurant in town. ",
      img:
        "./assets/Hotel.jpeg",
    },
    {
      id: "2",
      icon: "./assets/truck.png",
      title: "Riya Transport Services",
      desc:
        "“Transportation-the efficient flow of resources, the efficient movement of people, and the efficient utilization of time. Thats why we do what we do at Riya Transport Services",
      img:
        "./assets/truck.jpeg",
    },
    {
      id: "3",
      icon: "./assets/dj.png",
      title: "Riya Dj Sound",
      desc:
        "Have No Fear When The DJ is Here.",
      img:
        "./assets/dj.jpeg",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  
  return (
    <div className="works" id="works">
      <div
        className="slider translate"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d,index) => (
          <div key={index} className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2 >{d.title}</h2>
                  <p className="font">{d.desc}</p>
                 
                </div>
              </div>
              <div className="right">
              {
                index===1?<img className="rotate"
                  src={d.img}
                  alt=""
                />:
                (
                  index===2?<img className="rotate1"
                  src={d.img}
                  alt=""
                />:
                <img
                  src={d.img}
                  alt=""
                />
                )
                
              }
                
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}
      
    