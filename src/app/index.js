import { products } from "./products.js"
// import "./styles.css"

const url = "https://worksopap.herokuapp.com/productos/";

const cardGroup = document.getElementById("card-group");
const modalContent = document.getElementById("modal-content");


document.addEventListener("DOMContentLoaded", async() => {
  
  const arrProducts = await products(url);
  
  arrProducts.forEach(product => {
    const {imagen1, nombre,id} = product;
    cardGroup.innerHTML += `
      <div class="card" style="width: 18rem;">

        <img src=${imagen1} class="card-img-top" alt=${nombre}>
        <div class="card-body">
          <h5 class="card-title">${nombre}</h5>
          <button type="button" class="${id} btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" id=${id}>
            Más detalles
          </button>
          <button class=" ${id} btn btn-danger" id="delete-${id}">
            Eliminar
          </button>
          
        </div>
      </div>
      `  
    });
    
  });
  




cardGroup.addEventListener("click", async(e) => {
  const clase = e.target.classList;
  const urlId = url+clase[0];
  const idProduct = await products(urlId);

  if(clase[2] == "btn-primary") {
    console.log(urlId)
    const { nombre, imagen1, imagen2, precio, descripcion } = idProduct;
    
      modalContent.innerHTML = `
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">
            ${nombre}
          </h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="scroll">
            <img src=${imagen1} alt=${nombre} >
            <img src=${imagen2} alt=${nombre} >
          </div>

          <div class="container-description">
            <p>
              $${precio}
            </p>
          
            <div class="talla">
              <p>
                Talla
              </p>
              <div>
                <p>L</p>
                <p>M</p>
                <p>XL</p>
                <p>XXL</p>
              </div> 
            </div> 
            <p>
              ${descripcion}
            </p>
          </div>
        </div>

        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
            Cerrar
          </button>
          <button type="button" class="btn btn-primary">
            Añadir al carrito
          </button>
        </div>
    `
  } else if(clase[2] == "btn-danger") {
    console.log(urlId)
    const resDelete = await fetch(urlId, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'charset=utf-8'
      }
    });
    const dataDelete = await resDelete.json()
  }
});



// cardGroup.addEventListener("click", async(e) => {
//   const id = e.target.id;
  
//   if(id){
//     console.log("hola", id)

//   const resDelete = await fetch(url+id, {
//     method: 'DELETE',
//     // headers: {
//     //   'Content-Type': 'charset=utf-8'
//     // }
//   });
//   // const dataDelete = await resDelete.json()

//   }


// })




  
