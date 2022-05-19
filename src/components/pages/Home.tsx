import { useMutation, useQuery } from '@apollo/client';
import LoadingIcon from '@atoms/LoadingIcon';
import Text from '@atoms/Text';
import { Box, useDisclosure } from '@chakra-ui/react';
import ErrorMessage from '@molecules/ErrorMessage';
import Board from '@organism/Board';
import TaskModal from '@organism/TaskModal';
import ListingTemplate from '@templates/ListingTemplate';

import homeLanesOrderData from '@/constants/homeLanesData';
import { ADD_TASK, DELETE_TASK, GET_ALL_TASKS } from '@/graphql/tasks';
import {
  AddTaskMutationArgs,
  AddTaskMutationResult,
  DeleteTaskMutationArgs,
  DeleteTaskMutationResponse,
  GetAllTaskQueryResult,
} from '@/types/tasks';

const Home = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { data, loading, error, refetch } =
    useQuery<GetAllTaskQueryResult>(GET_ALL_TASKS);

  const [addTodo, { loading: addTaskLoading }] = useMutation<
    AddTaskMutationResult,
    AddTaskMutationArgs
  >(ADD_TASK);

  const [deleteTask] = useMutation<DeleteTaskMutationResponse, DeleteTaskMutationArgs>(
    DELETE_TASK,
  );

  const isEmpty = data && data.tasks.length === 0;

  const handleDeleteTask = async (id: string) => {
    await deleteTask({ variables: { task: { id } } });
    refetch();
  };

  return (
    <>
      {isOpen && (
        <TaskModal
          isOpen={isOpen}
          onClose={onClose}
          disableSubmitButton={addTaskLoading}
          submitButtonText={addTaskLoading ? 'Loading...' : 'Create'}
          onSubmit={(values) => {
            addTodo({ variables: { task: values } }).then(() => {
              onClose();
              refetch();
            });
          }}
        />
      )}
      <ListingTemplate onAddClick={onOpen}>
        <Box w="calc(100vw - 350px)" h="calc(100vh - 200px)" overflow="auto">
          {loading && <LoadingIcon mx="auto" display="block" />}

          {error && (
            <ErrorMessage
              mx="auto"
              message="An error occurred, try again later"
              onRetry={() => refetch()}
            />
          )}
          {!loading && isEmpty && (
            <Text size="xl" fontWeight="semibold" textAlign="center">
              No elements, try to create one
            </Text>
          )}

          {data && data.tasks.length > 0 && (
            <Board
              onDelete={handleDeleteTask}
              lanes={homeLanesOrderData.map((lane) => ({
                title: lane.title,
                cards: data.tasks.filter((task) => task.status === lane.status),
              }))}
            />
          )}
        </Box>
      </ListingTemplate>
    </>
  );
};

export default Home;
