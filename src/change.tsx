const Change :React.FC=()=>{
    let nombre:string;
    const cambio=(dato:string)=>{
        nombre=dato;
        console.log(dato)

    }
    return(
        <div>
            <input type="text" onChange={(event)=> cambio(event.target.value)} placeholder="escriba aqui"></input>
        </div>
    )
}
export default Change;