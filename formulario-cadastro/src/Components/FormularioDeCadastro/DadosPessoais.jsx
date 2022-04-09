import React, { useState, useContext } from "react";
import { TextField, Switch, Button, FormControlLabel } from "@mui/material";
import ValidacoesCadastro from "../../contexts/ValidacaoCadastro";
import useErros from "../../hooks/useErros";

function DadosPessoais({ aoEnviar }) {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(false);
  const validacoes = useContext(ValidacoesCadastro);

  const [erros, validarCampo, possoEnviar] = useErros(validacoes);

  return (
    <form
      onSubmit={(evento) => {
        evento.preventDefault();
        if (possoEnviar()) {
          aoEnviar({ nome, sobrenome, cpf, promocoes, novidades });
        }
      }}
    >
      <TextField
        value={nome}
        onChange={(evento) => {
          setNome(evento.target.value);
        }}
        onBlur={validarCampo}
        error={!erros.nome.valido}
        helperText={erros.nome.texto}
        id="outlined-basic"
        label="Nome"
        variant="outlined"
        margin="normal"
        name="nome"
        required
        fullWidth
      />

      <TextField
        value={sobrenome}
        onChange={(evento) => {
          setSobrenome(evento.target.value);
        }}
        id="outlined-basic"
        label="Sobrenome"
        variant="outlined"
        margin="normal"
        name="sobrenome"
        required
        fullWidth
      />
      {/*cpf*/}
      <TextField
        value={cpf}
        error={!erros.cpf.valido}
        helperText={erros.cpf.texto}
        onChange={(evento) => {
          setCpf(evento.target.value);
        }}
        onBlur={validarCampo}
        id="outlined-basic"
        label="CPF"
        variant="outlined"
        margin="normal"
        name="cpf"
        required
        fullWidth
      />

      <FormControlLabel
        control={
          <Switch
            id="promocoes"
            onChange={(evento) => {
              setPromocoes(evento.target.checked);
            }}
            name="promocoes"
            checked={promocoes}
          ></Switch>
        }
        label="Promoções"
      />

      <FormControlLabel
        control={
          <Switch
            onChange={(evento) => {
              setNovidades(evento.target.checked);
            }}
            id="novidades"
            name="novidades"
            checked={novidades}
          ></Switch>
        }
        label="Novidades"
      />

      <Button variant="contained" color="primary" type="submit">
        Próximo
      </Button>
    </form>
  );
}

export default DadosPessoais;
