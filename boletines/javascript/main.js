//recorreventerlos
links.forEach(function(link){

    link.addEventListener("click",function(ev){
      ev.pre'ventDefault();
      let content = document.querySelector('.content');

      //quitarlelas clases de animaciones que ya addEventListener
      content.classList.remove("fadeInDown");
      content.classList.remove("animated");

      //agregar clases para animar su salida fadeOutUp
      content.classList.add("fadeInDown");
      content.classList.add("animated");

      setTimeout(function(){
        location.href = "/";
      },600);


      return false;
    });
});
