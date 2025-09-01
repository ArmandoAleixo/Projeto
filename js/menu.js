// =========================
// Menu Hambúrguer e Scroll Suave
// =========================

// Seleção de elementos
const ham = document.getElementById("hamburger");
const nav = document.getElementById("nav-menu");

// Configura acessibilidade inicial
ham.setAttribute("aria-label", "Abrir menu");
ham.setAttribute("aria-expanded", "false");

// Toggle do menu ao clicar no hambúrguer
ham.addEventListener("click", () => {
  const exp = ham.getAttribute("aria-expanded") === "true";
  ham.setAttribute("aria-expanded", !exp);
  ham.setAttribute("aria-label", exp ? "Abrir menu" : "Fechar menu");
  nav.classList.toggle("active");
  ham.classList.toggle("open");
});

// Scroll suave e fechamento do menu ao clicar em um link
document.querySelectorAll(".nav-menu a").forEach(a => {
  a.addEventListener("click", e => {
    e.preventDefault(); // evita salto instantâneo
    const target = document.querySelector(a.getAttribute("href")); // pega a seção
    target.scrollIntoView({ behavior: "smooth" }); // scroll suave

    // Fecha menu mobile
    nav.classList.remove("active");
    ham.setAttribute("aria-expanded", "false");
    ham.setAttribute("aria-label", "Abrir menu");
  });
});

// Destaca a seção ativa conforme rola a página
const sections = document.querySelectorAll("main section, header, footer");
window.addEventListener("scroll", () => {
  const scrollPos = window.scrollY + window.innerHeight / 2;

  sections.forEach(sec => {
    const top = sec.offsetTop;
    const bottom = top + sec.offsetHeight;
    const link = document.querySelector(`.nav-menu a[href="#${sec.id}"]`);

    if (link) {
      if (scrollPos >= top && scrollPos < bottom) {
        link.classList.add("active-section");
      } else {
        link.classList.remove("active-section");
      }
    }
  });
});
