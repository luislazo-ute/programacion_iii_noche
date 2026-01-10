import Suma from "./Suma";

export default function ParentSuma() {
  
  // Definimos que 'data' es un objeto con num1 y num2
  const sumaData = (data: { num1: number; num2: number }) => {
    console.log("Suma exitosa:", data.num1 + data.num2);
  };

  return <Suma onSuma={sumaData} />;
}