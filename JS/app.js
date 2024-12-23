
// if((typeof(Storage)) !== 'undefined'){
//     alert('localstorage disponible')
// }else{
//     alert('local storage not disponible')
// }

//let nombre = prompt("ingrese un nombre");


const productos = {
    MichiChatran: { 
        nombre: 'Michi Chatran', 
        precio: 1200, 
        stock: 1,
        descuento: 0.01  // 5% de descuento
    },
    MichiViolento: { 
        nombre: 'Michi Violento', 
        precio: 666, 
        stock: 666,
        descuento: 0.6  // 10% de descuento
    },
    GatoEnergumeno: { 
        nombre: 'Gato Energumeno', 
        precio: 118, 
        stock: 10,
        descuento: 0.5  // 10% de descuento
    },
    GatoApacible: { 
        nombre: 'Gato Apacible', 
        precio: 120, 
        stock: 10,
        descuento: 0.1  // 10% de descuento
    },

    GatoArgentino: { 
        nombre: 'Gato Argentino', 
        precio: 100, 
        stock: 50,
        descuento: 0  // Sin descuento
    }
};
const IVA = 0.21

//document.addEventListener('DOMContentLoaded', cargarCarrito);


var carrito = [];
localStorage.setItem("carritoStorage", JSON.stringify(carrito) );



var campos = document.querySelectorAll("label > textarea , label > input");
chequearCamposLlenos(campos);

// console.log(campos);

// let botonPegar = document.querySelector('#pegar');
// botonPegar.addEventListener('click', ()=> {
//     obtenerLocalStorage();
// chequearCamposLlenos(campos)

// });

function Producto(nombre, precio, id){
     this.nombre = nombre;
     this.precio = precio;
     this.id = id

 }

function obtenerLocalStorage(nombre){
    let objeto = (localStorage.getItem('michiObjeto'));
    console.log(objeto);

}



function agregarAlCarrito(nombre,precio,id){
    const gatubelo = productos[id];
 
    if (gatubelo.stock <= 0) {
        alert('¡Producto agotado!');
        return;
    }



    var carritoLoad = localStorage.getItem("carritoStorage")
    carritoLoad = JSON.parse(carritoLoad);
    carritoLoad.push(new Producto(gatubelo.nombre,gatubelo.precio, id));
    localStorage.removeItem("carritoStorage");
    localStorage.setItem("carritoStorage", JSON.stringify(carritoLoad));

}

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
