import badgeColorSchemes, { BadgeColor } from '@/constants/badgeColorSchemes';
import Text from '@atoms/Text';
import { Box, BoxProps, Icon, IconProps } from '@chakra-ui/react';
import { IconType } from 'react-icons';

type Props = {
  upper?: boolean;
  colorScheme: BadgeColor;
  text: string;
  icon?: IconType;
  iconProps?: IconProps;
} & Omit<BoxProps, 'children'>;

const Badge = ({
  icon: BadgeIcon,
  upper,
  iconProps,
  text,
  colorScheme,
  ...props
}: Props) => {
  return (
    <Box
      py="1"
      px="4"
      width="fit-content"
      display="flex"
      flexWrap="nowrap"
      alignItems="center"
      borderRadius="sm"
      textTransform={upper ? 'uppercase' : undefined}
      {...badgeColorSchemes[colorScheme]}
      {...props}
    >
      {BadgeIcon && <Icon mr="2" as={BadgeIcon} width="5" height="5" {...iconProps} />}
      <Text size="m" fontWeight="bold">
        {text}
      </Text>
    </Box>
  );
};

export default Badge;
