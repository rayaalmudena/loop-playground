/**
 * Ejercicio: Mostrar números pares o impares?
 * 
 * La operación número % 2; nos indica si un número no
 * tiene residuo cuando se devide por 2. Nos permite saber si un número es par o impar. Ejemplo 8 % 2 = 0. Como el residuo es 0; podemos decir que 8 es un número par.
 *
 * Completa el script. Muestra por el terminal si en la iteración actual del bucle 'i' es un número par o impar.
 * 
 * Ejemplo: El script debería mostrar algo así:
 * 
 * "El número 0 es par o impar?: true"
 * "El número 0 es par !"
 * 
 * "El número 1 es par o impar?: false"
 * "El número 1 es impar !"
 * .
 * .
 * .
 * "El número 9 es par o impar?: false"
 * "El número 9 es impar !"
 * 
 * 
 */


let ultimoNumeroComprobar = 10;
let esNumeroPar;

for (let i=0; i<ultimoNumeroComprobar;i++) {
    esNumeroPar = i % 2;
    console.log(`El número ${i} es par o impar? ${esNumeroPar}`)

    // Modificar a partir de aquí
    if (!esNumeroPar) {
        console.log(`El número ${i} es par !`);
    }else{
        console.log(`El número ${i} es impar !`);        
    }
    console.log();
}

