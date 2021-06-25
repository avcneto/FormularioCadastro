import React, { Component } from "react";
import "./App.css";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";

class App extends Component {
  render() {
    return (
      <div>
        <h1>Fomulario de cadastro</h1>
        <FormularioCadastro />
      </div>
    );
  }
}

export default App;
