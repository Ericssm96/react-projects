import { Button, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import ValidacoesCadastro from "../../contexts/ValidacaoCadastro";
import useErros from "../../hooks/useErros";

export default function DadosUsuario({ aoEnviar }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const validacoes = useContext(ValidacoesCadastro);

  const [erros, validarCampo, possoEnviar] = useErros(validacoes);

  return (
    <form
      onSubmit={(evento) => {
        evento.preventDefault();
        if (possoEnviar()) {
          aoEnviar({ email, senha });
        }
      }}
    >
      <TextField
        value={email}
        onChange={(evento) => {
          setEmail(evento.target.value);
        }}
        id="email"
        label="E-Mail"
        type="email"
        variant="outlined"
        margin="normal"
        name="email"
        required
        fullWidth
      />
      <TextField
        value={senha}
        onChange={(evento) => {
          setSenha(evento.target.value);
        }}
        id="senha"
        label="Senha"
        onBlur={validarCampo}
        error={!erros.senha.valido}
        helperText={erros.senha.texto}
        type="password"
        variant="outlined"
        margin="normal"
        name="senha"
        required
        fullWidth
      />
      <Button type="submit" variant="contained" color="primary">
        Próximo
      </Button>
    </form>
  );
}
