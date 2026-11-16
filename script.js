const botoesCategorias = document.querySelectorAll("header nav a");
const secoesCategorias = document.querySelectorAll("main section");

// Esconder todas as Categorias
secoesCategorias.forEach(function(secao) {
  secao.hidden = true;
});

// Mostrar lanches inicialmente
document.getElementById("lanches").hidden = false;

// Marcar lanches como selecionado inicialmente
botoesCategorias[0].classList.add("ativo");

// Detectar o clique nas Categorias
botoesCategorias.forEach(function(botao) {

  botao.addEventListener("click", function(event) {

    event.preventDefault();

    // Remover a seleção dos outros botões
    botoesCategorias.forEach(function(item) {

      item.classList.remove("ativo");
    });

    // Selecionar o botão clicado
    botao.classList.add("ativo");

    // Descobrir qual seção corresponde ao botão
    const destino = botao.getAttribute("href");
    const secaoSelecionada = document.querySelector(destino);

    // Esconder todas as seções
    secoesCategorias.forEach(function(secao) {
      secao.hidden = true;
    });

    // Mostrar somente a seção selecionada
    secaoSelecionada.hidden = false;
  
  });

});