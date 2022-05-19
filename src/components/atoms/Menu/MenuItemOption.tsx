import {
  MenuItemOption as ChakraMenuItemOption,
  MenuItemOptionProps as ChakraMenuItemOptionProps,
} from '@chakra-ui/react';

const MenuItem = (props: ChakraMenuItemOptionProps) => {
  return (
    <ChakraMenuItemOption
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
