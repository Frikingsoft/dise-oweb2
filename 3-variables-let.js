/* Existen 3 formas de crear variables 
    var   --- No usar --- Las variables con var son globales
    let   --- Funcionan en un scoped o bloque ----
    const
*/
let nombre = "nicolas"
// Dentro del mismo bloque no puedo volver a declarar la misma variable
// let nombre = "nombre"  
if( 5<3 ){
    let nombre = "otro nombre"
    console.log(nombre)
    // Bloque dentro de un if
    // luego de termiando el bloque pierdo el alcance de la variable Nombre
}
console.log(nombre)

// Como salida voy a obtener otro nombre
// Como salida voy a obtener nicolas