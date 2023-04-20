let header = document.querySelector("header");
// window.addEventListener("scroll",(e)=>{
//     header.classList.add("hide")
// })
let InitialScrollPos = window.pageYOffset; //almacenamos la posición inicial del scroll
window.addEventListener("scroll", () => {
  const currentScrollPos = window.pageYOffset; //almacenamos la posición actual del scroll
  if (InitialScrollPos > currentScrollPos) {
    //scroll hacia arriba
    //mostrar el header si se ocultó
    header.classList.remove("hide");
  } else {
    //scroll hacia abajo
    //ocultar el header
    header.classList.add("hide");
  }
  InitialScrollPos = currentScrollPos; //actualizamos la posición anterior del scroll
});

let menumv = document.querySelector(".menumv");
let headerMv = document.querySelector(".headerMv");
headerMv.lastElementChild.firstElementChild.addEventListener("click", () => {
  menumv.classList.remove("invisible");
  headerMv.classList.add("absoluteMode");
  menumv.firstElementChild.addEventListener("click", () => {
    menumv.classList.add("invisible");
    headerMv.classList.remove("absoluteMode");
  });
});
