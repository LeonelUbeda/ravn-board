import Button from '@atoms/Button';
import { Menu, MenuButton, MenuItem, MenuList } from '@atoms/Menu';
import Text from '@atoms/Text';
import { Avatar, Box, Icon } from '@chakra-ui/react';
import { RiUser3Fill } from 'react-icons/ri';

import { Users } from '@/types/user';

import TitleMenu from './TitleMenu';

type Props = {
  onSelect: (assigneeId: string) => void;
  users: Users | [];
  selected?: string;
};

const AssigneeMenu = ({ onSelect, selected, users }: Props) => {
  const selectedUser = users.find(({ id }) => id === selected);
  return (
    <Menu isLazy>
      {selectedUser ? (
        <MenuButton as={Button} bgColor="transparent" minW="32" maxW="48">
          <Box display="flex" alignItems="center">
            <Avatar
              name={selectedUser.fullName}
              size="sm"
              src={selectedUser.avatar}
              mr="2"
            />
            <Text size="m" noOfLines={0}>
              {selectedUser.fullName}
            </Text>
          </Box>
        </MenuButton>
      ) : (
        <MenuButton
          as={Button}
          width="32"
          leftIcon={<Icon as={RiUser3Fill} h="6" w="6" />}
        >
          Assignee
        </MenuButton>
      )}

      <MenuList>
        <TitleMenu text="Assign To..." />
        {users &&
          users.map((user) => (
            <MenuItem key={user.id} onClick={() => onSelect(user.id)}>
              <Avatar name={user.fullName} size="sm" src={user.avatar} mr="2" />{' '}
              <Text size="m">{user.fullName}</Text>
            </MenuItem>
          ))}
      </MenuList>
    </Menu>
  );
};

export default AssigneeMenu;
