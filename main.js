    const GRAVEDAD= 0.10;    

    const pelota1 = {
        elementoDom:document.getElementById('pelota1'),
        top: 0,
        vel: 1,
        left: 50,
        vel2: 1,
        id: 1,
       }

    const pelota2 = {
        elementoDom:document.getElementById('pelota2'),
        top: 0,
        vel: 1,
        left: 100,
        vel2: 1,
        id: 2,
    }

    function actualizarTop(objeto) {
        objeto.top += objeto.vel
    }


    function actualizarLeft(objeto) {
        objeto.left += objeto.vel2
    }



    function actualizarCss(objeto) {
        objeto.elementoDom.style.top = objeto.top + 'px'
        objeto.elementoDom.style.left = objeto.left + 'px'

    }

    function checarColisiones(objeto){
        
        if (objeto.top >= window.innerHeight -90 || objeto.top <= 0) {
            objeto.vel *= -1
        }

        if (objeto.left >= window.innerWidth -90 || objeto.left <= 0) {
            objeto.vel2 *= -1
        }
    }



    function actualizarVel(objeto) {
        objeto.vel += GRAVEDAD
    }



    function main(pelota){
        
        actualizarVel(pelota1)
        actualizarTop(pelota1)
        actualizarLeft(pelota1)
        actualizarCss(pelota1)
        checarColisiones(pelota1)

        actualizarVel(pelota2)
        actualizarTop(pelota2)
        actualizarLeft(pelota2)
        actualizarCss(pelota2)
        checarColisiones(pelota2)
    }

    setInterval(main, 17)


    //set timeout mandar a ala erga todo o reiniciar despues de tantos minutos o segundos!
    //on windows resize
    //on click pasa algo
    // on key pressed pasa algo