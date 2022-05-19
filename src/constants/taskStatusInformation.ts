import TaskStatus from '@/enums/taskStatus';

type Status = {
  [K in TaskStatus]: {
    title: string;
  };
};

const taskStatusInformation: Status = {
  [TaskStatus.BACKLOG]: {
    title: 'Backlog',
  },
  [TaskStatus.CANCELLED]: {
    title: 'Cancelled',
  },
  [TaskStatus.DONE]: {
    title: 'Done',
  },
  [TaskStatus.IN_PROGRESS]: {
    title: 'In Progress',
  },
  [TaskStatus.TODO]: {
    title: 'Todo',
  },
};

export default taskStatusInformation;
