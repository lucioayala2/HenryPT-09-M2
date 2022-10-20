export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const SET_COUNT = 'SET_COUNT';

// Nuestras actions (action creators) devolverán un paquete de actions que nuestro reducer recibirá. 
// ¿Cómo es el paquete de acción? Tengan en cuenta que el creador de la acción no es en absoluto responsable 
// de manejar ninguna de las lógicas actuales de actualización del store central de Redux.
// Eso se lo deja al reducer(s).

export const increment = () => {
  // Completa la funcion
  return { type: INCREMENT  }
};

export const decrement = () => {
  // Completa la funcion
  return { type: DECREMENT  }
};
export const set = (value) => {
  // Completa la funcion
  return { type: SET_COUNT, payload: value }
};