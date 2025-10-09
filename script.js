// ===========================
// FORMULÁRIO DE AGENDAMENTO
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


    const mensagem = `*Novo contato de agendamento* 🚗

👤 Nome: ${nome}
📱 Telefone: ${telefone}
🚘 Veículo: ${veiculo}
🛠 Serviço: ${servico}
📅 Data: ${data}

Gostaria de saber os valores e se há horário disponível.`;

    const numeroWhatsApp = "5521987288138"; // seu número com DDI 55
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;

    window.open(url, "_blank");
  });
}

// ===========================
// MENU HAMBÚRGUER
// ===========================
const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    menu.classList.toggle("active");
  });


// Fecha o menu automaticamente ao clicar em um link
  const links = menu.querySelectorAll("a");
  links.forEach(link => {
    link.addEventListener("click", () => {
      menu.classList.remove("active");
    });
  });
}
