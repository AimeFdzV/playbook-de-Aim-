// Uso de de split y slice para obtener elementos de una lista
//Defino mi primera variable que contiene una lista de elementos
const cadena1 = ['Mariposa', ' Pupa', ' Oruga', ' Huevo'];

//método split() para dividir un string en un arreglo de cadenas (separo la cadena en subcadenas).
const arrayDeCadenas = cadena1.map((etapa) =>
  etapa.split( ));

//método slice() para copiar solo una parte del arreglo en uno nuevo y reverse() para invertir el orden
const cadena2 = arrayDeCadenas.slice(1, 3).reverse()

console.log("Etapas de una mariposa: " + cadena1)
console.log("Array de etapas de una mariposa:")
console.log(arrayDeCadenas)
console.log("Etapas cursadas por Aimé: " + cadena2)



//const countriesContainingLand = countries7.filter((country) => // esta es una función
//  country.includes('land') // indicación para solo filtrar elementos que incluyan "land"
//)
//console.log("Ejemplo 7: Uso de filter para filtrar una lista de elementos")
//console.log(countriesContainingLand)
//const countriesEndsByia = countries7.filter((country) => country.startsWith('I'))
//console.log("Ejemplo 7: Paises que terminan en i")
//console.log(countriesEndsByia)
