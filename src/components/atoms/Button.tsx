import {
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps,
  forwardRef,
} from '@chakra-ui/react';

const Button = forwardRef<ChakraButtonProps, 'button'>((props, ref) => {
  return <ChakraButton _hover={{}} _active={{}} ref={ref} bg="neutral.300" {...props} />;
});

export default Button;
