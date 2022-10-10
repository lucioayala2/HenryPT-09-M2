//Los estados no deben modificarse manualmente
import React from 'react';


export default class Counter extends React.Component { 
  constructor(props){
    super(props);
    this.state = { //Esto es propio de los estados de React - State es un objeto. ES ASI EN COMPONENTES DE CLASE
      count: 0,
    };
  }

  componentDidMount(){ //se ejecuta cada vez que el componente es montado (se inicia- se pone en pantalla- se renderiza)
  }
  componentDidUpdate(){} // se ejecuta cada vez que el componente se vuelve a renderizar, se actualiza

  componentWillUnmount(){} // se ejecuta cuando el componente se elimina

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  }

  handleDecrement = () => {
    this.setState((state) => ({ count: state.count - 1 })); // otra forma de hacerlo, de esta forma podria ponerse dos veces seguidas y funcionaria
  }

  render(){
    return (
      <div style={{
        width: '250px',
        height: '250px',
        textAlign: 'center',
        margin: '0 auto',
      }}>
        <h1>Counter</h1>
        <p>
          <h2>{this.state.count}</h2>
          <button onClick={this.handleDecrement}>-</button>
          <button onClick={this.handleIncrement}>+</button>
        </p>
      </div>
    ) 
  }
  
}
//COMPONENTE FUNCIONAL
// export default function CounterFunc(){
//   const [count, setCount] = React.useState(0); // COMPONENTE FUNCIONAL

//   const handleIncrement = () =>{
//     setCount(count + 1);
//   }

//   const handleDecrement = () =>{
//     setCount(count - 1);
//   }

//   return(
//     <div>
//     <h1>Counter</h1>
//     <h2>{count}</h2>
//     <p>
//       <button onClick={handleDecrement}>-</button>
//       <button onClick={handleIncrement}>+</button>
//     </p>
//     </div>
//   )
// }
//En reemplazo de los metodos
// componentDidMount(){}
// componentDidUpdate(){}
// componentWillUnmount(){}
//Usamos React.useEffect(() => { Se ejecuta cada vez que el componente se monta y cada vez que se actualiza, revisa constantemente
// console.log('El componente se montó)
//}, []) Se está emulando el comportamiento de componentDidMount
// Lo que está entre corchetes es que es lo que va a revisar, al no haber nada, ejecuta al principio que es cuando se monta
//Si le paso por ejemplo count(que se cambia cada vez que le doy al + o -) emula el componentDidUpdate
//React.useEffect(() =>{
// return() => {
// console.log('El componente se desmontó);
//}
//})