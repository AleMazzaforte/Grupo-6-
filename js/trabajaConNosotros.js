//********************************** CONTROLES DE INPUTS SOCIOS *********************************
//**** VARIABLES ******
let nombreSocio;
let dniSocio;
let emailSocio;
let cv = true;
let telefonoSocio;
let direccionSocio;
let socioGuardado = document.getElementById("socioGuardado");

function enviarFormSocio() {
    nombreSocio = document.querySelector("#nombreSocio").value;
    dniSocio = document.querySelector("#dniSocio").value;
    emailSocio = document.querySelector("#emailSocio").value;
    cv = document.querySelector("#cv").value;
    telefonoSocio = document.querySelector("#telefonoSocio").value;
    direccionSocio = document.querySelector("#direccionSocio").value;
    
    function validarCuit() {
        // Validación simple de longitud
        if (dniSocio.length == 13) {
            return true;
        }
        alert("El CUIT ingresado no es válido");
        return false;
    }
    

    if (nombreSocio.length >= 3 && emailSocio.length >= 3 && telefonoSocio.length >= 3 && dniSocio.length >= 3 && direccionSocio.length >= 3) {
        socioGuardado.innerHTML = `Se guardó el cliente ${nombreSocio} <br> Sus datos son: <br> ${dniSocio}<br>${emailSocio}<br>${telefonoSocio}<br>${direccionSocio}<br>`;

    } else if (nombreSocio.length <= 3) {
        socioGuardado.innerHTML = `El nombre es inválido.`;
    } else if (emailSocio.length <=3) {
        socioGuardado.innerHTML = `El email es inválido.`;
    }else if (telefonoSocio.length <= 3) {
        socioGuardado.innerHTML = `El número de teléfono es inválido.`;
    }else if (dniSocio.length <= 3) {
        socioGuardado.innerHTML = `El D.N.I. es inválido.`;
    }else if (direccionSocio.length <= 3) {
        socioGuardado.innerHTML = `La dirección es inválida.`;
    }
    
    if (cv != "") {
        socioGuardado.insertAdjacentHTML("beforeend", "Hemos recibido el curriculum")
    }else {
        socioGuardado.insertAdjacentHTML("beforeend", "No hemos recibido el curriculum, por favor envíalo a la brevedad.")
    }

}
