import { Icon, IconProps } from '@chakra-ui/react';
import { RiLoader3Fill } from 'react-icons/ri';

const LoadingIcon = (props: IconProps) => {
  return (
    <Icon
      as={RiLoader3Fill}
      w="20"
      h="20"
      sx={{ animation: 'rotation 1s infinite linear' }}
      {...props}
    />
  );
};

export default LoadingIcon;
