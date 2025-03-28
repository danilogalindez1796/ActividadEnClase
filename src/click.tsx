import "./StyleClick.css";

const Click: React.FC = () => {
  const nombre: string = "Danilo";

  const hacerClick = (name: string) => {
    alert(`Bienvenido ${name}`);
    console.log(name);
  };

  return (
    <div>
      <button className="botonClick" onClick={() => hacerClick(nombre)}>Hacer Click</button>
    </div>
  );
};

export default Click;
