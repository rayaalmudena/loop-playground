/**
 * Ejercicio final
 * 
 * Disponemos de un función, dibujarCirculo() ; que pinta en nuestro HTML un círculo.
 * 
 * Escribe un bucle que pinte por pantalla exactamente el número de cícrculos: (numeroFinal-numeroInicial).
 * Por ejemplo, para la configuración inicial, debería pintar 10 círculos. Hazlo usando un bucle WHILE
 * 
 * 
 * BONUS: Modifica el bucle para que, 
 */

 let numeroInicial=0;
 let numeroFinal=10;
 let tocaHexagono = 4;
 // Elimina el código siguiente y codifica la solución
 
 while(numeroInicial<numeroFinal){   
   if(tocaHexagono==numeroInicial){
    dibujarHexagono();
   }else{
    dibujarCirculo();
   }
   numeroInicial=numeroInicial+1;
 }

 


 

 /**
  * BONUS: Modifica el bucle para introducir la variable 'tocaHexagono'. El bucle debe funcionar como antes, pero ahora, cuando nos encotremos en la iteración número 'tocaHexagono', se debe pintar un hexagono amarillo. Investiga el fichero "mi-script.js" para averiguar como podríamos pintar un hexágono
  */


/**
 * Ejemplo: si numeroInicial=0, numeroFinal=10, y tocaHexagono=4, deberíamos pintar:
 * 
 * circulo circulo circulo círculo hexagono círculo círculo círculo círculo círculo
 * 
 */