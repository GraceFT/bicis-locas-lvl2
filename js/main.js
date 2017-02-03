function validateForm(){
validateName();
validateLastName();
validateEmail();
validatePassword();
validateSelector();
}
//Creating an span 
function createSpan(_id,message){
    var element= document.getElementById(_id);
    if (element.nextSibling==null){
    var span = document.createElement("span");
    span.innerHTML = message;
    element.parentNode.appendChild(span);
    }else{
       if(element.nextSibling.tagName=="SPAN"){
           element.nextSibling.innerHTML=message;
       } else{
           element.parentNode.removeChild(element.nextSibling);
           var span = document.createElement("span");
            span.innerHTML = message;
            element.parentNode.appendChild(span);}
    }
}
//Eliminate span 
function removeSpan(_id){
    var element = document.getElementById(_id);
    if (element.nextSibling!=null){
     element.parentNode.removeChild(element.nextSibling);
    }
}
//Create a message
function upperCaseName(_id){
    var element=document.getElementById(_id);
    element.value = element.value.charAt(0).toUpperCase() + element.value.slice(1); 
}

//validating name
function validateName(){
    var valName = document.getElementById("name").value;
    if (valName!= ""){
        upperCaseName("name"); 
        if(/([0-9]+)/.test(valName)){
        createSpan("name","Solo se aceptan letras");
        }else{
        removeSpan("name");}    
    }else{
        createSpan("name","Debes ingresar tu nombre");}
}
//validating lastname
function validateLastName(){
    var valLastName = document.getElementById("lastname").value;
    if (valLastName!= ""){
        upperCaseName("lastname"); 
        if(/([0-9]+)/.test(valLastName)){
        createSpan("lastname","Escribe correctamente, solo letras");
        }else{
        removeSpan("lastname");}    
    }else{
        createSpan("lastname","Debes ingresar tu Apellido");}
}
//validating email
function validateEmail(){
    var valEmail = document.getElementById("input-email").value;
    var text=/^([a-z]+[a-z1-9._-]*)@{1}([a-z1-9\.]{2,})\.([a-z]{2,3})$/;
    if(!text.test(valEmail)){
        createSpan("input-email","Verifique su correo");
    }else{
        if(valEmail!="" && text.test(valEmail)){
        removeSpan("input-email");}
    }
}
//validating password
function validatePassword(){
    var valPassword = document.getElementById("input-password").value;
    if(valPassword=="098754"||valPassword=="password"||valPassword=="123456"||valPassword.length<=6){
            createSpan("input-password","Ingrese correctamente su contraseña");
        }else{
            removeSpan("input-password");}   
}
//validating options about bycicles
function validateSelector(){
    var indice=document.getElementById("options");
    if( indice.value == null || indice.value == 0 ){
       createSpan("options","Selecciona una bicicleta");
    }else{
        removeSpan("options");
    }  
}