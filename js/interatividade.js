// ==================== Alternar modo escuro ====================
const toggleDark = document.getElementById("toggle-dark"); // Botão de dark mode
toggleDark.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode"); // Alterna classe dark-mode
  toggleDark.setAttribute("aria-pressed", document.body.classList.contains("dark-mode")); // Atualiza acessibilidade
});

// ==================== Mostrar/Ocultar Curiosidade ====================
document.querySelectorAll(".toggle-btn").forEach(btn => {
  const c = btn.nextElementSibling; // Elemento da curiosidade
  btn.setAttribute("aria-expanded", "false"); // Inicializa acessibilidade
  c.hidden = true; // Começa oculto

  btn.addEventListener("click", () => {
    const exp = btn.getAttribute("aria-expanded") === "true"; // Estado atual
    btn.setAttribute("aria-expanded", !exp); // Alterna acessibilidade
    c.hidden = exp; // Alterna visibilidade
    btn.textContent = exp ? "Mostrar Curiosidade" : "Ocultar Curiosidade"; // Alterna texto
  });
});
