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
       2) DROPDOWN "Robôs"
       No mobile funciona por clique (acordeão).
       No desktop, o CSS já mostra ao passar o mouse,
       mas mantemos o clique como reforço de acessibilidade
       (funciona também por toque/teclado).
    --------------------------------------------------- */
    const dropdown = document.querySelector(".dropdown");
    const dropdownToggle = document.querySelector(".dropdown-toggle");

    if (dropdown && dropdownToggle) {
        dropdownToggle.addEventListener("click", function (event) {
            event.preventDefault();
            dropdown.classList.toggle("open");
        });

        // fecha o dropdown se o usuário clicar fora dele
        document.addEventListener("click", function (event) {
            if (!dropdown.contains(event.target)) {
                dropdown.classList.remove("open");
            }
        });
    }

    /* ---------------------------------------------------
       3) SISTEMA DE ABAS (TABS) das páginas de robôs
       Cada botão ".tab-btn" possui um atributo data-tab
       que corresponde ao id do painel ".tab-content"
       que deve ser exibido.
    --------------------------------------------------- */
    const tabButtons = document.querySelectorAll(".tab-btn");
    const tabContents = document.querySelectorAll(".tab-content");

    tabButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            const targetId = button.getAttribute("data-tab");

            // remove "active" de todos os botões e painéis
            tabButtons.forEach((btn) => btn.classList.remove("active"));
            tabContents.forEach((panel) => panel.classList.remove("active"));

            // ativa apenas o botão clicado e o painel correspondente
            button.classList.add("active");
            const targetPanel = document.getElementById(targetId);
            if (targetPanel) {
                targetPanel.classList.add("active");
            }
        });
    });

});
