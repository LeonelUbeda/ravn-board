import { Icon, IconProps } from '@chakra-ui/react';
import { IconType } from 'react-icons';

type Props = { icon: IconType } & IconProps;

const CardIcon = ({ icon, ...props }: Props) => {
  return <Icon as={icon} w="6" color="neutral.200" h="6" {...props} />;
};

export default CardIcon;
