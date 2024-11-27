import {useState} from 'react';
const Counter=()=>{
const [counter,setCounter]=useState(0);

const IncrementCounter=()=>{
setCounter(counter + 1);
}
const AumentarDos =()=>{
setCounter(counter + 2);
}
const restablecer=()=>{
setCounter(0);
}
return(
    <>
<div>
<p>contador :{counter}</p>
<button onClick={IncrementCounter}>incremnetar</button>
<button onClick={AumentarDos}>Aumentar dos</button>
<button onClick={restablecer}>restablecer</button>
</div>
</>

);
}
export default Counter
