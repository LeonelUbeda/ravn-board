const badgeColorSchemes = {
  red: {
    backgroundColor: 'rgba(218, 88, 75, 0.1);',
    color: 'primary.400',
  },
  green: {
    backgroundColor: 'rgba(112, 178, 82, 0.1)',
    color: 'secondary.400',
  },
  yellow: {
    backgroundColor: 'rgba(229, 180, 84, 0.1)',
    color: 'tertiary.400',
  },
  white: {
    backgroundColor: 'rgba(148, 151, 154, 0.1)',
    color: 'neutral.100',
  },
};

export type BadgeColor = keyof typeof badgeColorSchemes;

export default badgeColorSchemes;
