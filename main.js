
import { salvar, usuariosDatabase } from "./crud.js"


const login = document.getElementById("login")
const header = document.getElementById("header")
const inicio = document.getElementById("inicio")

const nomeUsuario = document.getElementById("nomeUsuario")

const loginBtn = document.getElementById("loginBtn")
const cadastroBtn = document.getElementById("cadastroBtn")

loginBtn.addEventListener("click", logar)
cadastroBtn.addEventListener("click", cadastrar)





let logado = false



async function logar(){
    const emailInput = document.getElementById("emailInput").value
    const senhaInput = document.getElementById("senhaInput").value
    let salvamento = encontrarUsuario(emailInput, senhaInput)

    if(salvamento){
        alert("Logado com sucesso")
        reset()
        inicio.style.display = "block"
        logado = true
    } else {
        alert("Usuário inexistente")
        emailInput.value = ""
        senhaInput.value = ""
    }
}

async function cadastrar(){
    const emailInput = document.getElementById("emailInput").value
    const senhaInput = document.getElementById("senhaInput").value
    let salvamento = encontrarUsuario(emailInput, senhaInput)

    if(salvamento){
        alert("Usuário existente")
        emailInput.value = ""
        senhaInput.value = ""
    } else {
        alert("Logado com sucesso")
    }
}




























function reset(){ // Resetar todas as telas
    login.style.display = "none"
    // section.style.display = "none"
}
