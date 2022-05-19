import Button from '@atoms/Button';
import { Menu, MenuButton, MenuItem, MenuList } from '@atoms/Menu';
import Text from '@atoms/Text';
import { Icon } from '@chakra-ui/react';
import { RiIncreaseDecreaseFill } from 'react-icons/ri';

import taskEstimatesInformation from '@/constants/taskEstimatesInformation';
import TaskEstimate from '@/enums/taskEstimate';

import TitleMenu from './TitleMenu';

type Props = {
  onSelect: (estimate: TaskEstimate) => void;
  selected?: TaskEstimate;
};

const EstimateMenu = ({ onSelect, selected }: Props) => {
  return (
    <Menu isLazy>
      <MenuButton as={Button} leftIcon={<Icon as={RiIncreaseDecreaseFill} h="6" w="6" />}>
        {selected ? taskEstimatesInformation[selected].title : 'Estimate'}
      </MenuButton>
      <MenuList minWidth="fit-content">
        <TitleMenu text="Estimate" />
        {Object.keys(taskEstimatesInformation).map((key) => (
          <MenuItem
            width="fit-content"
            onClick={() => onSelect(key as TaskEstimate)}
            key={taskEstimatesInformation[key as TaskEstimate].title}
          >
            <Icon as={RiIncreaseDecreaseFill} h="6" w="6" mr="2" />
            <Text size="m">{taskEstimatesInformation[key as TaskEstimate].title}</Text>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default EstimateMenu;
