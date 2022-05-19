import Text, { Props as TextProps } from '@atoms/Text';

type Props = {
  title: string;
  totalCards: number;
};

const LaneHeader = ({ title, totalCards }: Props) => {
  return (
    <Text fontWeight="bold" size="l">
      {`${title} (${totalCards < 10 ? `0${totalCards}` : totalCards})`}
    </Text>
  );
};

export default LaneHeader;
