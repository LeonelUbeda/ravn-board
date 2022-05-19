import { useRef } from 'react';
import { ADD_TASK, DELETE_TASK, GET_ALL_TASKS } from '@/graphql/tasks';
import { useMutation, useQuery } from '@apollo/client';
import { Box, useDisclosure } from '@chakra-ui/react';
import ListingTemplate from '@templates/ListingTemplate';
import {
  GetAllTaskQueryResult,
  AddTaskMutationResult,
  AddTaskMutationArgs,
  DeleteTaskMutationResponse,
  DeleteTaskMutationArgs,
} from '@/types/tasks';
import Board from '@organism/Board';
import LoadingIcon from '@atoms/LoadingIcon';
import ErrorMessage from '@molecules/ErrorMessage';
import Text from '@atoms/Text';
import TaskModal from '@organism/TaskModal';
import homeLanesOrderData from '@/constants/homeLanesData';

const Home = () => {
  const { data, loading, error, refetch } =
    useQuery<GetAllTaskQueryResult>(GET_ALL_TASKS);
  const [addTodo, { loading: addTaskLoading }] = useMutation<
    AddTaskMutationResult,
    AddTaskMutationArgs
  >(ADD_TASK);

  const [deleteTask] = useMutation<DeleteTaskMutationResponse, DeleteTaskMutationArgs>(
    DELETE_TASK,
  );

  const boardContainerRef = useRef(null);

  const isEmpty = data && data.tasks.length === 0;
  const { isOpen, onClose, onOpen } = useDisclosure();

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
        <Box
          w="calc(100vw - 350px)"
          h="calc(100vh - 200px)"
          overflow="auto"
          ref={boardContainerRef}
          border="2px"
        >
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
