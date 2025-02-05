import { useState, useEffect } from "react";

function App() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div style={styles.container}>
      <h2>Current Window Size</h2>
      <div style={styles.box}>
        Width: {windowSize.width}px <br />
        Height: {windowSize.height}px
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
  },
  box: {
    fontSize: "20px",
    fontWeight: "bold",
    padding: "20px",
    border: "2px solid black",
    display: "inline-block",
    backgroundColor: "#f0f0f0",
    borderRadius: "10px",
  },
};

export default App;

// import "./App.css";

// import { useEffect, useState } from "react";

// function App() {
//   const [text, setText] = useState("");
//   const [name, setName] = useState("");
//   // variation i => it will run on every render
//   // useEffect(() => {
//   //   console.log("UI Rendering Done");
//   // });

//   // variation 2
//   // useEffect(() => {
//   //   console.log("UI REnered Successfull");
//   // }, []);

//   // useEffect(() => {
//   //   console.log("Change Obseved");
//   // }, [text]);

//   // useEffect to unmounting of a compoent
//   // useEffect(() => {
//   //   console.log("Change Obseved");
//   // }, [name]);

//   useEffect(() => {
//     console.log("Listener added");

//     return () => {
//       console.log("Listner Removed");
//     };
//   }, [text]);

//   function changleHandler(event) {
//     setText(event.target.value);
//     console.log(text);
//   }

//   return (
//     <div className="App">
//       <input type="text" className="input" onChange={changleHandler} />
//     </div>
//   );
// }

// export default App;

