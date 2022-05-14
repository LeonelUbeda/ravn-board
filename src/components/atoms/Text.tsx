import { Text as ChakraText, TextProps } from '@chakra-ui/react';

const variants = {
  xl: {
    fontSize: 'xl',
    lineHeight: 'taller',
    letterSpacing: '0.046875rem',
  },
  l: {
    fontSize: 'lg',
    lineHeight: 'taller',
    letterSpacing: '0.015625rem',
  },
  m: {
    fontSize: '0.9375rem',
    lineHeight: '6',
    letterSpacing: '0.015625rem',
  },
  s: {
    fontSize: '0.8125rem',
    lineHeight: 'short',
    letterSpacing: '0.015625rem',
  },
};

type Variants = keyof typeof variants;
type Props = {
  variant: Variants;
} & TextProps;

const Text = ({ variant, ...props }: Props) => {
  return <ChakraText {...variants[variant]} {...props} />;
};

export default Text;
