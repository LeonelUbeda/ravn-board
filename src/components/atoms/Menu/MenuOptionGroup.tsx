import {
  MenuOptionGroup as ChakraMenuOptionGroup,
  MenuOptionGroupProps as ChakraMenuOptionGroupProps,
} from '@chakra-ui/react';

const MenuList = (props: ChakraMenuOptionGroupProps) => {
  return <ChakraMenuOptionGroup bg="neutral.300" py="2" {...props} />;
};

export default MenuList;
