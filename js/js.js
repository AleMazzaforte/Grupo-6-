document.addEventListener("DOMContentLoaded", function() {
    const header = document.createElement("header");
    header.setAttribute("id", "header");
    header.innerHTML = `
        <div></div>
        <h1 class="header1">Grupo 6</h1>
        <nav id="nav1">
            <a href="" id="a1" class="link">Quienes somos</a>
            <a href="" id="a2" class="link">Productos</a>
            <a href="" id="a3" class="link">Contacto</a>
            <a href="" id="a4" class="link">Trabaja con nosotros</a>
        </nav>
    `;
    document.body.insertBefore(header, document.body.firstChild);
});
