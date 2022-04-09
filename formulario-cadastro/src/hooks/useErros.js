import { useState } from "react";

export default function useErros(validacoes) {
  const estadoInicial = criarEstadoInicial(validacoes);

  const [erros, setErros] = useState(estadoInicial);

  const validarCampo = (evento) => {
    const { name, value } = evento.target;
    const novoEstado = { ...erros };
    novoEstado[name] = validacoes[name](value);
    setErros(novoEstado);
    console.log(novoEstado);
  };

  const possoEnviar = () => {
    let posso = true;
    for (let campo in erros) {
      if (!erros[campo].valido) {
        posso = false;
      }
    }
    return posso;
  };

  return [erros, validarCampo, possoEnviar];
}

function criarEstadoInicial(validacoes) {
  const estadoInicial = {};
  for (let atributo in validacoes) {
    estadoInicial[atributo] = { valido: true, texto: "" };
  }

  return estadoInicial;
}
