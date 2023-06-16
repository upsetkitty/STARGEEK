const formulario = document.getElementById("formulario");
const msg = document.querySelector(".mensagem")
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const senha = document.getElementById("senha");

formulario.onsubmit = (evento) => {
  evento.preventDefault();

  if (nome.value === "") {
    msg.innerHTML = "<h1>Digite seu nome</h1>";
    nome.focus();
    return;
  }

  if (email.value === "") {
    msg.innerHTML = "<h1>Digite seu e-mail</h1>";
    email.focus();
    return;
  }

  if (senha.value === "") {
    msg.innerHTML = "<h1>Digite sua senha</h1>";
    senha.focus();
    return;
  }

  let dados = JSON.parse(localStorage.getItem("bd")) || [];
  const emailExistente = dados.find(elemento => elemento.emailcliente === email.value);
  if (emailExistente) {
    msg.innerHTML = "<h1>E-mail já existe</h1>";
    return;
  }

  dados.push({
    nomecliente: nome.value,
    emailcliente: email.value,
    senhacliente: senha.value,
  });

  localStorage.setItem("bd", JSON.stringify(dados));
  msg.innerHTML = "<h1>Usuário cadastrado com sucesso :D</h1>";
  setTimeout(()=>{
    window.location.assign("2login.html");
  },1000);
  formulario.reset();
};
