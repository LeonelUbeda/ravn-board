import { IconButton, IconButtonProps } from '@chakra-ui/react';
import { RiAddLine } from 'react-icons/ri';

const AddElementButton = (props: IconButtonProps) => {
  return (
    <IconButton
      _hover={{ backgroundColor: 'primary.400' }}
      _active={{ backgroundColor: 'primary.400' }}
      _focus={{}}
      {...props}
      icon={<RiAddLine />}
      w="10"
      h="10"
      backgroundColor="primary.400"
      color="neutral.100"
    />
  );
};

export default AddElementButton;
