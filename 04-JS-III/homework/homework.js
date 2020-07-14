// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un array
  // Tu código:
   return array[0];
}

function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  var aux= array.length;
  return array[aux-1];
}

function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  var aux= array.length;
  return aux;
}

function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  var array2=[];
  for(i=0;i<array.length;i++) {
    array2[i]=array[i]+1;
  }
  return array2;
}

function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
   array.push(elemento);
  return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
   array.unshift(elemento);
  return array;
}

function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  var cadena;
  for(var i=0;i<palabras.length; i++){
    if(i===0){
      cadena=palabras[i];
    }else
    cadena=cadena+' '+palabras[i];
  }
  return cadena;
  
}

function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  var flag=false;
   for(var i=0; i<array.length; i++)
  {
    if(elemento==array[i])
    {
     flag=true;
    }
    
  }
  return flag;
}

function agregarNumeros(numeros) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
   var acumulador=0;

  for(var i=0; i<numeros.length; i++)
  {

    acumulador= numeros[i] + acumulador;
  }
  return acumulador;
}

function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
   var acumulador=0;
  var promedio=0;
  for(var i=0; i< resultadosTest.length; i++){
    acumulador=acumulador+resultadosTest[i];
  }
  promedio=acumulador/resultadosTest.length;
  return promedio;
}

function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
   var mayor=0;
  for(var i=0; i<numeros.length; i++){
    if(numeros[i]>mayor){
      mayor=numeros[i];
    }
  }
  return mayor;
}

function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0
  // Si se pasa un argumento, simplemente devuélvelo
  // Tu código:
  var mult=1;
  if(arguments.length!=0)
  {
    for(i=0; i<arguments.length; i++)
    {
      mult=mult*arguments[i];
    }
    return mult;

  }else
  return 0;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
};