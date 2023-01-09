//Puntos:
let puntosJugador = 0;
let puntosPC = 0;
//end puntos.
let eleccionJugador = document.getElementById('eleccion_jugador')
let eleccionPC = document.getElementById('eleccion_pc')
let btnReiniciar = document.querySelector('.boton_reiniciar')
let botones = document.querySelectorAll('button')
let eleccionDelPC;
let mensajePuntos = document.querySelector('.mensaje_win')
let contadorJugador = document.getElementById('puntos_jugador')
let ContadorPc = document.getElementById('puntos_pc') 
let contenedorBtnes = document.querySelector('.botones')
let eleccion = document.querySelector('.Eleccion')

//Funcionalidad del juego.
botones.forEach((btn)=>{
  btn.addEventListener('click', (e)=>{
 
 eleccion.style.display = 'block'
 let selectJugador = e.currentTarget.id
  eleccionJugador.innerHTML = `${selectJugador}`
  
  eleccionComputador(e)
  logicaDelJuego(e)
  juegoEnd()
  })
})


// 0 es igual a piedra
// 1 es igual papel
// 2 es igual a tijera

function eleccionComputador(e){
 let numeroRandom = Math.floor(Math.random()*3)
  
  if(numeroRandom === 0){
    eleccionDelPC = 'piedra'
  }
  if(numeroRandom === 1){
    eleccionDelPC= 'papel'
  }
  if(numeroRandom === 2){
    eleccionDelPC = 'tijera'
  }
 eleccionPC.innerHTML = `${eleccionDelPC}`;
}

function logicaDelJuego (e){

//Ganar usuario:
 let selectJugador = e.currentTarget.id
  if(
    selectJugador === 'piedra' && eleccionDelPC === 'tijera' || selectJugador === 'papel' && eleccionDelPC === 'piedra' || selectJugador === 'tijera' && eleccionDelPC === 'papel'
    
    ) {
      puntosJugador++
      contadorJugador.innerHTML= `${puntosJugador}`  
        mensajePuntos.textContent = 'Ganaste un punto'
    }
   
 //Ganar computadora:
 
 else if(
      eleccionDelPC === 'piedra' && selectJugador === 'tijera' || eleccionDelPC === 'papel' && selectJugador === 'piedra' || eleccionDelPC === 'tijera' && selectJugador === 'papel'
      
      ){
        
         puntosPC++;
         ContadorPc.innerHTML= `${puntosPC}` 
        mensajePuntos.textContent = 'La computadora ha ganado un punto.'
     
      } 
      
      else {
        mensajePuntos.textContent = 'Empate'
      }
};


let juegoEnd = ()=>{
 
  if(puntosPC === 5 || puntosJugador === 5){
    if(puntosPC === 5){
      mensajePuntos.innerHTML = `
         <h2>Game over :'(</h2>
        <p> La computadora ha ganado el juego</p>
      `
      contenedorBtnes.style.display = 'none'
      botonReiniciar.style.display = 'block'
     
   
    }
   
   if (puntosJugador === 5) {
     
    mensajePuntos.innerHTML= `<h2>Felicidades, ganaste el juego. :) </h2>`
    
    contenedorBtnes.style.display = 'none'
    botonReiniciar.style.display = 'block'
   }
    
  }
};


//Función reiniciar juego.
let botonReiniciar = document.querySelector('.boton_reiniciar')
//Evento:
  botonReiniciar.addEventListener('click', ()=>{
  puntosPC = 0;
  puntosJugador = 0;
  mensajePuntos.innerHTML = '';
  contadorJugador.innerHTML = `${puntosJugador}`
  ContadorPc.innerHTML = `${puntosPC}`
  contenedorBtnes.style.display = 'block'
  botonReiniciar.style.display = 'none'
  eleccion.style.display = 'none'
});



