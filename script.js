const botaoMenu = document.getElementById("botao-menu");
const menu = document.getElementById("menu");
const linksMenu = document.querySelectorAll(".menu a");

botaoMenu.addEventListener("click", function () {
    menu.classList.toggle("ativo");

    const menuAberto = menu.classList.contains("ativo");

    botaoMenu.setAttribute(
        "aria-label",
        menuAberto ? "Fechar menu" : "Abrir menu"
    );

    botaoMenu.innerHTML = menuAberto
        ? '<i class="fa-solid fa-xmark"></i>'
        : '<i class="fa-solid fa-bars"></i>';
});

linksMenu.forEach(function (link) {
    link.addEventListener("click", function () {
        menu.classList.remove("ativo");

        botaoMenu.setAttribute("aria-label", "Abrir menu");

        botaoMenu.innerHTML =
            '<i class="fa-solid fa-bars"></i>';
    });
});