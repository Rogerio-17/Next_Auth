import {
  Box,
  Button,
  Flex,
  FormLabel,
  Input,
  Link,
  Text,
} from "@chakra-ui/react";

export default function SignInForm() {
  return (
    <Flex justifyContent="center" alignItems="center" marginTop="8rem">
      <Flex
        as="form"
        w="300px"
        bg="#E0FFFF"
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
        <Flex justifyContent="space-between">
          <Button bg="#87CEFA" color="#fff">
            Logar
          </Button>
          <Link href="/portal/signin" color="blue">
            Criar conta
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
}
