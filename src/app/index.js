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
          <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" id=${id}>
            Más detalles
          </button>
        </div>
      </div>
      `  
    });
    
  });
  const detailsModal = document.getElementById("details-modal");
  
cardGroup.addEventListener("click", async(e) => {
  const id = e.target.id;{};

  const idProduct = await products(url+id);


  if(id == idProduct.id) {

    const { nombre, imagen1, imagen2, precio, descripcion } = idProduct;
    
      modalContent.innerHTML = `
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">
            ${nombre}
          </h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <img src=${imagen1} alt=${nombre} class="imgProduct">
          <img src=${imagen2} alt=${nombre} class="imgProduct">
          <p>
            ${precio}
          </p>
          <div>
            ${descripcion}
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
  }
})
  
