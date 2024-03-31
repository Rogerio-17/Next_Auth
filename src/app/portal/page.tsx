import UsersList from "@/modules/users/components/users-list";
import { Box, Flex, Heading, Link, Text } from "@chakra-ui/react";

export default function Portal() {
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      marginTop="5rem"
      gap="2rem"
    >
      <Box textAlign="center">
        <Heading fontWeight="bold">Página do portal</Heading>
        <Text>Somente pessoas logas podem estar aqui</Text>
      </Box>
      <Box>
        <UsersList />
      </Box>

      <Link
        type="submit"
        bg="#131313"
        color="#fff"
        p="0.5rem"
        borderRadius="8px"
        _hover={{ opacity: "0.9" }}
        href="/api/logout"
      >
        Logout
      </Link>
    </Flex>
  );
}
