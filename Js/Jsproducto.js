const detalle=JSON.parse(localStorage.getItem("producto"));

const domItems2=document.querySelector("#items2");
const btn=document.querySelector("#volver");

  detalle.forEach(producto=>{
     const card=document.createElement("div");
     card.classList.add("card","col-sm-3","d-flex","justify-content-center");
      const imagen=document.createElement("img");
      imagen.classList.add("card-img-top");
      imagen.src=`img/${producto.imagen}`;
      const contenido=document.createElement("div");
      contenido.classList.add("card-body");
      const title=document.createElement("h2");
      title.classList.add("card-title");
      title.textContent=producto.nombre;
      const desc=document.createElement("p");
      desc.classList.add("card-text");
      desc.textContent=producto.descripcion;
      const det=document.createElement("p");
      det.classList.add("card-text");
      det.textContent=producto.detalle;
      const valor=document.createElement("p");
      valor.classList.add("card-text");
      valor.textContent=producto.precio;
      const estrellas = ["😭", "😭", "😭", "😭", "😭"];
      const nivel=document.createElement("p");
      nivel.classList.add("card-text");
      for (let i = 0; i < producto.nivel.length; i++) {
        estrellas[i] = "😃";
      }
      nivel.textContent = estrellas.join("");

      contenido.appendChild(title);
      contenido.appendChild(desc);
      contenido.appendChild(det);
      contenido.appendChild(valor);
      contenido.appendChild(nivel);
      card.appendChild(imagen);
      card.appendChild(contenido);
      domItems2.appendChild(card);
    });
    

btn.addEventListener("click",()=>{
  localStorage.removeItem("producto");
})