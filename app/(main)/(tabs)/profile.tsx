import {
  Box,
  VStack,
  Heading,
  Text,
  Card,
  Avatar,
  AvatarFallbackText,
} from '@gluestack-ui/themed';

export default function ProfileScreen() {
  return (
    <Box flex={1} p="$6" bg="$backgroundLight50">
      <VStack space="xl" flex={1}>
        <VStack space="sm" alignItems="center" mt="$16">
          <Avatar size="xl" bg="$primary600">
            <AvatarFallbackText>Usuario</AvatarFallbackText>
          </Avatar>
          <Heading size="2xl" textAlign="center">
            Perfil
          </Heading>
          <Text size="lg" color="$textLight600" textAlign="center">
            Información del usuario
          </Text>
        </VStack>
        
        <Box flex={1} justifyContent="center">
          <Card p="$6" bg="$white" borderRadius="$lg">
            <VStack space="md">
              <Text size="md" textAlign="center" lineHeight="$lg">
                Aquí puedes mostrar y editar la información del perfil del usuario.
              </Text>
              
              <VStack space="sm">
                <Text size="sm" color="$textLight500">Nombre:</Text>
                <Text size="md">Usuario Ejemplo</Text>
              </VStack>
              
              <VStack space="sm">
                <Text size="sm" color="$textLight500">Email:</Text>
                <Text size="md">usuario@ejemplo.com</Text>
              </VStack>
            </VStack>
          </Card>
        </Box>
      </VStack>
    </Box>
  );
}