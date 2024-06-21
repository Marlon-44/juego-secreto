let numeroSecreto=0;
let intentos = 1;
let numeroMaximo = 10;
let listaNumerosSorteados = [];
condicionesIniciales();
console.log(numeroSecreto);


function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function verificarIntento(){
    //pedimos un numero al usuario
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if(numeroDeUsuario == numeroSecreto){//el usuario ha acertado

        //cambiamos el texto del h1 y el p 
        asignarTextoElemento('h1', 'Felicidades, has acertado');
        asignarTextoElemento('p', `Acertaste el numero en ${intentos} ${intentos==1 ? 'intento' : 'intentos'}`);

        //una vez se gana activamos el boton de nuevo juego
        document.getElementById('reiniciar').removeAttribute('disabled');
        return;

    }else{//el usuario no ha acertado

        if(numeroDeUsuario > numeroSecreto){//si el numero del usuario es mayor

            asignarTextoElemento('p', 'El numero es menor');

        }else{//si el numero del usuario es menor

            asignarTextoElemento('p', 'El numero es mayor');
            
        }
    console.log(intentos);
    intentos++;
    limpiarCaja();
    
    }
    return;
}


function generarNumeroSecreto(){
    let numero = Math.floor(Math.random() * numeroMaximo)+1;

    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya no hay mas numeros disponibles');
    }else{
        if(listaNumerosSorteados.includes(numero)){
        
            return generarNumeroSecreto();

        }else{
            listaNumerosSorteados.push(numero);
            return numero;
        }
    }
    

}
    
function condicionesIniciales(){
    asignarTextoElemento('h1', 'JUEGO DEL NUMERO SECRETO');
    asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    document.getElementById('reiniciar').setAttribute('disabled', 'true');

}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}

function reiniciarJuego(){
    //limpiamos las cajas
    limpiarCaja();
    condicionesIniciales();


}