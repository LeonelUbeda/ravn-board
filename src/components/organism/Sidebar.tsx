import SidebarItem from '@atoms/SidebarItem';
import Text from '@atoms/Text';
import { Box, BoxProps, Image } from '@chakra-ui/react';
import RavnLogo from '@icons/ravn-logo.svg';
import { RiFunctionLine, RiMenuLine } from 'react-icons/ri';
import { useLocation, matchPath, Link } from 'react-router-dom';

type Props = {} & BoxProps;
const Sidebar: React.FC<Props> = ({ children, ...props }) => {
  const { pathname } = useLocation();
  return (
    <Box backgroundColor="neutral.400" borderRadius="3xl" py="3.5" {...props}>
      <Image src={RavnLogo} mb="10" w="10" h="10" mx="auto" />
      <SidebarItem icon={RiFunctionLine} to="/" isSelected={!!matchPath('/', pathname)}>
        <Text variant="m" as="li" listStyleType="none">
          Dashboard
        </Text>
      </SidebarItem>
      <SidebarItem
        icon={RiMenuLine}
        to="/tasks"
        isSelected={!!matchPath('/tasks', pathname)}
      >
        <Text variant="m" as="li" listStyleType="none">
          Tasks
        </Text>
      </SidebarItem>
    </Box>
  );
};

export default Sidebar;
