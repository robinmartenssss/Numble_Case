import React from "react";
import "./App.css";
import Form from "./Components/Form/Form";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img className="home_logo" src="/images/qteam_logo.jpg" alt="" />
      </header>

      <Form />

      <footer className="App_footer">
        <img src="images/qteam_foto.jpg" alt="foto" />
      </footer>
    </div>
  );
}

export default App;
