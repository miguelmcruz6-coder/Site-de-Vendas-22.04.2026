import { db } from "./firebaseConfig.js";
import {
  ref,
  set,
  get,
  child,
  update,
} from "https://www.gstatic.com/firebasejs/12.11.0/firebase-database.js";

// SALVAR USUÁRIO NO DATABASE (após cadastro no Auth)
export async function salvarUsuario(uid, email) {
  await set(ref(db, "usuarios/" + uid), {
    email: email,
    tipo: "comprador",
  });
}

// BUSCAR DADOS DO USUÁRIO
export async function buscarUsuario(uid) {
  const snapshot = await get(child(ref(db), "usuarios/" + uid));

  if (snapshot.exists()) {
    return snapshot.val();
  } else {
    return null;
  }
}

// VIRAR VENDEDOR
export async function virarVendedorDB(uid) {
  await update(ref(db, "usuarios/" + uid), {
    tipo: "vendedor",
  });
}
