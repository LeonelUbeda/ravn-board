import Button from '@atoms/Button';
import { Menu, MenuButton, MenuItem, MenuList } from '@atoms/Menu';
import Text from '@atoms/Text';

import taskStatusInformation from '@/constants/taskStatusInformation';
import TaskStatus from '@/enums/taskStatus';

import TitleMenu from './TitleMenu';

type Props = {
  onSelect: (estimate: TaskStatus) => void;
  selected?: TaskStatus;
};

const StatusMenu = ({ onSelect, selected }: Props) => {
  return (
    <Menu isLazy>
      <MenuButton as={Button}>
        {selected ? taskStatusInformation[selected].title : 'Status'}
      </MenuButton>
      <MenuList minWidth="fit-content">
        <TitleMenu text="Status" />
        {Object.keys(taskStatusInformation).map((key) => (
          <MenuItem
            width="fit-content"
            onClick={() => onSelect(key as TaskStatus)}
            key={taskStatusInformation[key as TaskStatus].title}
          >
            <Text size="m">{taskStatusInformation[key as TaskStatus].title}</Text>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default StatusMenu;
