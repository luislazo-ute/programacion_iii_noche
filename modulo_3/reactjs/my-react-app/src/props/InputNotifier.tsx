interface InputNotifierProps {
  onChangeText: (text: string) => void;
}

export default function InputNotifier({ onChangeText }: InputNotifierProps) {
  // TypeScript sabe que 'e' es un evento de cambio de input automáticamente aquí
  return (
    <input 
      type="text" 
      onChange={(e) => onChangeText(e.target.value)} 
    />
  );
}