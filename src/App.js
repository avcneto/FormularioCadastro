import React, { Component } from "react";
import "./App.css";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import { Container, Typography } from "@material-ui/core";
import "fontsource-roboto";
//import { validarCPF, validarSenha } from "./modelo/cadastro";
import ValidacoesCadastro from "./contexts/validacoesCadastro";
import { validarCPF, validarSenha } from "./modelo/cadastro";

class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" align="center" component="h1">
          Fomulario de cadastro
        </Typography>
        <ValidacoesCadastro.Provider
          value={{ cpf: validarCPF, senha: validarSenha, nome: validarSenha }}
        >
          <FormularioCadastro aoEnviar={aoEnviarform} />
        </ValidacoesCadastro.Provider>
      </Container>
    );
  }
}

function aoEnviarform(dados) {
  console.log(dados);
}

export default App;
