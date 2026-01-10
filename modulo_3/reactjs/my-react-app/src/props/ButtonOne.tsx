// 1. Definimos la interfaz para las props
interface ButtonOneProps {
  onClick: () => void; // Una función que no devuelve nada
}

// 2. Asignamos el tipo a las props
export default function ButtonOne({ onClick }: ButtonOneProps) {
  return <button onClick={onClick}>Haz clic aquí</button>;
}