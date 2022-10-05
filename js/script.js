function mover() {
    let animacion = document.getElementById("inicioT")
    let posicion = animacion.getBoundingClientRect().top()

    let tamañodepantalla = window.innerHeight

    if(posicion < tamañodepantalla){
        animacion.style.animation = "mover 1s ease-out"

    }
}





window.addEventListener("scroll", mover())