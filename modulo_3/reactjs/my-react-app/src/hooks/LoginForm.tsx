import { useState } from 'react'; // Ya no necesitas importar FormEvent

interface LoginData {
  email: string;
  password: string;
}

interface LoginFormProps {
  onLogin: (data: LoginData) => void;
}

export default function LoginForm({ onLogin }: LoginFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form 
      // TRUCO: Al poner la función aquí dentro, TypeScript ya sabe qué es "e"
      onSubmit={(e) => {
        e.preventDefault();
        onLogin({ email, password });
      }}
    >
      <input 
        type="email" 
        placeholder="Email"
        onChange={e => setEmail(e.target.value)} 
      /><br/>
      <input 
        type="password" 
        placeholder="Contraseña"
        onChange={e => setPassword(e.target.value)} 
      /><br/>
      <button type="submit">Iniciar sesión</button>
    </form>
  );
}