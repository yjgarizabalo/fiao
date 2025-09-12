import { Redirect } from 'expo-router';

export default function Index() {
  // TODO: Verificar si el usuario está autenticado
  const isAuthenticated = false;
  
  if (isAuthenticated) {
    return <Redirect href="/(main)/(tabs)/client" />;
  }
  
  return <Redirect href="/(auth)/login" />;
}