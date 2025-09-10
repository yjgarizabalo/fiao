import { router } from 'expo-router';
import {
  Box,
  VStack,
  Heading,
  Text,
  Button,
  ButtonText,
  Card,
} from '@gluestack-ui/themed';

export default function HomeScreen() {
  const handleLogout = () => {
    // TODO: Implementar lógica de logout
    router.replace('/(auth)/login');
  };

  return (
    <Box flex={1} p="$6" bg="$backgroundLight50">
      <VStack space="xl" flex={1}>
        <VStack space="sm" alignItems="center" mt="$16">
          <Heading size="3xl" textAlign="center">
            ¡Bienvenido a Fiao!
          </Heading>
          <Text size="lg" color="$textLight600" textAlign="center">
            Pantalla Principal
          </Text>
        </VStack>
        
        <Box flex={1} justifyContent="center">
          <Card p="$6" bg="$white" borderRadius="$lg">
            <Text size="md" textAlign="center" lineHeight="$lg">
              Esta es tu pantalla de inicio. Aquí puedes agregar el contenido principal de tu aplicación.
            </Text>
          </Card>
        </Box>
        
        <Button action="negative" size="lg" onPress={handleLogout} mb="$10">
          <ButtonText>Cerrar Sesión</ButtonText>
        </Button>
      </VStack>
    </Box>
  );
}