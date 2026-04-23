import { analytics, auth } from "./firebaseConfig";
import {
  ref,
  set,
  push,
  onValue,
  get,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const refUsuario = ref(analytics, "./usuarios");

createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    console.log(userCredential.user);
});

signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    console.log(userCredential.user);
});

async function salvar(usuario, senha) {
  // Salvar usuários
  const Usuario = push(refUsuario);
  try {
    await set(Usuario, {
      usuario: usuario,
      senha: senha,
      estado: "comprador",
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
  let vendedor = false;
  const data = usuariosDatabase();

  for (const key in data) {
    if (data[key].usuario === usuario && data[key].senha === senha) {
      alert("Usuário encontrado");
      encontrou = true;
      if (data[key].estado === "vendedor") {
        vendedor = true;
      }
    }
  }
  let resposta = [encontrou, vendedor];
  return resposta;
}

export { salvar, usuariosDatabase, encontrarUsuario };
