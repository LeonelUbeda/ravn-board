import {
  MenuItem as ChakraMenuItem,
  MenuItemProps as ChakraMenuItemProps,
} from '@chakra-ui/react';

const MenuItem = (props: ChakraMenuItemProps) => {
  return (
    <ChakraMenuItem
      px="4"
      bg="neutral.300"
      _hover={{ bgColor: 'neutral.400' }}
      _focus={{}}
      _active={{}}
      {...props}
    />
  );
};

export default MenuItem;
