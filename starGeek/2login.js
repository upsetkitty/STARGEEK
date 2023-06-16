const formulario = document.getElementById("formulario");
const msg = document.querySelector(".mensagem")
const email = document.getElementById("email");
const senha = document.getElementById("senha");

formulario.onsubmit = (evento) => {
  evento.preventDefault();

  if (email.value === "") {
    msg.innerHTML = "<h1>Digite seu e-mail</h1>";
    email.focus();
    return;
  }

  if (senha.value === "") {
    msg.innerHTML = "<h1>Digite sua senha!</h1>";
    senha.focus();
    return;
  }

  let dados = JSON.parse(localStorage.getItem("bd")) || [];
  const usuario = dados.find(elemento => elemento.emailcliente === email.value && elemento.senhacliente === senha.value);
  if (usuario) {
    msg.innerHTML = "<h1>Login realizado com sucesso</h1>";
    sessionStorage.setItem("email", email.value);
   
    window.location.assign("4catalogo.html");
  } else {
    msg.innerHTML = "<h1>Usuário ou senha incorretos</h1>";
  }
};
