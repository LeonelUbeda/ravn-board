import Text from '@atoms/Text';

type Props = { text: string };

const TitleMenu = ({ text }: Props) => {
  return (
    <Text size="xl" fontWeight="bold" color="neutral.200" px="4">
      {text}
    </Text>
  );
};

export default TitleMenu;
