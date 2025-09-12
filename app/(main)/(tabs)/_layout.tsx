import { Tabs } from 'expo-router';
import { Text } from '@gluestack-ui/themed';
import { Colors } from '../../../constants/Colors';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen 
        name="client" 
        options={{ 
          title: 'Cliente',
          tabBarIcon: ({ focused }) => (
            <Text fontSize={20} color={focused ? Colors.success : Colors.primary}>👥</Text>
          )
        }} 
      />
      <Tabs.Screen 
        name="profile" 
        options={{ 
          title: 'Perfil',
          tabBarIcon: ({ focused }) => (
            <Text fontSize={20} color={focused ? Colors.success : Colors.primary}>👤</Text>
          )
        }} 
      />
    </Tabs>
  );
}