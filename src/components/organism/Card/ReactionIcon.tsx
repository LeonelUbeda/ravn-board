import Text from '@atoms/Text';
import { Box, Icon } from '@chakra-ui/react';
import { RiAttachmentLine, RiChat3Line, RiNodeTree } from 'react-icons/ri';

const icons = {
  attachment: RiAttachmentLine,
  nodeTree: RiNodeTree,
  chat: RiChat3Line,
};

type Props = {
  icon: keyof typeof icons;
  number?: number;
};

const ReactionIcon = ({ icon, number }: Props) => {
  return (
    <Box display="flex" alignItems="center">
      {number && (
        <Text size="m" mr="1" fontWeight="medium">
          {number}
        </Text>
      )}
      <Icon as={icons[icon]} h="4" w="4" />
    </Box>
  );
};

export default ReactionIcon;
