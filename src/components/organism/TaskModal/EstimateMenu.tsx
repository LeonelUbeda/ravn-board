import { Icon } from '@chakra-ui/react';
import Button from '@atoms/Button';
import { Menu, MenuButton, MenuItem, MenuList } from '@atoms/Menu';
import { RiIncreaseDecreaseFill } from 'react-icons/ri';
import Estimate from '@/enums/estimate';
import Text from '@atoms/Text';
import TitleMenu from './TitleMenu';
import estimateInformation from '@/constants/estimatesInformation';

type Props = {
  onSelect: (estimate: Estimate) => void;
  selected?: Estimate;
};

const EstimateMenu = ({ onSelect, selected }: Props) => {
  return (
    <Menu isLazy>
      <MenuButton as={Button} leftIcon={<Icon as={RiIncreaseDecreaseFill} h="6" w="6" />}>
        {selected ? estimateInformation[selected].title : 'Estimate'}
      </MenuButton>
      <MenuList minWidth="fit-content">
        <TitleMenu text="Estimate" />
        {Object.keys(estimateInformation).map((key) => (
          <MenuItem
            width="fit-content"
            onClick={() => onSelect(key as Estimate)}
            key={estimateInformation[key as Estimate].title}
          >
            <Icon as={RiIncreaseDecreaseFill} h="6" w="6" mr="2" />
            <Text size="m">{estimateInformation[key as Estimate].title}</Text>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default EstimateMenu;
