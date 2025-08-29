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

// Voltar ao topo
const btnTopo = document.getElementById("voltar-topo");
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    btnTopo.style.display = "block";
  } else {
    btnTopo.style.display = "none";
  }
});

btnTopo.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Validação e envio do formulário
const formContato = document.getElementById("form-contato");
const formStatus = document.getElementById("form-status");

formContato.addEventListener("submit", (e) => {
  e.preventDefault(); 

  const nome = formContato.nome.value.trim();
  const email = formContato.email.value.trim();
  const mensagem = formContato.mensagem.value.trim();

  formStatus.textContent = "";
  formStatus.className = "";

  if (!nome || !email || !mensagem) {
    formStatus.textContent = "⚠️ Por favor, preencha todos os campos.";
    formStatus.classList.add("error");
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    formStatus.textContent = "⚠️ Por favor, insira um e-mail válido.";
    formStatus.classList.add("error");
    return;
  }

  formStatus.textContent = "✅ Mensagem enviada com sucesso! Obrigado.";
  formStatus.classList.add("success");

  formContato.reset();
});


// Menu hambúrguer
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
    hamburger.classList.toggle("open");
});

// Fechar menu ao clicar em um link
document.querySelectorAll(".nav-menu a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});

