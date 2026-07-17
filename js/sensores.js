/* =========================================================
   sensores.js
   Interatividade da página "Catálogo de Sensores":
     1) Busca por nome do sensor (campo de texto)
     2) Filtro por categoria (botões)
     3) Atualização do contador de resultados
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const campoBusca = document.getElementById("buscaSensor");
    const botoesFiltro = document.querySelectorAll(".filtro-btn");
    const cards = document.querySelectorAll(".sensor-card");
    const contador = document.getElementById("contadorResultados");
    const semResultados = document.getElementById("semResultados");

    // Se os elementos do catálogo não existirem nesta página, encerra
    if (!campoBusca || !cards.length) return;

    let categoriaAtual = "todos";

    /* ---------------------------------------------------
       Aplica busca + filtro de categoria simultaneamente
    --------------------------------------------------- */
    function aplicarFiltros() {
        const termo = campoBusca.value.trim().toLowerCase();
        let visiveis = 0;

        cards.forEach(function (card) {
            const nome = card.getAttribute("data-nome");
            const categoria = card.getAttribute("data-categoria");

            const combinaBusca = nome.includes(termo);
            const combinaCategoria = (categoriaAtual === "todos") || (categoria === categoriaAtual);

            if (combinaBusca && combinaCategoria) {
                card.style.display = "block";
                visiveis++;
            } else {
                card.style.display = "none";
            }
        });

        contador.textContent = `Mostrando ${visiveis} de ${cards.length} sensores`;
        semResultados.classList.toggle("show", visiveis === 0);
    }

    /* ---------------------------------------------------
       Eventos: digitação na busca
    --------------------------------------------------- */
    campoBusca.addEventListener("input", aplicarFiltros);

    /* ---------------------------------------------------
       Eventos: clique nos botões de categoria
    --------------------------------------------------- */
    botoesFiltro.forEach(function (botao) {
        botao.addEventListener("click", function () {
            categoriaAtual = botao.getAttribute("data-categoria");

            botoesFiltro.forEach((b) => b.classList.remove("active"));
            botao.classList.add("active");

            aplicarFiltros();
        });
    });
});
