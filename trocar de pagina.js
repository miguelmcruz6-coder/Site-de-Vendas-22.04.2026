loginBtn.addEventListener("click", () => {
  const email = document.getElementById("emailInput").value;
  const senha = document.getElementById("senhaInput").value;

  if (email && senha) {
    window.location.href = "pagina2.html";
  } else {
    alert("Preencha todos os campos!");
  }
});