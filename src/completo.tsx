const ClickCombi: React.FC = () => {
  let nombre: string = '';  
  let apellido: string = '';

  const hacerClick = (info: string) => {
    alert(`Bienvenido ${nombre} ${apellido}`);  
    console.log('Botón clickeado');
  };

  return (
    <div>
      <input type="text" onChange={(event) => { nombre = event.target.value }} placeholder="Nombre"/>
      <input type="text" onChange={(event) => { apellido = event.target.value }}  placeholder="Apellido"/>
      <button className="Click" onClick={() => hacerClick(nombre + apellido)}>Hacer Click</button>
    </div>
  );
};

export default ClickCombi;
