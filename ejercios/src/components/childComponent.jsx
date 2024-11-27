const ChildComponent = (props)=>{
    return(
    <>
        <div>
        <h1>Soy el componente hijo</h1> 
        <h4>mi nombre es:{props.name}</h4>
        <h4>mi edad es: {props.edad}</h4>
         </div>
    
    </>
    );
};


export default ChildComponent