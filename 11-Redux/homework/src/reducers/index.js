import { INCREMENT, DECREMENT, SET_COUNT } from '../actions';

const initialState = {
  count: 0
}

//Forma mucho mas optima de hacer esto
const cases = {
  [INCREMENT]: (state) => {
    return { count: state.count + 1 };
  },
  [DECREMENT]: (state) => {
    return { count: state.count - 1 };
  },
  [SET_COUNT]: (state,payload) => {
    return { count: payload };
  },
};

// Nuestro reducer que maneja nuestros dos casos de acción incremento y decremento.
// Recibe el estado de nuestro store, junto con una action creada por nuestro action creator. 
// ¿Qué tiene que hacer el reducer con el contador de cada caso?
// export default (state = initialState, action) => {
//   switch (action.type) {
//     case INCREMENT:
//     // completa para este caso
//     return{
//       count: state.count + 1,  
//     }
//     case DECREMENT:
//     // Fill para este otro
//     return {
//       count: state.count -1
//     }
//     default:
//       return state;
//   }
// };

//Forma mucho mas optima de hacer esto
 export default (state = initialState, action) => {
  return cases.hasOwnProperty(action.type) ? cases [action.type](state, action.payload) : state;
 }