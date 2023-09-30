let baseDatos;

const domItems=document.querySelector("#items");

const productoSeleccionado=[];


const cargarProductos=async()=>{ 
    baseDatos=localStorage.getItem("productos");
    if (baseDatos == null){
        const response = await fetch("Json/productos.json");
        productos = await response.json();

        localStorage.setItem("productos", JSON.stringify(productos));
    }
    
    if(typeof baseDatos=="string"){
        baseDatos=JSON.parse(baseDatos);
    }
    
    baseDatos.forEach(producto => {
        const card=document.createElement("div");
        card.classList.add("card","col-sm-3");
        const imagen=document.createElement("img");
        imagen.classList.add("card-img-top","img-thumbnail");
        imagen.setAttribute("src", "../" + producto.imagen);
        const contenido=document.createElement("div");
        contenido.classList.add("card-body");
        const title=document.createElement("h5");
        title.classList.add("card-title");
        title.textContent=producto.nombre;
        const desc=document.createElement("p");
        desc.classList.add("card-text");
        desc.textContent=producto.descripcion;
        const enlace=document.createElement("a");
        enlace.classList.add("card-link");
        enlace.setAttribute("href","detalles.html");
        enlace.textContent="...Mas detalles";

        contenido.appendChild(title);
        contenido.appendChild(desc);
        contenido.appendChild(enlace);
        card.appendChild(imagen);
        card.appendChild(contenido);
        domItems.appendChild(card);

        

        
        enlace.addEventListener("click",()=>{
            productoSeleccionado.push({
                nombre:producto.nombre,
                descripcion:producto.descripcion,
                imagen:producto.imagen,
                detalle:producto.detalle,
                precio:producto.precio,
                nivel:producto.nivel,
            })
            localStorage.setItem("producto", JSON.stringify(productoSeleccionado));
            console.log(productoSeleccionado);
            location.href="detalles.html";
        });


    });

};

cargarProductos();

