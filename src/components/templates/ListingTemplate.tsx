import AddElementButton from '@atoms/AddElementButton';
import { Box, Grid, HStack } from '@chakra-ui/react';
import Sidebar from '@organism/Sidebar';

type Props = {
  children?: React.ReactNode;
  onAddClick?: () => void;
};

const ListingTemplate: React.FC<Props> = ({ children, onAddClick }) => {
  return (
    <Grid
      templateColumns="245px auto"
      columnGap="10"
      height="100vh"
      w="full"
      maxH="100vh"
      px="8"
      py="8"
    >
      <Sidebar w="100%" h="full" />
      <Box display="flex" flexDir="column">
        <Box h="48px" backgroundColor="neutral.400" rounded="2xl" w="full"></Box>
        <Box w="full" mt="9" display="flex">
          <AddElementButton aria-label="test" ml="auto" onClick={onAddClick} />
        </Box>
        <Box mt="5" w="full" h="full">
          {children}
        </Box>
      </Box>
    </Grid>
  );
};

export default ListingTemplate;
