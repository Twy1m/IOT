/* =========================================================
   script.js
   Script principal do site "Robôs Industriais & IoT".
   Responsável por:
     1) Abrir/fechar o menu de navegação no mobile (hambúrguer)
     2) Abrir/fechar o submenu "Robôs" (dropdown)
     3) Controlar o sistema de abas (tabs) nas páginas de
        cada tipo de robô (Especificações, Aplicações,
        Integração IoT, Modelos comerciais)
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* ---------------------------------------------------
       1) MENU MOBILE (hambúrguer)
       Alterna a classe "open" no container de navegação,
       que por sua vez controla o max-height via CSS.
    --------------------------------------------------- */
    const menuToggle = document.getElementById("menuToggle");
    const navigation = document.getElementById("navigation");

    if (menuToggle && navigation) {
        menuToggle.addEventListener("click", function () {
            const isOpen = navigation.classList.toggle("open");
            // atualiza o atributo de acessibilidade
            menuToggle.setAttribute("aria-expanded", isOpen);
        });
    }

    /* ---------------------------------------------------
       2) DROPDOWNS do menu ("Robôs Industriais" e
       "Sensores IoT"). A página pode ter mais de um
       dropdown, então cada um recebe seu próprio listener.
       No mobile funciona por clique (acordeão). No desktop
       o clique também funciona como reforço de acessibilidade
       (toque/teclado).
    --------------------------------------------------- */
    const dropdowns = document.querySelectorAll(".dropdown");

    dropdowns.forEach(function (dropdown) {
        const dropdownToggle = dropdown.querySelector(".dropdown-toggle");
        if (!dropdownToggle) return;

        dropdownToggle.addEventListener("click", function (event) {
            event.preventDefault();
            const estavaAberto = dropdown.classList.contains("open");
            // fecha todos os outros dropdowns antes de abrir este
            dropdowns.forEach((d) => d.classList.remove("open"));
            if (!estavaAberto) {
                dropdown.classList.add("open");
            }
        });
    });

    // fecha qualquer dropdown aberto se o usuário clicar fora dele
    document.addEventListener("click", function (event) {
        dropdowns.forEach(function (dropdown) {
            if (!dropdown.contains(event.target)) {
                dropdown.classList.remove("open");
            }
        });
    });

    /* ---------------------------------------------------
       3) SISTEMA DE ABAS (TABS) das páginas de robôs,
       sensores e Arduino.
       Cada botão ".tab-btn" possui um atributo data-tab
       que corresponde ao id do painel ".tab-content"
       que deve ser exibido. O sistema é escopado por
       ".tabs-section", pois uma mesma página (ex.: Arduino)
       pode ter mais de um grupo de abas independente.
    --------------------------------------------------- */
    const secoesDeAbas = document.querySelectorAll(".tabs-section");

    secoesDeAbas.forEach(function (secao) {
        const tabButtons = secao.querySelectorAll(".tab-btn");
        const tabContents = secao.querySelectorAll(".tab-content");

        tabButtons.forEach(function (button) {
            button.addEventListener("click", function () {
                const targetId = button.getAttribute("data-tab");

                // remove "active" apenas dos botões/painéis desta seção
                tabButtons.forEach((btn) => btn.classList.remove("active"));
                tabContents.forEach((panel) => panel.classList.remove("active"));

                // ativa apenas o botão clicado e o painel correspondente
                button.classList.add("active");
                const targetPanel = secao.querySelector("#" + CSS.escape(targetId));
                if (targetPanel) {
                    targetPanel.classList.add("active");
                }
            });
        });
    });

});
