const productos= [
    {codigo:1,tipo:"gpu",marca:"MSI",Modelo:"GTX3060",Precio:120000},
    {codigo:2,tipo:"monitor",marca:"MSI",Modelo:"27 pulgadas 2ms",Precio:80000},
    {codigo:3,tipo:"gpu",marca:"ASUS",Modelo:"GTX3080",Precio:250000},
    {codigo:4,tipo:"monitor",marca:"Samsung",Modelo:"30 pulgadas curvo",Precio:60000}

];
function nuevoPorducto(codigo,tipo,marca,modelo,precio){

    this.codigo=codigo,
    this.tipo=tipo,
    this.marca=marca,
    this.modelo=modelo,
    this.precio=parseFloat(precio),
    this.detallesGenerales=()=>{console.log("Codigo del producto:"+this.codigo  + "n\Tipo:"+this.tipo+"n\marca:"+this.marca+"n\Modelo:"+this.modelo +"n\Precio:"+this.precio)}
};
function agregarProducto(producto){
    productos.push(producto);
}
// de esta froma agregamos y creamos producto a nuestro array 
agregarProducto(new nuevoPorducto(5,"motherboard","MSI","z-270",50000)); 



const carritoDiv=document.getElementById("div-carrito")
const productosDiv= document.getElementById("div-productos");
let carrito=JSON.parse(localStorage.getItem("carrito"))

function creanCard(){
    productos.forEach((el)=>{
        productosDiv.innerHTML+= ` <div style="padding:20px ; background-color:orange; border: 2px solid black;">
            <h3>Codigo:${el.codigo}</h3>
            <h3>Tipo:${el.tipo}</h3>
            <h2>Marca:${el.marca}</h2>
            <h2>Modelo:${el.Modelo}</h2>
            <h2>Precio:${el.Precio}</h2>
            <button id="btn-agregar${el.codigo}" >AGREGAR</button>
        </div> `
    });
    funcinAgregarAlCarrito();
    
}

function funcinAgregarAlCarrito(){
    productos.forEach(el=>{
        document.getElementById(`btn-agregar${el.codigo}`).addEventListener("click",()=>{
            pushCarrito(productos)
        })
    })

}
function pushCarrito(producto){
    let existe= carrito.some(el=>el.codigo===producto.codigo);
    if (existe=== false) {
        producto.cantidad=1;
        carrito.push(producto);
        
    } else {
        let producFind= carrito.find(produc=>produc.codigo==producto.codigo);
        producFind.cantidad++
    }
    mostrarCarrito();
}

function mostrarCarrito(){
    carritoDiv.innerHTML="";
    carrito.forEach(el=>{
        carritoDiv.innerHTML+=` <div style="padding:50px ; background-color: orange; border: 2px solid black;">
            <h3>Codigo:${el.codigo}</h3>
            <h3>Tipo:${el.tipo}</h3>
            <h2>Marca:${el.marca}</h2>
            <h2>Modelo:${el.Modelo}</h2>
            <h2>Precio:${el.Precio}</h2>
            <h2>Cantidad${el.cantidad}</h2>
            <button id="btn-quitar${el.codigo}">quitar</button>
        </div> `})
    localStorage.setItem("carrito",JSON.stringify(carrito))
    funcinQuitarDelCarrito()
}

function funcinQuitarDelCarrito(){

    carrito.forEach(el=>{
        document.getElementById(`btn-quitar${el.codigo}`).addEventListener("click",()=>{
             let indice = carrito.findIndex(le=>le.codigo===el.codigo)
             carrito.splice(indice,1);

             mostrarCarrito();
             
        })
    })

}

mostrarCarrito()
creanCard()





