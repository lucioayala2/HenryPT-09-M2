//Clasica
function countFn() {
    console.log('UWU');
}

//Arrow
const count = () => {
    console.log('UWU');
}

const arr = []

arr.map( (element) => { console.log(element); } )

//Tienen un return implicito al no poner las llaves, por ej

arr.map( (element) => element.toUpperCase() ); //Devuelve los elementos en mayuscula

// Si quiero retornar un objeto, sería con ( { objeto } ) en lugar de { objeto }

//Las AF no pueden usar el this, por lo que no se puede trabajar prototypes con las AF Porque el this en las AF hace referencia al contexto global donde está siendo escrito, y no donde está siendo ejecutado

//DESTRUCTURING
const obj = { name: 'Lucio', surname: 'Ayala', address: { street: 428 } };
const array = [1, 2, 3, 4];

const { name } = obj;

console.log( name );

// Pero puedo hacer tambien:  //Agregamos la parte de address y le hacemos otro destructuring dentro del que ya tenemos

const { 
    name: Nombre,
    address: { street } 
} = obj;

console.log( Nombre, street ); //Le pongo un alias

//DESTRUCTURING DEL ARRAY

const [ uno, dos, tres ] = array;


// SPREAD OPERATOR pasa al nuevo objeto, las propieades del anterior

const defaultObj = {
    name: '',
    surname: ''
}

const newObj = {
    ...defaultObj,
    address: {
        street: ''
    }
}

// TEMPLATE STRINGS

const text = 'Hola' + name + ', como estas?';

const newText = `Hola ${name}, como estas?`;

// BUSCAR REST

// PROMISES es para manejar operaciones asincronas, que me van a retornar algo pero aun no se el resultado. Se me "promete" la respuesta

