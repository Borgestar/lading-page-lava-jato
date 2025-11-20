// ===========================
// ANIMAÇÃO AO ROLAR (Scroll Reveal)
// ===========================
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

// ===========================
// MENU HAMBÚRGUER
// ===========================
const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    menu.classList.toggle("active");
  });
  
  // Fecha ao clicar em um link
  const links = menu.querySelectorAll("a");
  links.forEach(link => {
    link.addEventListener("click", () => {
      menu.classList.remove("active");
    });
  });
}

// ===========================
// HEADER COM EFEITO SCROLL
// ===========================
window.addEventListener("scroll", () => {
  const header = document.getElementById("header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// ===========================
// FORMULÁRIO WHATSAPP (MANTIDO)
// ===========================
const form = document.querySelector(".form-agendamento");
if (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const nome = document.getElementById("nome").value.trim();
    const telefone = document.getElementById("telefone").value.trim();
    const veiculo = document.getElementById("veiculo").value;
    const servico = document.getElementById("servico").value;
    const data = document.getElementById("data").value;

    const mensagem = `*Novo Agendamento* 🚗\n\n👤 *Nome:* ${nome}\n📱 *Tel:* ${telefone}\n🚘 *Veículo:* ${veiculo}\n🛠 *Serviço:* ${servico}\n📅 *Data:* ${data}`;
    
    const numeroWhatsApp = "5521987288138"; 
    window.open(`https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`, "_blank");
  });
}
