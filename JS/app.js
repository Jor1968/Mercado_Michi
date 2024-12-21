
var a = 3;

var boollo = true;

// if((typeof(Storage)) !== 'undefined'){
//     alert('localstorage disponible')
// }else{
//     alert('local storage not disponible')
// }





//let nombre = prompt("ingrese un nombre");
//console.log(nombre);
//alert(nombre);

// let btn = document.querySelector('#btn1');
// btn.addEventListener('click', ()=> {
//     let nuevoNombre = document.querySelector('#nuevoNombre')
//     document.querySelector('#nombre').innerHTML = nuevoNombre.value
// });








var campos = document.querySelectorAll("label > textarea , label > input");


chequearCamposLlenos(campos);
console.log(campos);

let botonPegar = document.querySelector('#pegar');
botonPegar.addEventListener('click', ()=> {
chequearCamposLlenos(campos)
// console.log(cadenasTodasLlenas(campos));
// console.log(campos[0].value)
// console.log(campos[1].value)
// console.log(campos[2].value)
});


function chequearCamposLlenos(campos){
    if(cadenasTodasLlenas(campos)){
        console.log("El formulario esta completo")
    }
    else{
        console.log("El formulario no esta completo")

    }


}

function cadenasTodasLlenas(campos){
    let estaLlena = true;
    for(i = 0; i < campos.length; i++){
        // console.log(campos[i].value);
        // console.log("coso");
        // console.log(campos[i].value == "");
        estaLlena = estaLlena && !campos[i].value == "" ;
        
    }
return estaLlena;

}





function goToURL(url){
    window.location = url;
}


function formularioLleno(url){
    
}

function catDispenser() {
    alert("Michi!");
    show_image("https://jor1968.github.io/Mercado_Michi/Imagenes/michi1.jpg",
            300, 200,"Michencio");
        
}

function show_image(src, width, height,alt) {
    // Create a new image element
    let img = document.createElement("img");

    // Set the source, width, 
    // height, and alt attributes
    img.src = src;
    img.width = width;
    img.height = height;
    img.alt = alt;

    // Append the image element
    // to the body of the document
    document.body.appendChild(img);
}

function Quack(){
var audio = new Audio("https://jor1968.github.io/Mercado_Michi/Sonidos/Quack.mp3");
audio.play();
}

//alert(nombre)

