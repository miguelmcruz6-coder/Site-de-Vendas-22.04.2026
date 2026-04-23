import { salvar, usuariosDatabase, encontrarUsuario } from "./crud.js";

const usuario = document.getElementById("usuario")

const login = document.getElementById("login");
const inicio = document.getElementById("inicio");
const compradorAba = document.getElementById("comprador");
const vendedorAba = document.getElementById("vendedor");

const nomeUsuario = document.getElementById("nomeUsuario");
const virarVendedor = document.getElementById("virarVendedor");

const loginBtn = document.getElementById("loginBtn");
const cadastroBtn = document.getElementById("cadastroBtn");

loginBtn.addEventListener("click", logar);
cadastroBtn.addEventListener("click", cadastrar);

let vendedor = false;
let logado = false;

async function logar() {
  const emailInput = document.getElementById("emailInput").value;
  const senhaInput = document.getElementById("senhaInput").value;
  let salvamento = await encontrarUsuario(emailInput, senhaInput);

  if (salvamento[0]) {
    if (salvamento[1] === "vendedor") {
      vendedor = true;
    }

    alert("Logado com sucesso");
    reset();
    inicio.style.display = "block";
    logado = true;
  } else {
    alert("Usuário inexistente");
    emailInput.value = "";
    senhaInput.value = "";
  }
}

async function cadastrar() {
  const emailInput = document.getElementById("emailInput").value;
  const senhaInput = document.getElementById("senhaInput").value;
  let salvamento = await encontrarUsuario(emailInput, senhaInput);

  if (salvamento[0]) {
    alert("Usuário existente");
    emailInput.value = "";
    senhaInput.value = "";
  } else {
    alert("Cadastrado com sucesso");
  }
}

function reset() {
  // Resetar todas as telas
  login.style.display = "none";
  compradorAba.style.display = "block";
  if (vendedor) {
    vendedorAba.style.display = "block";
    virarVendedor.innerHTML = "";
  } else {
    vendedorAba.style.display = "none";
  }
  inicio.style.display = "none"
  // section.style.display = "none"
}
