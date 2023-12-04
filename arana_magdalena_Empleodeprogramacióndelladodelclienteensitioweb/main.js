let txtNumero = document.getElementById("Numero");
//let txtFecha = document.getElementById("Fecha");
let txtdia = document.getElementById("dia");
let txtmes = document.getElementById("mes");
let txtanio = document.getElementById("anio");
let txtNumber = document.getElementById("Number");
let txtNombre = document.getElementById("Nombre");
let txtApellido = document.getElementById("Apellido");
let txtDomicilio = document.getElementById("Domicilio");
let txtLugar = document.getElementById("Lugar");
const btn = document.getElementById('button');

let alertValidaciones = document.getElementById("alertValidaciones");




function validarNumeroTarjeta (){
    if(txtNumero.value.length < 16 || txtNumero.value.length > 16){
        return false;
    }
    if(txtNumero.value.length == 0){
        return false;
    }

    if (isNaN(txtNumero.value)) {
        return false;
    }

    if (parseFloat(txtNumero.value <= 0)) {
        return false;
    }

    return true;

}

function validarDia (){
    //let fecha = new Date();
    
    // let regFecha= /^(0[1-9|[1-2]\d|3[01])(\/)(0[1-9]|1[012])\2(\d{4})$/;

    // if( !(txtFecha.value.match(regFecha))){
    //     return false;
    // }

    // // if( !(regFecha.test(txtFecha.value)) ){
    // //     return false;
    // // }


    // if(txtFecha.value == null){
    //     return false;
    // }

    // if(txtFecha.value == 0){
    //     return false;
    // }

    // if(txtFecha.value == ""){
    //     return false;
    // }


    // return true;

    // let fecha = new Date(txtdia,txtmes,txtanio);
    // if (isNaN(fecha)) {
    //     return false;
    // }
    // return true;
    if(txtdia.value.length < 2 || txtdia.value.length > 2 ){
        return false;
    }
    if(txtdia.value.length == 0){
        return false;
    }
    if (isNaN(txtdia.value)) {
        return false;
    }

    if (parseFloat(txtdia.value <= 0)) {
        return false;
    }
    return true;

}

    function validarMes (){
        if(txtmes.value.length < 2 || txtmes.value.length > 2){
            return false;
        }
        if(txtmes.value.length == 0){
            return false;
        }
        if (isNaN(txtmes.value)) {
            return false;
        }

        if (parseFloat(txtmes.value <= 0)) {
            return false;
        }
        return true;

    }

function validarAnio (){
    if(txtanio.value.length < 4 || txtanio.value.length > 4){
        return false;
    }
    if(txtanio.value.length == 0){
        return false;
    }
    if (isNaN(txtanio.value)) {
        return false;
    }

    if (parseFloat(txtanio.value <= 0)) {
        return false;
    }
    return true;

}





function validarCodigo (){

    if(txtNumber.value.length < 3 || txtNumber.value.length > 3){
        return false;
    }
    if(txtNumber.value.length == 0){
        return false;
    }

    if (isNaN(txtNumber.value)) {
        return false;
    }

    if (parseFloat(txtNumber.value <= 0)) {
        return false;
    }

    return true;

}


function validarNombre(){
   
   
    let regNombre = /^[a-zA-Z]+$/;
    let regNombre1 = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

    

    if (!(regNombre.test(txtNombre.value.trim())) ||txtNombre.value.length < 3 || txtNombre.value.length == null || txtNombre.value.length == "" || regNombre1.test(txtNombre.value.trim())) {
        
        return false;
    }
    return true;

}

function validarApellido (){
    let regApellido = /^[a-zA-Z]+$/;
    let regApellido1 = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

    

    if (!(regApellido.test(txtApellido.value.trim())) ||txtApellido.value.length < 3 || txtApellido.value.length == null || txtApellido.value.length == "" || regApellido1.test(txtApellido.value.trim())) {
        
        return false;
    }

    return true;

}

// function validarDomicilio (){
//     let regDomicilio = /^[a-zA-Z]+$/;
//     let regDomicilio1 = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

    

//     if (!(regDomicilio.test(txtDomicilio.value.trim())) ||txtDomicilio.value.length < 3 || txtDomicilio.value.length == null || txtDomicilio.value.length == "" || regDomicilio1.test(txtNombre.value.trim())) {
       
//         return false;
//     }

//     return true;

// }

function validarDomicilio (){
    if(txtDomicilio.value.length < 3 ){
        return false;
    }
    if(txtDomicilio.value.length == 0){
        return false;
    }

    return true;

}

function validarLugar (){
    let regLugar = /^[a-zA-Z]+$/;
    let regLugar1 = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

    

    if (!(regLugar.test(txtLugar.value.trim())) ||txtLugar.value.length < 3 || txtLugar.value.length == null || txtLugar.value.length == "" || regLugar1.test(txtNombre.value.trim())) {
       
        return false;
    }

    return true;

}

document.getElementById('form').addEventListener("submit", function (event) {
    let Valido = true;
    event.preventDefault();
    alertValidaciones.innerHTML = "";
    alertValidaciones.style.display = "none";

    txtNumero.style.border = "solid thin green";
    txtdia.style.border = "solid thin green"; 
    txtmes.style.border = "solid thin green"; 
    txtanio.style.border = "solid thin green"; 
    txtNumber.style.border = "solid thin green";
    txtNombre.style.border = "solid thin green";
    txtApellido.style.border = "solid thin green";
    txtDomicilio.style.border = "solid thin green";
    txtLugar.style.border = "solid thin green";
    


    if (!validarNumeroTarjeta ()) {  
        alertValidaciones.innerHTML = "-El campo <strong>Número de tarjeta</strong> es requerido, solo ingrese los 16 números de su tarjeta. </br>"
        alertValidaciones.style.display = "block";
        txtNumero.style.border = "solid thin red";
        Valido = false;
    }
   

    // if (!validarFecha()) {
    //     alertValidaciones.innerHTML += "-El campo <strong>Fecha</strong> es requerido,solo ingrese la fecha de vencimiento de su tarjeta en formato dd/mm/aaaa (por favor incluya la diagonal). </br>"
    //     alertValidaciones.style.display = "block";
    //     txtdia.style.border = "solid thin red";
    //     txtmes.style.border = "solid thin red";
    //     txtanio.style.border = "solid thin red";
    //     Valido = false;
    // }

    if (!validarDia()) {
        alertValidaciones.innerHTML += "-El campo <strong>Día</strong> es requerido,solo ingrese números. </br>"
        alertValidaciones.style.display = "block";
        txtdia.style.border = "solid thin red";
        
        Valido = false;
    }

    if (!validarMes()) {
        alertValidaciones.innerHTML += "-El campo <strong>Mes</strong> es requerido,solo ingrese números. </br>"
        alertValidaciones.style.display = "block";
        
        txtmes.style.border = "solid thin red";
        
        Valido = false;
    }
    if (!validarAnio()) {
        alertValidaciones.innerHTML += "-El campo <strong>Año</strong> es requerido,solo ingrese números. </br>"
        alertValidaciones.style.display = "block";
        txtanio.style.border = "solid thin red";
        Valido = false;
    }

    if (!validarCodigo()) {
        alertValidaciones.innerHTML += "-El campo <strong>Código</strong> es requerido, solo ingrese los 3 números del código de su tarjeta. </br>"
        alertValidaciones.style.display = "block";
        txtNumber.style.border = "solid thin red";
        Valido = false;
    }

    if (!validarNombre()) {
        alertValidaciones.innerHTML += "-El campo <strong>Nombre</strong> es requerido, solo ingrese letras. </br>"
        alertValidaciones.style.display = "block";
        txtNombre.style.border = "solid thin red";
        Valido = false;
    }

    if (!validarApellido()) {
        alertValidaciones.innerHTML += "-El campo <strong>Apellido</strong> es requerido, solo ingrese letras. </br>"
        alertValidaciones.style.display = "block";
        txtApellido.style.border = "solid thin red";
        Valido = false;
    }
    if (!validarDomicilio()) {
        alertValidaciones.innerHTML += "-El campo <strong>Domicilio</strong> es requerido, ingrese letras y numeros.  </br>"
        alertValidaciones.style.display = "block";
        txtDomicilio.style.border = "solid thin red";
        Valido = false;
    }
    if (!validarLugar()) {
        alertValidaciones.innerHTML += "-El campo <strong>Tipo de domicilio</strong> es requerido, solo escriba apartamento, suite o edificio. </br>"
        alertValidaciones.style.display = "block";
        txtLugar.style.border = "solid thin red";
        Valido = false;
    }

    if (Valido){
        btn.value = 'Pago Exitoso...';
       
     
    }

            

});// btnPagar click

