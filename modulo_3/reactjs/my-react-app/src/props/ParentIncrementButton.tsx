import { useState } from "react";
import IncrementButton from "./IncrementButton";

export default function ParentIncrementButton() {
  // TypeScript infiere automáticamente que 'count' es de tipo 'number'
  // porque el valor inicial es 0.
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);

  return (
    <>
      <p>Contador: {count}</p>
      {/* Como definimos en el paso anterior que IncrementButton 
        espera una función () => void, y 'increment' cumple eso, 
        todo conecta perfecto.
      */}
      <IncrementButton onIncrement={increment} />
    </>
  );
}