const productos = [ 

    {
        id: "Mesa ratona",
        Titulo: "Mesa ratona",
        precio: 10000 ,
        img:
        "./img/post10b.webp",
        categoria: {
            nombre: "mesas",
            id: "mesas"
        },
    },
    {
        id: "Sillon",
        Titulo: "Sillon",
        precio: 15000,
        img:
        "./img/sillon4.webp",
        categoria: {
            nombre: "sillones",
            id: "sillones"
        },
        
    },
    {
        id:  "Sillon xl",
        Titulo: "Sillon xl",
        precio: 12000,
        img:
        "./img/sillon-hong kong a.webp",
        categoria: {
            nombre: "sillones",
            id: "sillones"
        },
    },
    {
        id: "Sommier-",
        Titulo: "Sommier-",
        precio: 9000,
        img:
        "./img/oferta6.6bis.webp",
        categoria: {
            nombre: "sommier",
            id: "sommier"
        },
    },
    {
        id: "Placar corredizo",
        Titulo: "Placar corredizo",
        precio: 13000,
        img:
        "./img/placard2.webp",
        categoria: {
            nombre: "placar.c",
            id: "placar-c"
        },
    },
    {
        id: "Escritorio-F",
        Titulo: "Escritorio-F",
        precio: 10000,
        img:
        "./img/oferta2.2.webp",
        categoria: {
            nombre: "escritorio",
            id: "escritorio"
        },
    
    },
    {
        id: "Ropero",
        Titulo: "Ropero",
        precio: 11000,
        img:
        "./img/oferta4.4.webp",
        categoria: {
            nombre: "roperos",
            id: "roperos"
        },
    },
    {
        id: "Cucheta",
        Titulo: "Cucheta",
        precio: 7000,
        img:
        "./img/oferta5.5.webp",
        categoria: {
            nombre: "cuchetas",
            id: "cuchetas"
        },
    },
    {
        id: "Sillon-N",
        Titulo: "Sillon-N",
        precio: 7000,
        img:
        "./img/sillon3.webp",
        categoria: {
            nombre: "sillones",
            id: "sillones"
        },
    },
    {
        id: "Silla-6",
        Titulo: "Silla-6",
        precio: 7000,
        img:
        "./img/sillas6.webp",
        categoria: {
            nombre: "sillas",
            id: "sillas"
        },
    },
    {
        id: "Silla-3",
        Titulo: "Silla-3",
        precio: 7000,
        img:
        "./img/silla3.webp",
        categoria: {
            nombre: "sillas",
            id: "sillas"
        },
    },
    {
        id: "Silla-4",
        Titulo: "Silla-4",
        precio: 7000,
        img:
        "./img/silla4.webp",
        categoria: {
            nombre: "sillas",
            id: "sillas"
        },
    },
    {
        id: "Mesa-3",
        Titulo: "Mesa-3",
        precio: 7000,
        img:
        "./img/mesa3 (1).webp",
        categoria: {
            nombre: "mesas",
            id: "mesas"
        },
    },
    {
        id: "Mesa-D",
        Titulo: "Mesa-D",
        precio: 7000,
        img:
        "./img/mesita1.webp",
        categoria: {
            nombre: "mesas",
            id: "mesas"
        },
    },
    {
        id: "Mesa-Luz",
        Titulo: "Mesa-Luz",
        precio: 7000,
        img:
        "./img/oferta1.1.webp",
        categoria: {
            nombre: "mesas",
            id: "mesas"
        },
    },
    {
        id: "Sillon-came",
        Titulo: "Sillon-cama",
        precio: 7000,
        img:
        "./img/sillon6.webp",
        categoria: {
            nombre: "sillones",
            id: "sillones"
        },
    },
];

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");

botonesCategorias.forEach(boton => boton.addEventListener("click", () => {
    aside.classList.remove("aside-visible");
}))


function cargarProductos(productosElegidos) { 

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {
        
        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
        <img class="producto-imagen" src="${producto.img}" alt="${producto.Titulo }">
                    <div class="producto-detalle">
                        <h3 class="producto-titulo">${producto.Titulo}</h3>
                        <p class="producto-precio">$${producto.precio} </p>
                        <button class="producto-agregar" id="${producto.id}">Agregar</button>
                    </div>
                `;
            contenedorProductos.append(div);
        })

        actualizarBotonesAgregar();
    }

    cargarProductos(productos); 

    botonesCategorias.forEach(boton => {
        boton.addEventListener("click", (e) => {
    
            botonesCategorias.forEach(boton => boton.classList.remove("active"));
            e.currentTarget.classList.add("active");
    
            if (e.currentTarget.id != "todos") {
                const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
                tituloPrincipal.innerText = productoCategoria.categoria.nombre;

                const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
                cargarProductos(productosBoton);
            } else {
                tituloPrincipal.innerText = "Todos los productos";
                cargarProductos(productos);
            }
        }) 
    });

    function actualizarBotonesAgregar(){
        botonesAgregar = document.querySelectorAll(".producto-agregar");

        botonesAgregar.forEach(boton => {
            boton.addEventListener("click", agregarAlCarrito);
        });
    }

    let productosEnCarrito;
    const productosEnCarritoLS = JSON.parse(localStorage.getItem("productos-en-carrito"));

    if (productosEnCarritoLS) {
        productosEnCarrito = productosEnCarritoLS
        actualizarNumerito()
    } else {
        productosEnCarrito = [];
    }
    

    function agregarAlCarrito(e) {
        
        const idBoton = e.currentTarget.id;
        const productoAgregado = productos.find(producto => producto.id === idBoton);
        
        if(productosEnCarrito.some(producto => producto.id === idBoton)) {
            const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
            productosEnCarrito[index].cantidad++;
        } else {
            productoAgregado.cantidad = 1;
            productosEnCarrito.push(productoAgregado);
        }
        
        actualizarNumerito();

        localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
    }

function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}















