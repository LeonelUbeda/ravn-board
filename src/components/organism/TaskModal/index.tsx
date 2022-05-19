import { useQuery } from '@apollo/client';
import Button from '@atoms/Button';
import {
  HStack,
  Input,
  Modal,
  ModalContent,
  ModalOverlay,
  Stack,
} from '@chakra-ui/react';
import { useState } from 'react';

import TaskEstimate from '@/enums/taskEstimate';
import TaskStatus from '@/enums/taskStatus';
import TaskTag from '@/enums/taskTag';
import { GET_USERS } from '@/graphql/users';
import { BasicTask } from '@/types/tasks';
import { UsersData } from '@/types/user';

import AssigneeMenu from './AssigneeMenu';
import DueDateMenu from './DueDateMenu';
import EstimateMenu from './EstimateMenu';
import StatusMenu from './StatusMenu';
import TagsMenu from './TagsMenu';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  initialInformation?: Partial<BasicTask>;
  onSubmit: (task: BasicTask) => void;
  submitButtonText: string;
  disableSubmitButton?: boolean;
};

const TaskModal = ({
  disableSubmitButton,
  isOpen,
  onClose,
  initialInformation = {},
  onSubmit,
  submitButtonText,
}: Props) => {
  const [assigneeId, setAssigneeId] = useState(initialInformation?.assigneeId);

  const [title, setTitle] = useState('');
  const [pointEstimate, setPointEstimate] = useState<TaskEstimate | undefined>(
    initialInformation?.pointEstimate,
  );

  const [dueDate, setDueDate] = useState<Date | undefined>(initialInformation?.dueDate);

  const [status, setStatus] = useState<TaskStatus>();

  const [tags, setTags] = useState<Array<TaskTag>>(initialInformation?.tags || []);

  const isTaskValid =
    assigneeId &&
    pointEstimate &&
    dueDate &&
    tags.length > 0 &&
    title.length > 2 &&
    status;

  const { data: usersData, loading: usersLoading } = useQuery<UsersData>(GET_USERS);

  const handleSubmit = () => {
    if (isTaskValid) {
      onSubmit({ assigneeId, dueDate, pointEstimate, tags, name: title, status });
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay backdropFilter="blur(5px)" />
      <ModalContent bgColor="neutral.400" p="4" width="fit-content" maxW="fit-content">
        <Stack spacing="6" width="fit-content">
          <Input
            value={title}
            onChange={({ target: { value } }) => setTitle(value)}
            fontWeight="bold"
            placeholder="Task Title"
            fontSize="xl"
            border="none"
            _focus={{ border: 'none' }}
          />
          <HStack spacing="4">
            <EstimateMenu selected={pointEstimate} onSelect={setPointEstimate} />
            <AssigneeMenu
              users={!usersLoading && usersData?.users.length ? usersData.users : []}
              onSelect={setAssigneeId}
              selected={assigneeId}
            />
            <StatusMenu selected={status} onSelect={setStatus} />
            <TagsMenu onChange={(value) => setTags(value)} selected={tags} />
            <DueDateMenu onChange={(date) => setDueDate(date)} selected={dueDate} />
          </HStack>
          <HStack display="flex" spacing="6" justifyContent="right">
            <Button variant="ghost" onClick={onClose}>
              Cancel
            </Button>
            <Button
              bg="primary.400"
              color="neutral.100"
              disabled={!isTaskValid || disableSubmitButton}
              onClick={handleSubmit}
            >
              {submitButtonText}
            </Button>
          </HStack>
        </Stack>
      </ModalContent>
    </Modal>
  );
};

export default TaskModal;
