import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../../../constants/Colors';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ 
      headerShown: false,
      tabBarActiveTintColor: Colors.black,
      tabBarInactiveTintColor: Colors.gray400
    }}>
      <Tabs.Screen 
        name="client" 
        options={{ 
          title: 'Clientes',
          tabBarIcon: ({ focused }) => (
            <Ionicons 
              name="people" 
              size={24} 
              color={focused ? Colors.black : Colors.gray400} 
            />
          )
        }} 
      />
      <Tabs.Screen 
        name="profile" 
        options={{ 
          title: 'Perfil',
          tabBarIcon: ({ focused }) => (
            <Ionicons 
              name="person" 
              size={24} 
              color={focused ? Colors.black : Colors.gray400} 
            />
          )
        }} 
      />
    </Tabs>
  );
}