import { useState } from 'react'; // Ya no necesitas importar FormEvent

interface SumaData {
  num1: number;
  num2: number;
}

interface SumaProps {
  onSuma: (data: SumaData) => void;
}

export default function Suma({ onSuma }: SumaProps) {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");

  return (
    <form 
      // TRUCO: Al poner la función aquí dentro, TypeScript ya sabe qué es "e"
      onSubmit={(e) => {
        e.preventDefault();
        onSuma({ num1: Number(num1), num2: Number(num2) });
      }}
    >
      <input 
        type="number" 
        placeholder="Número 1"
        onChange={e => setNum1(e.target.value)} 
      /><br/>
      <input 
        type="number" 
        placeholder="Número 2"
        onChange={e => setNum2(e.target.value)} 
      /><br/>
      <button type="submit">SUMAR</button>

      LA SUMA ES: {Number(num1) + Number(num2)}
    
    </form>
  );
}