document.getElementById("botaoApp").addEventListener("click", () => {
  alert("O aplicativo ainda está em desenvolvimento e será lançado em breve!");
});

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const alvo = document.querySelector(link.getAttribute("href"));
    alvo.scrollIntoView({ behavior: "smooth" });
  });
});

document.getElementById("formContato").addEventListener("submit", e => {
  e.preventDefault();
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const mensagem = document.getElementById("mensagem").value;

  const mailtoLink = `mailto:firehelpcomunidade@gmail.com?subject=Mensagem%20de%20${encodeURIComponent(nome)}&body=Nome:%20${encodeURIComponent(nome)}%0AEmail:%20${encodeURIComponent(email)}%0AMensagem:%20${encodeURIComponent(mensagem)}`;
  window.location.href = mailtoLink;
});
