import Button from '@atoms/Button';
import { Menu, MenuButton, MenuItemOption, MenuList, MenuOptionGroup } from '@atoms/Menu';
import Text from '@atoms/Text';
import { Icon } from '@chakra-ui/react';
import { RiPriceTag3Fill } from 'react-icons/ri';

import taskTagsInformation from '@/constants/taskTagsInformation';
import TaskTag from '@/enums/taskTag';

import TitleMenu from './TitleMenu';

type Props = {
  onChange: (estimate: Array<TaskTag>) => void;
  selected?: Array<TaskTag>;
};

const TagsMenu = ({ onChange, selected = [] }: Props) => {
  const handleToggle = (value: TaskTag) => {
    if (selected.find((e) => e === value)) {
      onChange(selected.filter((e) => e !== value));
    } else {
      onChange([...selected, value]);
    }
  };

  return (
    <Menu>
      <MenuButton as={Button} leftIcon={<Icon as={RiPriceTag3Fill} h="6" w="6" />}>
        {selected.length > 0 ? taskTagsInformation[selected[0]].title : 'Label'}
      </MenuButton>
      <MenuList minWidth="fit-content">
        <TitleMenu text="Tag Title" />
        <MenuOptionGroup type="checkbox">
          {Object.keys(taskTagsInformation).map((tag) => (
            <MenuItemOption
              closeOnSelect={false}
              value={tag}
              onClick={() => handleToggle(tag as TaskTag)}
              isChecked={!!selected?.find((e) => e === tag)}
              key={tag}
            >
              <Text size="m">{taskTagsInformation[tag as TaskTag].title}</Text>
            </MenuItemOption>
          ))}
        </MenuOptionGroup>
      </MenuList>
    </Menu>
  );
};

export default TagsMenu;
