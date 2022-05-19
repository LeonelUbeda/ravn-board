import { Box, BoxProps, Icon } from '@chakra-ui/react';
import { IconType } from 'react-icons';
import { Link } from 'react-router-dom';

type Props = {
  icon: IconType;
  to: string;
  isSelected?: boolean;
} & BoxProps;

const SidebarItem = ({ icon, children, isSelected, to, ...props }: Props) => {
  return (
    <Box
      py="4"
      pl="5"
      pr="4"
      display="flex"
      alignItems="center"
      cursor="pointer"
      _hover={{ color: 'primary.400' }}
      textTransform="uppercase"
      fontWeight="bold"
      borderRight={isSelected ? '4px' : undefined}
      borderColor={isSelected ? 'primary.400' : undefined}
      as={Link}
      to={to}
      {...props}
    >
      <Icon as={icon} w="18px" height="18px" mr="5" />
      {children}
    </Box>
  );
};

export default SidebarItem;
