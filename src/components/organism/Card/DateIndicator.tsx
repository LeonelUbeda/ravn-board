import Badge from '@molecules/Badge';
import { differenceInDays } from 'date-fns';
import { RiTimerLine } from 'react-icons/ri';

import { BadgeColor } from '@/constants/badgeColorSchemes';
import { getHumanReadableDate } from '@/utils/date';

type Props = {
  date: Date;
};

const getColorScheme = (daysBeforeDate: number): BadgeColor => {
  return daysBeforeDate < 0 ? 'red' : daysBeforeDate <= 2 ? 'yellow' : 'white';
};

const DateIndicator = ({ date }: Props) => {
  const today = new Date();
  return (
    <Badge
      text={getHumanReadableDate(date)}
      ml="auto"
      icon={RiTimerLine}
      colorScheme={getColorScheme(differenceInDays(date, today))}
      upper
    />
  );
};

export default DateIndicator;
