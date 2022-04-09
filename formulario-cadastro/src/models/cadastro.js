const validarCPF = (cpf) => {
  if (cpf.length !== 11) {
    return { valido: false, texto: "O CPF precisa ter 11 dígitos." };
  } else {
    return { valido: true, texto: "" };
  }
};

const validarSenha = (senha) => {
  if (senha.length < 8 || senha.length > 26) {
    return {
      valido: false,
      texto: "A senha precisa ter entre 8 e 26 digitos.",
    };
  } else {
    return { valido: true, texto: "" };
  }
};

const validarNome = (nome) => {
  if (nome.length < 2 || nome.length > 30) {
    return {
      valido: false,
      texto: "O nome precisa ter entre 2 e 30 caracteres.",
    };
  }
  return { valido: true, texto: "" };
};

export { validarCPF, validarSenha, validarNome };
