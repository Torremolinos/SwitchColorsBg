document.addEventListener("DOMContentLoaded", () => {
  const bg1 = document.getElementById("1");
  const bg2 = document.getElementById("2");
  const bg3 = document.getElementById("3");
    
  bg1.addEventListener("click",()=>{
   document.body.className="fondo1";
  })
  bg2.addEventListener("click",()=>{
    document.body.className="fondo2";
  })
  bg3.addEventListener("click",()=>{
    document.body.className="fondo3";
  })
  /*hay alguna especie de error que agarra al h1 y lo estira como un chicle pa abajo*/
  
//otra alternativa(el de arriba lo hice yo y esta alternativa es de chatgpt)
/*
bg1.addEventListener("click", () => {
    document.body.classList.add("fondo1");
    document.body.classList.remove("fondo2");
    document.body.classList.remove("fondo3");
  });

  bg2.addEventListener("click", () => {
    document.body.classList.add("fondo2");
    document.body.classList.remove("fondo1");
    document.body.classList.remove("fondo3");
  });

  bg3.addEventListener("click", () => {
    document.body.classList.add("fondo3");
    document.body.classList.remove("fondo1");
    document.body.classList.remove("fondo2");
  });
  */
});
