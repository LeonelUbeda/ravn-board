import { getHumanReadableDate } from '@/utils/date';
import Button from '@atoms/Button';
import { MenuButton, Menu, MenuList, MenuItem } from '@atoms/Menu';
import { Icon } from '@chakra-ui/react';
import DatePicker from 'react-datepicker';
import { RiCalendarCheckLine } from 'react-icons/ri';

type Props = { selected?: Date; onChange: (date: Date) => void };

const DueDateMenu = ({ selected, onChange }: Props) => {
  return (
    <Menu isLazy>
      <MenuButton as={Button} leftIcon={<Icon as={RiCalendarCheckLine} h="6" w="6" />}>
        {selected ? getHumanReadableDate(selected) : 'Due date'}
      </MenuButton>
      <MenuList p="0">
        <MenuItem p="0" closeOnSelect={false}>
          <DatePicker
            inline
            startDate={selected || new Date()}
            isClearable
            selected={selected}
            onChange={onChange}
          />
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default DueDateMenu;
