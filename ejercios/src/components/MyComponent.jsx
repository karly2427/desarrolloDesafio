import { useState } from "react";
import ChildComponent from "./childComponent";
import Counter from "./counter";
const  MyComponent =()=>{
    const[name, setName]=useState("jose antonio torres");
    const[Edad, setEdad]=useState(20);

    const changeData=()=>{
        setName('Maria campos salazar');
        setEdad(19);
        }    
return(
    <>
        <div>Soy el componente padre</div>
        <div>Bienvenid@s</div> 
      
       <ChildComponent name={name} edad ={Edad} />
       <button onClick={changeData}>Cambiar Nombre y edad</button>   
    <Counter/>
    </>
    );
};
export default MyComponent
