import {
  Box,
  VStack,
  Heading,
  Text,
  Input,
  InputField,
  Button,
  ButtonText,
  HStack,
  Pressable,
} from '@gluestack-ui/themed';
import { useState } from 'react';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import Header from '../../components/Header';
import { Colors } from '../../constants/Colors';
import { useClients } from '../../contexts/ClientContext';

export default function AddClientCreditScreen() {
  const { addClient } = useClients();
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [cedula, setCedula] = useState('');
  const [errors, setErrors] = useState<{nombre?: string; apellido?: string}>({});

  const validateForm = () => {
    const newErrors: {nombre?: string; apellido?: string} = {};
    
    if (!nombre.trim()) {
      newErrors.nombre = 'El nombre es obligatorio';
    }
    
    if (!apellido.trim()) {
      newErrors.apellido = 'El apellido es obligatorio';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = () => {
    if (validateForm()) {
      addClient({
        name: nombre,
        lastName: apellido,
        cedula: cedula || undefined
      });
      router.back();
    }
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <Box flex={1} bg="$backgroundLight50">
      <Header title="Agregar Cliente" />
      
      <Box p="$4">
        <HStack alignItems="center" space="md" mb="$4">
          <Pressable onPress={handleBack}>
            <Ionicons name="arrow-back" size={24} color={Colors.primary} />
          </Pressable>
          <Heading size="lg" color={Colors.primary}>
            Nuevo Cliente
          </Heading>
        </HStack>

        <VStack space="lg">
          <VStack space="sm">
            <Text size="sm" fontWeight="$medium" color={Colors.primary}>
              Nombre *
            </Text>
            <Input 
              size="lg" 
              w="100%" 
              h={54} 
              borderRadius={4}
              borderColor={errors.nombre ? Colors.error : "$borderLight200"}
            >
              <InputField
                placeholder="Ingresa el nombre"
                value={nombre}
                onChangeText={setNombre}
              />
            </Input>
            {errors.nombre && (
              <Text size="xs" color={Colors.error}>
                {errors.nombre}
              </Text>
            )}
          </VStack>

          <VStack space="sm">
            <Text size="sm" fontWeight="$medium" color={Colors.primary}>
              Apellido *
            </Text>
            <Input 
              size="lg" 
              w="100%" 
              h={54} 
              borderRadius={4}
              borderColor={errors.apellido ? Colors.error : "$borderLight200"}
            >
              <InputField
                placeholder="Ingresa el apellido"
                value={apellido}
                onChangeText={setApellido}
              />
            </Input>
            {errors.apellido && (
              <Text size="xs" color={Colors.error}>
                {errors.apellido}
              </Text>
            )}
          </VStack>

          <VStack space="sm">
            <Text size="sm" fontWeight="$medium" color={Colors.primary}>
              Cédula
            </Text>
            <Input 
              size="lg" 
              w="100%" 
              h={54} 
              borderRadius={4}
            >
              <InputField
                placeholder="Ingresa la cédula (opcional)"
                value={cedula}
                onChangeText={setCedula}
                keyboardType="numeric"
              />
            </Input>
          </VStack>

          <Button 
            size="lg"
            w="100%"
            h={52}
            borderRadius={14}
            bg={Colors.primary}
            $pressed={{
              bg: Colors.primaryHover
            }}
            onPress={handleSave}
            mt="$6"
          >
            <ButtonText color={Colors.white}>Guardar Cliente</ButtonText>
          </Button>
        </VStack>
      </Box>
    </Box>
  );
}