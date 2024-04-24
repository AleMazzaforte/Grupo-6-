
/*   **************** Header ***************************
document.addEventListener("DOMContentLoaded", function() {
    const header = document.createElement("header");
    header.setAttribute("id", "header");
    header.innerHTML = `
        <div></div>
        <h1 class="header1">Grupo 6</h1>
        <nav id="nav1">
            <a href="index.html" id="a1" class="link">Quienes somos</a>
            <a href="productos.html#productos" id="a2" class="link">Productos</a>
            <a href="" id="a3" class="link">Contacto</a>
            <a href="" id="a4" class="link">Trabaja con nosotros</a>
        </nav>
    `;
    document.body.insertBefore(header, document.body.firstChild);
});
*/
//********************************** CONTROLES DE INPUTS CLIENTES *********************************
//**** VARIABLES ******
let nombre;
let cuit;
let dni;
let email;
let telefono;
let clienteGuardado = document.getElementById("clienteGuardado");


function submit() {
    // nombre = document.querySelector(".nombre").value;
    // cuit = document.querySelector(".cuit").value;
    // dni = document.querySelector(".dni").value;
    // email = document.querySelector(".email").value;
    // telefono = document.querySelector(".telefono").value;

    console.log(nombre)
    // if ((nombre.length >= 3 && cuit > 0 && email.length >= 3 && telefono.length >= 0) && (dni.length > 0 || cuit > 0)){
    //     clienteGuardado.innerHTML = `Se guardó el cliente ${nombre} <br> Sus datos son: <br> ${cuit}<br>${dni}<br>${email}<br>${telefono}`
    // }
    let checkboxes = document.querySelectorAll('#checkbox input[type="checkbox"]');

    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            console.log(`Checkbox ${checkbox.parentNode.textContent.trim()} marcado.`);
        }
    });
    
}