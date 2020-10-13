// Tipos de datos
// variables
// condicionales
// ciclos
// arreglos
// funciones
// objetos literales

// Crear una función imprimirDesdeTercero que reciba un arreglo e imprima los
// números desde la tercera posición hasta el final

function imprimirDesdeTercero(arr) {
    for (let i=2; i < arr.length; i++) {
        console.log(arr[i])
    }
}

// invocar la función
const a1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
imprimirDesdeTercero(a1)
