import { analytics } from "./firebaseConfig";

import {
  ref,
  set,
  push,
  onValue,
  get,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

const refUsuario = ref(analytics, "./usuarios");

async function salvar(usuario, senha) { // Salvar usuários
  const Usuario = push(refUsuario);
  try {
    await set(Usuario, {
      usuario: usuario,
      senha: senha,
    });
    return true;
  } catch (error) {
    console.error("Erro ao salvar usuário", error);
    return false;
  }
}

function usuariosDatabase() {
  return new Promise((resolve) => {
    onValue(
      refUsuario,
      (snapshot) => {
        resolve(snapshot.val());
      },
      { onlyOnce: true }
    );
  });
}

async function encontrarUsuario(usuario, senha) {
  let encontrou = false;
  const data = usuariosDatabase();

  for (const key in data) {
    if (data[key].usuario === usuario && data[key].senha === senha) {
      alert("Usuário encontrado");
      encontrou = true;
    }
  }
  return encontrou;
}

export { salvar, usuariosDatabase, encontrarUsuario };
