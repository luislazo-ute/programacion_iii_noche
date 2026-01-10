import LoginForm from "./LoginForm";

export default function ParentLoginForm() {
  
  // Definimos que 'data' es un objeto con email y password
  const handleLogin = (data: { email: string; password: string }) => {
    console.log("Login exitoso:", data);
  };

  return <LoginForm onLogin={handleLogin} />;
}