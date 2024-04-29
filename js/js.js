
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
let direccion;
let clienteGuardado = document.getElementById("clienteGuardado");

function submit() {
    nombre = document.querySelector(".nombre").value;
    dni = document.querySelector("#dni").value;
    email = document.querySelector("#email").value;
    telefono = document.querySelector("#telefono").value;
    direccion = document.querySelector("#direccion").value;
    
    function validarCuit() {
        // Validación simple de longitud
        if (dni.length == 13) {
            return true;
        }
        alert("El CUIT ingresado no es válido");
        return false;
    }

    if ((document.querySelector("#checkboxCuit").checked && validarCuit()) || document.querySelector("#checkboxDni").checked) {

        if (nombre.length >= 3 && email.length >= 3 && telefono.length >= 3 && dni.length >= 3 && direccion.length >= 3) {
            clienteGuardado.innerHTML = `Se guardó el cliente ${nombre} <br> Sus datos son: <br> ${cuit}<br>${dni}<br>${email}<br>${telefono}`;
        } else if (nombre.length <= 3) {
            clienteGuardado.innerHTML = `El nombre es inválido.`;
        } else if (email.length <=3) {
            clienteGuardado.innerHTML = `El email es inválido.`;
        }else if (telefono.length <= 3) {
            clienteGuardado.innerHTML = `El número de teléfono es inválido.`;
        }else if (dni.length <= 3) {
            clienteGuardado.innerHTML = `El D.N.I. es inválido.`;
        }else if (direccion.length <= 3) {
            clienteGuardado.innerHTML = `La dirección es inválida.`;
        }
    }
}



