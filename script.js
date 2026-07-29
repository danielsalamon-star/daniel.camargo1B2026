function voltarTopo(){
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
}

const titulos = document.querySelectorAll("h2");

titulos.forEach(function(titulo){

    titulo.addEventListener("mouseover",function(){
        titulo.style.color="#ff9800";
    });

    titulo.addEventListener("mouseout",function(){
        titulo.style.color="#006400";
    });

});