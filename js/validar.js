function validar(){
    var nombre, apellido, nickname, password, email, edad, descripcion, expresion;
    nombre = document.getElementById("Nombre").value;
    apellido = document.getElementById("Apellido").value;
    nickname = document.getElementById("Nickname").value;
    password = document.getElementById("Password").value;
    email = document.getElementById("Email").value;
    edad = document.getElementById("Edad").value;
    descripcion = document.getElementById("Descripcion").value;
    expresion = /\w+@\w+\.+[a-z]/;

    if(nombre === "" || apellido === "" || nickname === "" || password === "" || email === "" || edad === "" || descripcion === ""){
        alert("Hace falta información, todos los campos son obligatorios");
        return false;
    }
    else if(nombre.length>30){
        alert("Nombre demasiado largo");
        return false;
    }
    else if(apellido.length>50){
        alert("Apellido demasiado largo");
        return false;
    }
    else if(nickname.length>30){
        alert("Nickname demasiado largo");
        return false;
    }
    else if(password.length<8){
        alert("La contraseña debe contener mínimo 8 caracteres");
        return false;
    }
    else if(edad.length>2){
        alert("Coloca tu edad real");
        return false;
    }
    else if(descripcion.length>300){
        alert("La descripción es de máximo 300 caracteres");
        return false;
    }
    else if(isNaN(edad)){
        alert("Edad incorrecta, ingresa solo números.");
        return false;
    }                
    else if(!expresion.test(email)){
        alert("No ingresaste un e-mail válido");
        return false;
    }
}