import AddElementButton from '@atoms/AddElementButton';
import { Box, HStack } from '@chakra-ui/react';
import Sidebar from '@organism/Sidebar';

type Props = {
  children?: React.ReactNode;
};

const ListingTemplate: React.FC<Props> = ({ children }) => {
  return (
    <HStack spacing="8" display="flex" height="100vh" alignItems="stretch" px="8" pt="8">
      <Box maxWidth="300px" w="100%" pb="8">
        <Sidebar maxWidth="300px" w="100%" h="full" />
      </Box>
      <Box w="full" height="100vh">
        <Box h="48px" backgroundColor="neutral.400" rounded="2xl" w="full"></Box>
        <Box w="full" mt="9" display="flex">
          <AddElementButton aria-label="test" ml="auto" />
        </Box>
        <Box overflow="auto" height="400px" mt="5">
          {children}
        </Box>
      </Box>
    </HStack>
  );
};

export default ListingTemplate;
