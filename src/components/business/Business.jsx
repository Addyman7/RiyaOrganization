import "./business.scss";

export default function Business() {
  const data = [
    {
      id: 1,
      name: "राजेंद्र सिंह खरेशिया ",
      title: "रिया D.J साउंड,रींगस",
      img:
        "./assets/chacha.jpeg",
      icon: "assets/dj.png",
      desc:
        "शादी, जलवा, बर्थडे पार्टी या कोई भी अन्य प्रोग्राम में डीजे बुक करने के लिए संपर्क करें 📱+91 8560997478",
    },
    {
      id: 2,
      name: "हनुमान सिंह खरेशिया ",
      title: "रिया होटल एंड रेस्टोरेंट,रींगस",
      img:
        "./assets/papa.jpeg",
      icon: "assets/hotel.png",
      desc:
        "रहने,खाने व ठहरने की उत्तम व्यवस्था , A.C व Non-A.C Rooms Available. संपर्क हेतू- 📱+91 6367847154 ",
      featured: true,
    },
    {
      id: 3,
      name: "विजयपाल सिंह खरेशिया",
      title: "रिया ट्रांसपोर्ट, रींगस",
      img:
        "./assets/chacha-papa.jpeg",
      icon: "assets/truck.png",
      desc:
        "All India Transport Reserved.वाहन बुक करने के लिए संपर्क करें 📱+91 9929065440",
    },
  ];
  return (
    <div className="business" id="business">
      <h1>Introduction to Our Business</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <img
                className="user"
                src={d.img}
                alt=""
              />
              <img className="right" src={d.icon} alt="" />
            </div>
            <div className="center">
              {d.desc}
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

