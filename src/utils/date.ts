import { differenceInDays, format, set } from 'date-fns';
import enUS from 'date-fns/locale/en-US';

export const getHumanReadableDate = (date: Date) => {
  const differenceInDaysFromToday = differenceInDays(
    set(new Date(), { hours: 0, minutes: 0, seconds: 0, milliseconds: 0 }),
    set(date, { hours: 0, minutes: 0, seconds: 0, milliseconds: 0 }),
  );
  switch (differenceInDaysFromToday) {
    case 0:
      return 'Today';
    case 1:
      return 'Yesterday';
    default:
      return format(date, `d LLLL ',' yyyy`, { locale: enUS });
  }
};
