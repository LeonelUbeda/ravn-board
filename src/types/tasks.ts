import Estimate from '@/enums/estimate';
import TaskStatus from '@/enums/taskStatus';
import TaskTag from '@/enums/taskTag';

export type Task = {
  tags: Array<TaskTag>;
  name: string;
  pointEstimate: Estimate;
  dueDate: string;
  id: string;
  status: TaskStatus;
  assignee: {
    fullName: string;
    avatar: string;
    id: string;
  };
};

export type Tasks = Task[];

export type GetAllTaskQueryResult = {
  tasks: Tasks;
};

export type BasicTask = {
  assigneeId: string;
  dueDate: Date;
  name: string;
  pointEstimate: Estimate;
  status: TaskStatus;
  tags: Array<TaskTag>;
};

export type AddTaskMutationArgs = {
  task: BasicTask;
};

export type AddTaskMutationResult = {
  createTask: {
    id: string;
  };
};

export type DeleteTaskMutationArgs = {
  task: { id: string };
};

export type DeleteTaskMutationResponse = DeleteTaskMutationArgs;
