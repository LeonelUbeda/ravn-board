import {
  MenuList as ChakraMenuList,
  MenuListProps as ChakraMenuListProps,
} from '@chakra-ui/react';

const MenuList = (props: ChakraMenuListProps) => {
  return <ChakraMenuList bg="neutral.300" py="2" {...props} />;
};

export default MenuList;
