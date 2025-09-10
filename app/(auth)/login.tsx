import {
  Box,
  Button,
  ButtonText,
  Heading,
  HStack,
  Image,
  Input,
  InputField,
  Pressable,
  Text,
  VStack
} from '@gluestack-ui/themed';
import { router } from 'expo-router';
import { useState } from 'react';
import { Colors } from '../../constants/Colors';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // TODO: Implementar lógica de login
    console.log('Login:', { email, password });
    router.replace('/(main)/(tabs)/home');
  };

  return (
    <Box flex={1} justifyContent="center" p="$6" bg="$white">
      <VStack space="lg" alignItems="center">
        <Image
          source={require('../../assets/images/fiaoicon.png')}
          alt="Fiao"
          w={100}
          h={100}
          mb="$0"
        />
        <Heading size="2xl" textAlign="center" mb="$5" fontSize={24}>
          Iniciar Sesión
        </Heading>

        <Input size="lg" w="100%" h={54} borderRadius={4}>
          <InputField
            placeholder="Correo / Usuario"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </Input>

        <Input size="lg" w="100%" h={54}>
          <InputField
            placeholder="Ingresa tu contraseña"
            value={password}
            onChangeText={setPassword}
            type="password"
          />
        </Input>

        <Pressable onPress={() => router.push('/(auth)/register')} mt="$2">
          <Text color={Colors.gray400}>
            ¿Olvidaste tu contraseña?{' '}
            <Text color={Colors.primary} textDecorationLine="underline" fontWeight="bold">
              Ingresa aquí
            </Text>
          </Text>
        </Pressable>

        <Button
          size="lg"
          w="100%"
          mt="$4"
          h={52}
          borderRadius={14}
          bg={Colors.primary}
          $pressed={{
            bg: Colors.primaryHover
          }}
          onPress={handleLogin}
        >
          <ButtonText color={Colors.white}>Iniciar</ButtonText>
        </Button>

        <Button
          size="lg"
          w="100%"
          h={52}
          borderRadius={14}
          bg={Colors.gray100}
          $pressed={{
            bg: Colors.gray200
          }}
          onPress={handleLogin}
        >
          <HStack space="sm" alignItems="center">
            <Image
              source={require('../../assets/images/googleicon.png')}
              alt="Google"
              w={20}
              h={20}
            />
            <ButtonText color={Colors.primary}>Iniciar con Google</ButtonText>
          </HStack>
        </Button>

        <Pressable onPress={() => router.push('/(auth)/register')} mt="$2">
          <Text color={Colors.gray400}>¿No tienes cuenta?{' '} <Text color={Colors.primary} textDecorationLine="underline" fontWeight="bold">Regístrate</Text></Text>
        </Pressable>
        
        <Box w="100%" h={60} mt="$6" bg={Colors.gray100} borderRadius={12} justifyContent="center" alignItems="center">
          <Text fontSize={12} color={Colors.gray500} fontWeight="bold">
            PATROCINADORES
          </Text>
        </Box>
      </VStack>
    </Box>
  );
}