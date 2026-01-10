import { useState, useCallback } from 'react';

const Contador: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const incrementar = useCallback((): void => {
    setCount((c) => c + 1);
  }, []);

  return (
    <button onClick={incrementar}>
      Contador: {count}
    </button>
  );
};

export default Contador;
