import { auth } from "./firebaseConfig.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.11.0/firebase-auth.js";

import { salvarUsuario, buscarUsuario, virarVendedorDB } from "./crud.js";

// ELEMENTOS
const login = document.getElementById("login");
const inicio = document.getElementById("inicio");
const compradorAba = document.getElementById("comprador");
const vendedorAba = document.getElementById("vendedor");
const nomeUsuario = document.getElementById("nomeUsuario");
const virarVendedor = document.getElementById("virarVendedor");

const loginBtn = document.getElementById("loginBtn");
const cadastroBtn = document.getElementById("cadastroBtn");

let vendedor = false;

// EVENTOS
loginBtn.addEventListener("click", logar);
cadastroBtn.addEventListener("click", cadastrar);

// CADASTRAR
async function cadastrar() {
  const email = document.getElementById("emailInput").value;
  const senha = document.getElementById("senhaInput").value;

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
    await salvarUsuario(userCredential.user.uid, email);
    alert("Cadastrado com sucesso! Agora faça login.");
  } catch (erro) {
    alert(erro.message);
  }
}

// LOGIN
async function logar() {
  const email = document.getElementById("emailInput").value;
  const senha = document.getElementById("senhaInput").value;

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, senha);
    await carregarUsuario(userCredential.user.uid);
    window.location.href = "index2.html"
  } catch (erro) {
    alert("Erro no login: " + erro.message);
  }
}

// AO RECARREGAR A PÁGINA
onAuthStateChanged(auth, (user) => {
  if (user) {
    carregarUsuario(user.uid);
  }
});

// CARREGA DADOS DO USUÁRIO
async function carregarUsuario(uid) {
  const dados = await buscarUsuario(uid);

  if (!dados) return;

  vendedor = dados.tipo === "vendedor";

  nomeUsuario.innerText = dados.email;
  resetTelas();
  inicio.style.display = "block";
}

// VIRAR VENDEDOR
virarVendedor.addEventListener("click", () => {
  virarVendedorDB(auth.currentUser.uid);
  alert("Agora você é vendedor!");
  location.reload();
});

// CONTROLE DE TELAS
function resetTelas() {
  login.style.display = "none";
  compradorAba.style.display = "block";
  vendedorAba.style.display = vendedor ? "block" : "none";
}