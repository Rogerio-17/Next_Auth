import {
  Box,
  Button,
  Flex,
  FormLabel,
  Input,
  Link,
  Text,
} from "@chakra-ui/react";
import AuthActions from "../actions/auth-actions";

export default function SignUpForm() {
  return (
    <Flex justifyContent="center" alignItems="center" marginTop="8rem">
      <Flex
        as="form"
        action={AuthActions.createAccount}
        w="300px"
        bg="#E0FFFF"
        flexDirection="column"
        p="1.5rem"
        gap="1rem"
        borderRadius="8px"
      >
        <Flex as="form" justifyContent="center">
          <Text fontWeight="bold" fontSize="1.2rem">
            Realize o seu cadastro
          </Text>
        </Flex>
        <Box>
          <FormLabel htmlFor="name">Nome:</FormLabel>
          <Input
            id="name"
            type="text"
            placeholder="José Maria"
            required
          ></Input>
        </Box>
        <Box>
          <FormLabel htmlFor="email">Email:</FormLabel>
          <Input
            id="email"
            type="email"
            placeholder="seuemail@gmail.com"
            required
          ></Input>
        </Box>
        <Box>
          <FormLabel htmlFor="password">Senha:</FormLabel>
          <Input
            id="password"
            type="password"
            placeholder="********"
            required
          ></Input>
        </Box>
        <Flex justifyContent="space-between">
          <Button type="submit" bg="#87CEFA" color="#fff">
            Criar conta
          </Button>
          <Link href="/portal/signin" color="blue">
            Já tenho conta
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
}
