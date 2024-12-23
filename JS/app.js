
// if((typeof(Storage)) !== 'undefined'){
//     alert('localstorage disponible')
// }else{
//     alert('local storage not disponible')
// }

//let nombre = prompt("ingrese un nombre");

var verdadMostrada = false;

const productos = {
    MichiChatran: { 
        id: 'MichiChatran',
        nombre: 'Michi Chatran', 
        descripcion: 'El famoso Chatran mencionado por bandas de cumbia como Damas Gratis y Los Gedes.',
        precio: 1200, 
        stock: 1,
        descuento: 0.01  // 5% de descuento
    },
    MichiViolento: { 
        id: 'MichiViolento',
        nombre: 'Michi Violento', 
        descripcion: 'Este gato sufre de ataques de ira provocados por un profundo daño neuronal  proveniente del abuso de inhalantes como el poxiran.',
        precio: 666, 
        stock: 666,
        descuento: 0.6  // 10% de descuento
    },
    GatoEnergumeno: { 
        id: 'GatoEnergumeno',
        nombre: 'Gato Energumeno', 
        descripcion: 'Este es mas picante aun, cuidado.',
        precio: 118, 
        stock: 10,
        descuento: 0.5  // 10% de descuento
    },
    GatoApacible: { 
        id: 'GatoApacible',
        nombre: 'Gato Apacible', 
        descripcion: 'Gato ideal para aquellos hobbistas de felinos que recien comienzan. ',
        precio: 120, 
        stock: 10,
        descuento: 0.1  // 10% de descuento
    },

    GatoArgentino: { 
        id: 'GatoArgentino',
        nombre: 'Gato Argentino',
        descripcion: 'Mas Argentino que la sopa Paraguaya.',
        precio: 100, 
        stock: 50,
        descuento: 0  // Sin descuento
    }
};
const IVA = 0.21
var carrito = [];
localStorage.setItem("carritoStorage", JSON.stringify(carrito) );

document.addEventListener('DOMContentLoaded', cargarCarrito);





var campos = document.querySelectorAll("label > textarea , label > input");
chequearCamposLlenos(campos);



function cargarIluminati(){
    if(verdadMostrada === true){
        return;
    }
    var usuario = "";
        fetch('https://fakestoreapi.com/users?limit=5')
            .then(res=>res.json())
            .then(data=>  {
                const li = document.createElement('li');
                li.className = "italianno-blanco";
                li.innerText = JSON.stringify(data);
                let ListaUsuarios = document.querySelector("#ListaUsuarios");
                ListaUsuarios.appendChild(li);



            })

            verdadMostrada = true;
    }


    



function MasInformacion(id){
    let producto = productos[id];
    document.querySelector('.descripcion-extra-' +  id).innerHTML = producto.descripcion;

}

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

    gatubelo.stock--;
    document.querySelector(".stock-" + id).innerHTML = "stock:" + gatubelo.stock;
    


    localStorage.removeItem("carritoStorage");
    localStorage.setItem("carritoStorage", JSON.stringify(carritoLoad));

    renderizarCarrito();

}
function cargarCarrito() {
    renderizarCarrito();
}

function renderizarCarrito() {
    const listaCarrito = document.getElementById('lista-carrito');
    const subtotalCarrito = document.getElementById('subtotal-carrito');
    const descuentoCarrito = document.getElementById('descuento-carrito');
    const ivaCarrito = document.getElementById('iva-carrito');
    const totalCarrito = document.getElementById('total-carrito');
    const carritoLoad = JSON.parse(localStorage.getItem('carritoStorage')) || [];
    
    // Limpiar lista anterior
    listaCarrito.innerHTML = '';
    
    // Totales iniciales
    let subtotal = 0;
    let descuentoTotal = 0;
    
    // Renderizar cada producto
    carritoLoad.forEach((producto, index) => {
        const productoInfo = productos[producto.id];
        const li = document.createElement('li');
        
        // Calcular descuento individual
        const descuentoProducto = productoInfo.descuento * producto.precio;
        const precioConDescuento = producto.precio - descuentoProducto;
        
        li.innerHTML = `
            ${producto.nombre} - $${producto.precio} 
            ${productoInfo.descuento > 0 ? 
                `<span class="descuento">(Desc. ${(productoInfo.descuento * 100).toFixed(0)}%: 
                -$${descuentoProducto.toFixed(2)})</span>` 
                : ''}
        `;
        
        // Botón para eliminar producto
        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'Eliminar';
        botonEliminar.onclick = () => eliminarDelCarrito(index);
        
        li.appendChild(botonEliminar);
        listaCarrito.appendChild(li);
        
        // Sumar al subtotal y descuentos
        subtotal += producto.precio;
        descuentoTotal += descuentoProducto;
    });
    
    // Calcular IVA
    const ivaTotal = (subtotal - descuentoTotal) * IVA;
    const total = subtotal - descuentoTotal + ivaTotal;
    
    // Actualizar totales
    subtotalCarrito.textContent = subtotal.toFixed(2);
    descuentoCarrito.textContent = descuentoTotal.toFixed(2);
    ivaCarrito.textContent = ivaTotal.toFixed(2);
    totalCarrito.textContent = total.toFixed(2);
}

function eliminarDelCarrito(index) {
    let carrito = JSON.parse(localStorage.getItem('carritoStorage')) || [];
    
    // Recuperar el producto para devolver stock
    var gatubelo = productos[carrito[index].id];
    gatubelo.stock++;
    document.querySelector(".stock-" + gatubelo.id).innerHTML = "stock:" + gatubelo.stock;
    
    // Eliminar producto por índice
    carrito.splice(index, 1);
    
    // Actualizar localStorage
    localStorage.setItem('carritoStorage', JSON.stringify(carrito));
    
    // Renderizar de nuevo
    renderizarCarrito();
}

function vaciarCarrito() {
    // Restaurar stock de todos los productos
    const carrito = JSON.parse(localStorage.getItem('carritoStorage')) || [];
    carrito.forEach(item => {
        const gatubelo = productos[item.id];
        gatubelo.stock++;
        document.querySelector(".stock-" + gatubelo.id).innerHTML = "stock:" + gatubelo.stock;
    });
    
    // Limpiar localStorage
    localStorage.removeItem('carritoStorage');
    

    const carroAcargar = [];
    localStorage.setItem('carritoStorage', JSON.stringify(carroAcargar));
    
    // Renderizar
    renderizarCarrito();
}

function mostrarCheckout() {
    const carrito = JSON.parse(localStorage.getItem('carritoStorage')) || [];
    
    // Validar que hay productos en el carrito
    if (carrito.length == 0) {
        alert('El carrito está vacío');
        return;
    }
    
    // Mostrar modal de checkout
    const modal = document.getElementById('checkout-modal');
    modal.style.display = 'flex';
    
    // Actualizar totales en el modal
    const subtotal = parseFloat(document.getElementById('subtotal-carrito').textContent);
    const descuento = parseFloat(document.getElementById('descuento-carrito').textContent);
    const iva = parseFloat(document.getElementById('iva-carrito').textContent);
    const total = parseFloat(document.getElementById('total-carrito').textContent);
    
    document.getElementById('modal-subtotal').textContent = subtotal.toFixed(2);
    document.getElementById('modal-descuento').textContent = descuento.toFixed(2);
    document.getElementById('modal-iva').textContent = iva.toFixed(2);
    document.getElementById('modal-total').textContent = total.toFixed(2);
}

function realizarCompra() {
    // Simular compra
    alert('¡Compra realizada con éxito!');
    
    // Vaciar carrito
    localStorage.removeItem('carritoStorage');
    const carroAcargar = [];
    localStorage.setItem('carritoStorage', JSON.stringify(carroAcargar));
    
    // Cerrar modal
    cerrarCheckout();
    
    // Renderizar carrito vacío
    renderizarCarrito();
}

function cerrarCheckout() {
    const modal = document.getElementById('checkout-modal');
    modal.style.display = 'none';
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
