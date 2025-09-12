import { HStack, Image } from '@gluestack-ui/themed';

interface HeaderProps {
  title?: string;
}

export default function Header({ title = 'Fiao' }: HeaderProps) {
  return (
    <HStack 
      alignItems="flex-end" 
      space="md" 
      p="$4" 
      bg="$white" 
      borderBottomWidth={1} 
      borderBottomColor="$borderLight200"
      height={130}
    >
      <Image 
        source={require('../assets/images/icon.png')} 
        alt="Fiao Icon" 
        size="sm"
      />
    </HStack>
  );
}