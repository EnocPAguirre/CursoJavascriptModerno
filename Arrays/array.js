const frutas = ['kiwi', 'fresa', 'manzana', 'naranja', 'pera'];
console.table(frutas);

// Primer parametro la posicion que se desea eliminar la segunda corresponde 
// a el numero de elementos que se desea eliminar
frutas.splice(2, 1);

console.table(frutas)

// Destructuracion de arreglos

const [,,naranja] = frutas;
console.log(naranja);

// Encontrar una coincidencia mediante una funcion 
const existe = frutas.some(fruta => fruta =='pera');
// Devuelve un boolean
console.log(existe);

// Encontrar la posicion de un arreglo
const indice = frutas.findIndex(fruta => fruta == 'fresa');
//Devuelve index
console.log(indice);

const numeros = [100, 126, 125, 300, 243]

// Todas las operaciones se hacen tomando en cuenta el primer valor
const resultado = numeros.reduce( (total, suma) => {return total - suma});
//Devuelve un valor
console.log(resultado);

// Filtrado de un array
const mayor100 = numeros.filter(number => number > 125)
//Retorna un nuevo arr
console.log(mayor100)


const existeNaranja = frutas.find(fruta => fruta == 'naranja')
console.log(existeNaranja);

const juntar = frutas.concat(numeros)

console.table(juntar)

