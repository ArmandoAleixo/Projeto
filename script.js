// Alternar modo escuro
document.getElementById("toggle-dark").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Mostrar/ocultar curiosidade
document.querySelectorAll(".toggle-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const curiosidade = btn.nextElementSibling;
    if (curiosidade.style.display === "block") {
      curiosidade.style.display = "none";
      btn.textContent = "Mostrar Curiosidade";
    } else {
      curiosidade.style.display = "block";
      btn.textContent = "Ocultar Curiosidade";
    }
  });
});
