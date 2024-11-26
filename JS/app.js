
var a = 3;

var boollo = true;


//let nombre = prompt("ingrese un nombre");

//console.log(nombre);
//alert(nombre);

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

function gong(){
var audio = new Audio("https://jor1968.github.io/Mercado_Michi/index/Sonidos/Quack.mp3'");
audio.play();
alert("Miau");
}

//alert(nombre)

