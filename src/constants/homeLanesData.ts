import TaskStatus from '@/enums/taskStatus';
import taskStatusInformation from './taskStatusInformation';

const homeLanesOrderData = [
  { title: taskStatusInformation[TaskStatus.BACKLOG].title, status: TaskStatus.BACKLOG },
  { title: taskStatusInformation[TaskStatus.TODO].title, status: TaskStatus.TODO },
  {
    title: taskStatusInformation[TaskStatus.IN_PROGRESS].title,
    status: TaskStatus.IN_PROGRESS,
  },
  { title: taskStatusInformation[TaskStatus.DONE].title, status: TaskStatus.DONE },
  {
    title: taskStatusInformation[TaskStatus.CANCELLED].title,
    status: TaskStatus.CANCELLED,
  },
];

export default homeLanesOrderData;
