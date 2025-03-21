function validarNombre() {
    let nombre = document.getElementById("NombreCompleto").value;
    let Error = document.getElementById('Error');
    

    if (nombre.length < 3) {
       Error.innerHTML = "El nombre debe tener al menos 3 caracteres.";
       return false;
    } 
    else{
        Error.innerHTML = "";
        return true;
    }
}

function validarEmail() {
    let email = document.getElementById("Email").value;
    let errorEmail = document.getElementById("ErrorEmail");

    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        errorEmail.innerHTML = "Ingrese un email válido.";
        return false;

    } else {
        errorEmail.innerHTML = "";
        return true;
 
    }
}

function validarContraseña()
{
    let contraseña = document.getElementById("Contraseña").value;
    let ErrorContraseña = document.getElementById('ErrorContraseña');
    let regexNumero = /[0-9]/;
    let regexLetra = /[a-zA-Z]/;


    if (contraseña.length < 8 ||!regexNumero.test(contraseña) || !regexLetra.test(contraseña)) {
        ErrorContraseña.innerHTML = "Ingrese una contraseña con minimo de 8 caracteres, un numero y una letra";
        return false;

     } 
     else{
         ErrorContraseña.innerHTML = "";
         return true;

     }
}

function ValidarConfirmarContraseña()
{
    let contraseña = document.getElementById("Contraseña").value;
    let ConfirmarContraseña = document.getElementById("ConfirmarContraseña").value;
    let errorConfirmarContraseña = document.getElementById("ErrorConfirmarContraseña");

    if (contraseña != ConfirmarContraseña) {
        errorConfirmarContraseña.innerText = "Las contraseñas no coinciden.";
        
        return false;

    } else {
        errorConfirmarContraseña.innerText = ""; 
        return true;
    }
    
}
let MensajeFinal = document.getElementById("MensajeFinal");
document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault();
    if (!validarNombre() || !validarEmail() || !validarContraseña() || !ValidarConfirmarContraseña()) {
         
        MensajeFinal.innerText = "Error, reintente nuevamente"; 
        MensajeFinal.style.color = "red"; 

    }
    else{
        MensajeFinal.innerText = "¡El formulario se ha enviado correctamente!"
    }
});


