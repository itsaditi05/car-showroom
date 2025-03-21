import React, { useState } from "react";

function App() {
  const [bgcolor, setBgColor] = useState("white");
  const [carImage, setCarImage] = useState("/sportscar-removebg-preview.png"); //default white car
  const colorToImageMap = {
    red: "/red_sportscar.png",
    black: "/black_sportscar.png",
    green: "/green_sportscar.png",
  };
  const changeColors = () => {
    const colors = Object.keys(colorToImageMap);
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setBgColor(randomColor); //
    setCarImage(colorToImageMap[randomColor]);
  };
  return (
    <div
      style={{
        backgroundColor: bgcolor,
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(255,255,255,0.9)",
          padding: "40px",
          borderRadius: "15px",
          boxShadow: "0px 4px 15px rgba(0,0,0,0.3)",
          textAlign: "center",
          width: "400px",
        }}
      >
        <h2 style={{marginBottom:"20px",fontFamily:"Arial,sans-serif",}}>Welcome to car Showroom </h2>
        <img src={carImage} alt="car image"  style={{width:"100%",
          borderRadius:"10px",
          boxShadow:"0px 4px 10px rgba(0,0,0,0.2)",
        }} />

        <button
          onClick={changeColors}
          style={{
            padding: "12px 25px",
            fontSize: "16px",
            cursor: "pointer",
            marginTop: "20px",
            border: "none",
            backgroundColor: "#333",
            color: "white",
            borderRadius: "5px",
            transition:"0.3s",

          }}
          onMouseOver={(e) => (e.target.style.backgroundColor="#555")}
          onMouseOut ={(e)=>(e.target.style.backgroundColor="#333")}
        >
          Swipe{" "}
        </button>
      </div>
    </div>
  );
}

export default App;
