
import { useState } from 'react';

export default function DocumentTitleChanger() {
  const [base_mayor, setBaseMayor] = useState('');
  const [base_menor, setBaseMenor] = useState('');
  const [altura, setAltura] = useState('');
  const [resultado, setResultado] = useState(0);

  const calcularArea = () => {
    setResultado(
      ((Number(base_mayor) + Number(base_menor)) * Number(altura)) / 2
    );
  }

  return (
    <div>
      <input
        value={base_mayor}
        onChange={(e) => setBaseMayor(e.target.value)}
        placeholder="Base mayor"
      />
      <br/>
      <input    
        value={base_menor}
        onChange={(e) => setBaseMenor(e.target.value)}
        placeholder="Base menor"
      />
      <br/>
      <input
        value={altura}
        onChange={(e) => setAltura(e.target.value)}
        placeholder="Altura"
      />
      <button onClick={calcularArea}>Calcular área</button>
      <p>Área del trapecio: {resultado}</p>
    </div>
  );
}
