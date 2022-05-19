import TaskTag from '@/enums/taskTag';

import { BadgeColor } from './badgeColorSchemes';

type Tags = {
  [K in TaskTag]: {
    color: BadgeColor;
    title: string;
  };
};

const taskTagsInformation: Tags = {
  [TaskTag.ANDROID]: {
    color: 'yellow',
    title: 'Android',
  },
  [TaskTag.IOS]: {
    color: 'green',
    title: 'IOS APP',
  },
  [TaskTag.NODE_JS]: {
    color: 'red',
    title: 'Node JS',
  },
  [TaskTag.RAILS]: {
    color: 'red',
    title: 'Rails',
  },
  [TaskTag.REACT]: {
    color: 'yellow',
    title: 'React JS',
  },
};

export default taskTagsInformation;
