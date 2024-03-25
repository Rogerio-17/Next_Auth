import { Box, Button, Flex, FormLabel, Input, Text } from "@chakra-ui/react";

export default function SignIn() {
  return (
    <Flex justifyContent="center" alignItems="center" marginTop="8rem">
      <Flex
        as="form"
        w="300px"
        bg="#D5CABD"
        flexDirection="column"
        p="1.5rem"
        gap="1rem"
        borderRadius="8px"
      >
        <Flex justifyContent="center">
          <Text fontWeight="bold" fontSize="1.2rem">
            Realize o login
          </Text>
        </Flex>
        <Box>
          <FormLabel>Email:</FormLabel>
          <Input type="email" placeholder="seuemail@gmail.com"></Input>
        </Box>
        <Box>
          <FormLabel>Senha:</FormLabel>
          <Input type="password" placeholder="********"></Input>
        </Box>
        <Button>Logar</Button>
      </Flex>
    </Flex>
  );
}
