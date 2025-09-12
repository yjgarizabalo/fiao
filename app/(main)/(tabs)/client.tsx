import {
  Avatar,
  AvatarFallbackText,
  Badge,
  BadgeText,
  Box,
  Button,
  ButtonText,
  Card,
  Heading,
  HStack,
  Pressable,
  ScrollView,
  Text,
  VStack,
} from '@gluestack-ui/themed';
import Header from '../../../components/Header';
import { Colors } from '../../../constants/Colors';


interface Client {
  id: string;
  name: string;
  status: 'al_dia' | 'debe';
  avatar?: string;
}

const mockClients: Client[] = [
  { id: '1', name: 'Juan Pérez', status: 'al_dia' },
  { id: '2', name: 'María García', status: 'debe' },
  { id: '3', name: 'Carlos López', status: 'al_dia' },
  { id: '4', name: 'Ana Martínez', status: 'debe' },
  { id: '5', name: 'Luis Rodríguez', status: 'al_dia' },
  { id: '6', name: 'Carmen Silva', status: 'debe' },
];

export default function ClientScreen() {
  const handleClientPress = (clientId: string) => {
    // TODO: Navegar a detalle del cliente
    console.log('Cliente seleccionado:', clientId);
  };

  const getStatusColor = (status: string) => {
    return status === 'al_dia' ? Colors.success : Colors.error;
  };

  const getStatusText = (status: string) => {
    return status === 'al_dia' ? 'Al día' : 'Debe';
  };

  const handleAddClient = () => {
    // TODO: Navegar a agregar cliente
    console.log('Agregar cliente');
  };

  return (
    <Box flex={1} bg="$backgroundLight50">
      <Header title="Clientes" />
      <VStack space="sm" alignItems="center" p="$3" mt="$2">
        <Heading size="2xl" textAlign="center">
          ¡Bienvenido👋!
        </Heading>
        <Text size="lg" color="$textLight600" textAlign="center">
          Gestiona tus clientes
        </Text>
      </VStack>
      <ScrollView flex={1} p="$4" contentContainerStyle={{ paddingBottom: 20 }}>
        <VStack space="md">
          {mockClients.map((client) => (
            <Card 
              key={client.id} 
              p="$4" 
              height={80}
              bg="$white" 
              borderRadius={14}
              borderWidth={1}
              borderColor="$borderLight200"
              shadowOpacity={0}
              elevation={0}
            >
              <Pressable onPress={() => handleClientPress(client.id)}>
                <HStack alignItems="center" justifyContent="space-between">
                  <HStack alignItems="center" space="md" flex={1}>
                    <Avatar size="sm" bg={Colors.gray400} borderRadius="$full">
                      <AvatarFallbackText>{client.name}</AvatarFallbackText>
                    </Avatar>
                    <VStack flex={1}>
                      <Text size="lg" fontWeight="$semibold">
                        {client.name}
                      </Text>
                      <Badge 
                        size="sm" 
                        variant="solid" 
                        bg={getStatusColor(client.status)}
                        alignSelf="flex-start"
                      >
                        <BadgeText color="$white">
                          {getStatusText(client.status)}
                        </BadgeText>
                      </Badge>
                    </VStack>
                  </HStack>
                  <Text size="xl" color="$textLight400">›</Text>
                </HStack>
              </Pressable>
            </Card>
          ))}
        </VStack>
      </ScrollView>
      <Box p="$4">
        <Button 
          size="lg"
          w="100%"
          h={52}
          borderRadius={14}
          bg={Colors.primary}
          $pressed={{
            bg: Colors.primaryHover
          }}
          onPress={handleAddClient}
        >
          <HStack alignItems="center" justifyContent="space-between" w="100%">
            <ButtonText color={Colors.white}>Agregar cliente</ButtonText>
            <Text color={Colors.white} size="xl">+</Text>
          </HStack>
        </Button>
      </Box>
    </Box>
  );
}