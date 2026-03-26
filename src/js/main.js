// Inicializa os ícones Lucide
lucide.createIcons();

// BOTÃO VOLTAR AO TOPO
const backToTop = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) { // Mostra botão ao rolar 300px
    backToTop.classList.remove("hidden");
  } else {
    backToTop.classList.add("hidden");
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// BOTÃO EXPORTAR PDF
const exportPdfBtn = document.getElementById("export-pdf");

exportPdfBtn.addEventListener("click", () => {
  window.print(); // Simples e funciona para gerar PDF da página
});