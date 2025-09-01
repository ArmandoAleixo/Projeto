// ==================== Voltar ao Topo ====================
const btnTopo = document.getElementById("voltar-topo"); // Botão voltar ao topo
btnTopo.setAttribute("aria-label", "Voltar ao topo");

// Mostra/esconde botão dependendo do scroll
window.addEventListener("scroll", () => btnTopo.style.display = window.scrollY > 100 ? "block" : "none");

// Rola suavemente para o topo ao clicar
btnTopo.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

// ==================== Validação e Envio do Formulário ====================
const form = document.getElementById("form-contato"); // Formulário
const status = document.getElementById("form-status"); // Elemento de status

form.addEventListener("submit", e => {
  e.preventDefault(); // Evita envio padrão
  const n = form.nome.value.trim();
  const em = form.email.value.trim();
  const m = form.mensagem.value.trim();

  status.textContent = "";
  status.className = "";

  // Valida campos vazios
  if (!n || !em || !m) {
    status.textContent = "⚠️ Preencha todos os campos.";
    status.classList.add("error");
    return;
  }

  // Valida e-mail
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em)) {
    status.textContent = "⚠️ E-mail inválido.";
    status.classList.add("error");
    return;
  }

  // Mensagem de sucesso
  status.textContent = "✅ Mensagem enviada com sucesso!";
  status.classList.add("success");
  form.reset(); // Limpa campos
});
