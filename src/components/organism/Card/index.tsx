import Button from '@atoms/Button';
import { Menu, MenuButton, MenuItem, MenuList } from '@atoms/Menu';
import Text from '@atoms/Text';
import { Avatar, Box, HStack, Icon, Stack } from '@chakra-ui/react';
import Badge from '@molecules/Badge';
import parseISO from 'date-fns/parseISO';
import { RiDeleteBin6Line, RiMoreLine } from 'react-icons/ri';

import taskEstimatesInformation from '@/constants/taskEstimatesInformation';
import taskTagsInformation from '@/constants/taskTagsInformation';
import { Task } from '@/types/tasks';

import CardIcon from './CardIcon';
import DateIndicator from './DateIndicator';
import ReactionIcon from './ReactionIcon';

type Props = { onDelete?: () => void } & Pick<
  Task,
  'name' | 'assignee' | 'dueDate' | 'pointEstimate' | 'tags' | 'status'
>;

const Card = ({
  status,
  name,
  assignee,
  dueDate,
  pointEstimate,
  tags,
  onDelete,
}: Props) => {
  return (
    <Stack spacing="4" bgColor="neutral.400" borderRadius="md" p="4" h="full">
      <Box display="flex" alignItems="center">
        <Text size="l">{name}</Text>
        <Menu>
          <MenuButton ml="auto" bg="transparent" as={Button}>
            <CardIcon icon={RiMoreLine} />
          </MenuButton>
          <MenuList>
            <MenuItem onClick={onDelete}>
              <CardIcon icon={RiDeleteBin6Line} mr="2" />
              <Text size="m">Delete</Text>
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>
      <Box display="flex" alignItems="center">
        <Text size="l">{taskEstimatesInformation[pointEstimate].title}</Text>
        <DateIndicator date={parseISO(dueDate)} />
      </Box>
      <Box display="flex" flexWrap="wrap" gap="2">
        {tags.map((tag) => (
          <Badge
            key={tag}
            text={taskTagsInformation[tag].title}
            mr="2"
            colorScheme={taskTagsInformation[tag].color}
            upper
          />
        ))}
      </Box>
      <Box display="flex" flexWrap="wrap">
        <Avatar size="sm" name={assignee.fullName} src={assignee.avatar} />
        <HStack ml="auto" spacing="4" display="flex" alignItems="center">
          <ReactionIcon icon="attachment" />
          <ReactionIcon icon="nodeTree" number={5} />
          <ReactionIcon icon="chat" number={3} />
        </HStack>
      </Box>
    </Stack>
  );
};

export default Card;
