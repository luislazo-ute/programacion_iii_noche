// 1. Definimos la interfaz de las props
interface IncrementButtonProps {
  onIncrement: () => void;
}

// 2. Aplicamos el tipo y desestructuramos la prop para un código más limpio
export default function IncrementButton({ onIncrement }: IncrementButtonProps) {
  return <button onClick={onIncrement}>Sumar 1</button>;
}