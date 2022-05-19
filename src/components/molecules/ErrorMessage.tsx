import Button from '@atoms/Button';
import Text from '@atoms/Text';
import { Stack, StackProps } from '@chakra-ui/react';

type Props = { onRetry: () => void; message: string } & StackProps;

const ErrorMessage = ({ onRetry, message, ...props }: Props) => {
  return (
    <Stack alignItems="center" {...props}>
      <Text size="xl" as="h1" textAlign="center">
        {message}
      </Text>
      <Button width="fit-content" onClick={onRetry}>
        Retry
      </Button>
    </Stack>
  );
};

export default ErrorMessage;
