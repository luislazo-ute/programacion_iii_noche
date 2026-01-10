import { useMemo, useState } from 'react';

function slowSquare(n: number): number {
  console.log('Calculando...');
  for (let i = 0; i < 1e9; i++) {} // bucle lento
  return n * n;
}

const ExpensiveCalc: React.FC = () => {
  const [number, setNumber] = useState<number>(1);
  const [count, setCount] = useState<number>(0);

  const result = useMemo<number>(() => slowSquare(number), [number]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setNumber(Number(e.target.value));
  };

  return (
    <>
      <p>Resultado: {result}</p>

      <input
        type="number"
        value={number}
        onChange={handleChange}
      />

      <button onClick={() => setCount((prev) => prev + 1)}>
        Re-renderizar {count}
      </button>
    </>
  );
};

export default ExpensiveCalc;
