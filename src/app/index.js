import { show } from "./productos.js"

let url = "https://worksopap.herokuapp.com/productos"

let elementos = async (url)=>{
  let array = await show (url)
    return array
}
alert("asdg")
//console.log(elementos(url))

let card  = document.getElementById("body")

document.addEventListener("DOMContedLoaded",async ()=>{
    alert("yuju")
   await elementos().forEach(element => {
       console.log(element)
       
   });
})








