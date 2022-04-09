import { Button, TextField } from "@mui/material";
import React, { useState } from "react";

function DadosEntrega({ aoEnviar }) {
  const [cep, setCep] = useState(0);
  const [endereco, setEndereco] = useState("");
  const [numeroCasa, setNumeroCasa] = useState(0);
  const [estado, setEstado] = useState("");
  const [cidade, setCidade] = useState("");
  return (
    <form
      onSubmit={(evento) => {
        evento.preventDefault();
        aoEnviar({ cep, endereco, numeroCasa, estado, cidade });
      }}
    >
      <TextField
        value={cep}
        onChange={(evento) => setCep(evento.target.value)}
        id="cep"
        label="CEP"
        type="number"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        value={endereco}
        onChange={(evento) => setEndereco(evento.target.value)}
        id="endereco"
        label="Endereço"
        type="text"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        value={numeroCasa}
        onChange={(evento) => setNumeroCasa(evento.target.value)}
        id="numeroCasa"
        label="Número"
        type="text"
        variant="outlined"
        margin="normal"
      />
      <TextField
        value={estado}
        onChange={(evento) => setEstado(evento.target.value)}
        id="estado"
        label="Estado"
        type="text"
        variant="outlined"
        margin="normal"
      />
      <TextField
        value={cidade}
        onChange={(evento) => setCidade(evento.target.value)}
        id="cidade"
        label="Cidade"
        type="text"
        variant="outlined"
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Finalizar Cadastro
      </Button>
    </form>
  );
}

export default DadosEntrega;
