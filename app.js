let numeroSecreto = 0;
let intentos = 1; 
let listaNumerosSorteados = [];
let numeroMaximo = 100; // El número máximo que se puede sortear
let maxIntentos = 10; // Número máximo de intentos permitidos

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto) {
        // Mensaje de felicitación con el número correcto de intentos
        if (intentos === 1) {
            asignarTextoElemento('p', `¡¡¡Felicidades!!! Acertaste el número en 1 intento`);
        } else {
            asignarTextoElemento('p', `¡¡¡Felicidades!!! Acertaste el número en ${intentos} intentos`);
        }
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        // El usuario no acertó.
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', `El número secreto es menor, tienes ${maxIntentos - intentos} intentos restantes`);
        } else {
            asignarTextoElemento('p', `El número secreto es mayor, tienes ${maxIntentos - intentos} intentos restantes`);
        }
        intentos++;
        limpiarCaja();

        // Verifica si se han agotado los intentos
        if (intentos > maxIntentos) {
            asignarTextoElemento('p', `Lo siento, has agotado tus ${maxIntentos} intentos. El número secreto era ${numeroSecreto}`);
            document.getElementById('reiniciar').removeAttribute('disabled');
        }
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    // Si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
    } else {
        // Si el numero generado está incluido en la lista 
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Adivina el número secreto');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}. Tienes ${maxIntentos} intentos.`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1; // Reiniciar el contador de intentos
    console.log(numeroSecreto);
}

function reiniciarJuego() {
    // Limpiar caja
    limpiarCaja();
    // Indicar mensaje de intervalo de números 
    // Generar el número aleatorio
    // Inicializar el número intentos
    condicionesIniciales();
    // Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();
// let numeroSecreto = 0;
// let intentos = 5;
// let listaNumerosSorteados = [];
// let numeroMaximo = 100;



// function asignarTextoElemento(elemento, texto) {
//     let elementoHTML = document.querySelector(elemento);
//     elementoHTML.innerHTML = texto;
//     return;
// }

// function verificarIntento() {
//     let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
//     if (numeroDeUsuario === numeroSecreto) {
//         asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
//         document.getElementById('reiniciar').removeAttribute('disabled');
//     } else {
//         //El usuario no acertó.
//         if (numeroDeUsuario > numeroSecreto) {
//             asignarTextoElemento('p','El número secreto es menor');
//         } else {
//             asignarTextoElemento('p','El número secreto es mayor');
//         }
//         intentos++;
//         limpiarCaja();
//     }
//     return;
// }

// function limpiarCaja() {
//     document.querySelector('#valorUsuario').value = '';
// }

// function generarNumeroSecreto() {
//     let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;

//     console.log(numeroGenerado);
//     console.log(listaNumerosSorteados);
//     //Si ya sorteamos todos los números
//     if (listaNumerosSorteados.length == numeroMaximo) {
//         asignarTextoElemento('p','Ya se sortearon todos los números posibles');
//     } else {
//         //Si el numero generado está incluido en la lista 
//         if (listaNumerosSorteados.includes(numeroGenerado)) {
//             return generarNumeroSecreto();
//         } else {
//             listaNumerosSorteados.push(numeroGenerado);
//             return numeroGenerado;
//         }
//     }
// }

// function condicionesIniciales() {
//     asignarTextoElemento('h1','Juego del número secreto!');
//     asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}, tienes ${intentos.length.reverse}`);
//     numeroSecreto = generarNumeroSecreto();
//     intentos = 1;
//     console.log(numeroSecreto);
// }

// function reiniciarJuego() {
//     //limpiar caja
//     limpiarCaja();
//     //Indicar mensaje de intervalo de números 
//     //Generar el número aleatorio
//     //Inicializar el número intentos
//     condicionesIniciales();
//     //Deshabilitar el botón de nuevo juego
//     document.querySelector('#reiniciar').setAttribute('disabled','true');
    
// }

// condicionesIniciales();