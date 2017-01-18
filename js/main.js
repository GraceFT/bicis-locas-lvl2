//Creando nodos
function nameAvise(){
var nameCont = document.getElementById("name");
nameSpan.innerHTML ="Debes ingresar tu Nombre";
nameCont.parentNode.appendChild(nameSpan);
}
function apellAvise(){
var apellCont=document.getElementById("lastname");
apellSpan.innerHTML="Debes ingresar tu Apellido";
apellCont.parentNode.appendChild(apellSpan);
}
function emailAvise(){
var emailCont = document.getElementById("input-email");
emailSpan.innerHTML="Verifique su e-mail";
emailCont.parentNode.appendChild(emailSpan);
}
function passAvise(){
var passCont = document.getElementById("input-password");
passSpan.innerHTML="La contraseña debe tener al menos 6 caracteres";
passCont.parentNode.appendChild(passSpan);
}
function passAvise2(){
var passCont2 = document.getElementById("input-password");
passSpan2.innerHTML="La contraseña no debe ser igual a 123456 o password";
passCont2.parentNode.appendChild(passSpan2);
}
function opcionAvise(){
var opcionCont=document.getElementsByClassName("form-control")[4];
opcionSpan.innerHTML="Debes seleccionar al menos un tipo de bici";
opcionCont.parentNode.appendChild(opcionSpan);
}


//Nodos mencionados
var nameSpan = document.createElement("span");
var apellSpan = document.createElement("span");
var emailSpan = document.createElement("span");
var passSpan = document.createElement("span");
var opcionSpan = document.createElement("span");
var passSpan2 = document.createElement("span");

//Validando Formulario
function validateForm(){
//Obtener los valores
    var nombre = document.getElementById("name").value;
    var apellido = document.getElementById("lastname").value;
    var correo = document.getElementById("input-email").value;
    var contra =document.getElementById("input-password").value;
    var indice = document.getElementsByClassName("form-control")[4].value;
  
//Nodos de aviso    
    if (nombre ===""||apellido===""||correo===""||contra===""||indice==false){
        nameAvise();
        apellAvise();
        emailAvise();
        passAvise();
        opcionAvise();
    }else{
        nameSpan.style.display="none";
        emailSpan.style.display="none";
        passSpan.style.display="none";
        opcionSpan.style.display="none";
    }
//Validar Nombre
    if(!/^[a-zA-Z]*$/.test(nombre)){
       nameAvise();
   }else {
       if(nombre.toLowerCase()){
        document.getElementById("name").value=nombre.charAt(0).toUpperCase() + nombre.slice(1);
        nameSpan.style.display="none";
       }else{
        nameAvise();
       }
    }
//Validar Apellido
    if(!/^[a-zA-Z]*$/.test(apellido)){
       apellAvise();
   }else {
       if(apellido.toLowerCase()){
        document.getElementById("lastname").value=apellido.charAt(0).toUpperCase() + apellido.slice(1);
        apellSpan.style.display="none";
       }else{
        apellAvise();
       }
    }
//Validar Correo    
    if(!/^([a-z]+[a-z1-9._-]*)@{1}([a-z1-9\.]{2,})\.([a-z]{2,3})$/.test(correo)){
        emailAvise();
    }else{
        emailSpan.style.display="none";
    }
//Validar Contrasena     
   if (contra.length<6){
    passAvise();
   }else {
    if(contra=="098754"||contra=="password"||contra=="123456"){
    passAvise2();
    passSpan.style.display="none";
    }else{
        passSpan.style.display="none";
        passSpan2.style.display="none";
    }   
}
//Validar Bicis        
    if( indice == null || indice == 0 ){
       opcionAvise();
        return false;
    }else{
        opcionSpan.style.display="none";
        return true;
    }    

}
