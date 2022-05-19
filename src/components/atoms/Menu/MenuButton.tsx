import Button from '@atoms/Button';
import {
  MenuButton as ChakraMenuButton,
  MenuButtonProps as ChakraMenuButtonProps,
} from '@chakra-ui/react';

type Props = {
  leftIcon?: React.ReactNode;
} & ChakraMenuButtonProps;

const MenuButton = (props: Props) => {
  return (
    <ChakraMenuButton
      bg="neutral.300"
      borderColor="neutral.200"
      as={Button}
      _hover={{}}
      _active={{}}
      {...props}
    />
  );
};

export default MenuButton;
