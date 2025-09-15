import { Ionicons } from '@expo/vector-icons';
import {
  Avatar,
  AvatarFallbackText,
  Box,
  Button,
  ButtonText,
  Card,
  Heading,
  HStack,
  Pressable,
  ScrollView,
  Text,
  VStack
} from '@gluestack-ui/themed';
import { router } from 'expo-router';
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
    router.replace('/(client)/credit');
  };

  return (
    <Box flex={1} bg="$backgroundLight50">
      <Header title="Clientes" />
      <Box bg="$white" p="$4" borderBottomWidth={1} borderBottomColor="$borderLight200">
        <VStack space="xs" alignItems="center">
          <Heading size="xl" color={Colors.primary}>
            Mis Clientes
          </Heading>
          <Text size="sm" color="$textLight500">
            {mockClients.length} clientes registrados
          </Text>
        </VStack>
      </Box>
      <ScrollView flex={1} p="$4" contentContainerStyle={{ paddingBottom: 20 }}>
        <VStack space="md">
          {mockClients.map((client) => (
            <Card 
              key={client.id} 
              p="$4" 
              bg="$white" 
              borderRadius={12}
              borderWidth={1}
              borderColor="$borderLight200"
              shadowOpacity={0}
              elevation={0}
              $pressed={{
                bg: "$backgroundLight100",
                borderColor: Colors.primary
              }}
            >
              <Pressable onPress={() => handleClientPress(client.id)}>
                <HStack alignItems="center" justifyContent="space-between">
                  <HStack alignItems="center" space="md" flex={1}>
                    <Avatar size="md" bg={Colors.gray200} borderRadius="$full">
                      <AvatarFallbackText color={Colors.gray600}>{client.name}</AvatarFallbackText>
                    </Avatar>
                    <VStack flex={1}>
                      <Text size="md" fontWeight="$semibold" color={Colors.primary}>
                        {client.name}
                      </Text>
                      <HStack alignItems="center" space="xs">
                        <Box 
                          w={8} 
                          h={8} 
                          borderRadius="$full" 
                          bg={getStatusColor(client.status)}
                        />
                        <Text size="sm" color={getStatusColor(client.status)} fontWeight="$medium">
                          {getStatusText(client.status)}
                        </Text>
                      </HStack>
                    </VStack>
                  </HStack>
                  <Ionicons 
                    name="chevron-forward" 
                    size={20} 
                    color={Colors.gray400} 
                  />
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
            <Ionicons name="add" size={20} color={Colors.white} />
          </HStack>
        </Button>
      </Box>
    </Box>
  );
}