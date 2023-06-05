/**
 * TIC TAC TOE
 */

let jugador1 = 'X';
let jugador2 = 'O';

/**
 * [0, 1, 2]
 * [3, 4, 5]
 * [6, 7, 8]
 */
// let tablero = ['','','','','','','','',''];

let tablero = document.getElementsByClassName('casilla');
for(let i = 0; i < tablero.length; i++){
    //console.log(tablero[i]);
    tablero[i].setAttribute('onclick', `pintaConsola(${i})`);
}

let turno = true;
let contador = 0;
let contadorVictoriaX = 0;
let contadorVictoriaO = 0;
let contadorEmpate = 0;

function pintaConsola(numero){
    if(turno){
        tablero[numero].textContent = 'X';
        GANAR_X();
        console.log(contador);
    }else {
        tablero[numero].textContent = 'O';
        GANAR_O();
        console.log(contador);
    }
    tablero[numero].removeAttribute('onclick');
    turno = !turno;
    contador++;
    if(contador==9){
        for(let i = 0; i <= tablero.length; i++){
            tablero[i].setAttribute('onclick', `pintaConsola(${i})`);
            tablero[i].textContent = ' ';
            contadorEmpate ++;
        }
        contador = 0;
    }
    console.log('Soy contador Empate: ' + contadorEmpate);
    console.log('Soy contador O: ' + contadorVictoriaO);
    console.log('Soy contador X: ' + contadorVictoriaX);
}


let combinacionGanadora = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];


function GANAR_X(){
    let actual = [];
    // Recorrer las casillas para ver su contenido
    for (let i = 0; i < tablero.length; i++){
        if(tablero[i].innerHTML == 'X'){
            actual.push(i);
        }
    }
    
    /**
     * Utilizar Array.include para comprobar si una de las combinaciones correctas
     * esta incluida en mi array de actual
     */
    for(let i = 0; i < combinacionGanadora.length ; i++){
        if(actual.includes(combinacionGanadora[i][0]) && actual.includes(combinacionGanadora[i][1]) && actual.includes(combinacionGanadora[i][2])){
            alert('GANAN LAS X');
            contador = 0;
            for(let i = 0; i <= tablero.length; i++){
                tablero[i].setAttribute('onclick', `pintaConsola(${i})`);
                tablero[i].textContent = ' ';
            }
        }
    }
}

function GANAR_O(){
    let actual = [];
    // Recorrer las casillas para ver su contenido
    for (let i = 0; i < tablero.length; i++){
        if(tablero[i].innerHTML == 'O'){
            actual.push(i);
        }
    }
    /**
     * Utilizar Array.include para comprobar si una de las combinaciones correctas
     * esta incluida en mi array de actual
     */
    for(let i = 0; i < combinacionGanadora.length ; i++){
        if(actual.includes(combinacionGanadora[i][0]) && actual.includes(combinacionGanadora[i][1]) && actual.includes(combinacionGanadora[i][2])){
            alert('GANAN LAS O');
            contador = 0;
            for(let i = 0; i <= tablero.length; i++){
                tablero[i].setAttribute('onclick', `pintaConsola(${i})`);
                tablero[i].textContent = ' ';
            }
        }
    }
}

/**
 * La funcion ponerFicha pide al usuario una posicion para insertar la ficha.
 * Si la posicion esta vacia, inserta y en caso contrario, vuelve a pedir la posicion
 */
function ponerFicha(){
    /**
     * Utilizamos el prompt para recoger la casilla del usuario 
     */
    let c = prompt('Dime una casilla donde colocar la ficha');
    console.log(c);
    
    if(tablero[parseInt(c)].innerHTML == ''){
        tablero[parseInt(c)].innerHTML = 'X';
        GANAR_X();
    }else{
        alert('Esta casilla esta ocupada');
        ponerFicha();
    }
}
// ponerFicha();
