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
        w="350px"
        border="1px solid #e0dede"
        flexDirection="column"
        p="1.5rem"
        gap="1.5rem"
        borderRadius="8px"
        lineHeight="10px"
      >
        <Flex justifyContent="center" marginBottom="1rem">
          <Text fontWeight="bold" fontSize="1.2rem">
            Realize o seu cadastro
          </Text>
        </Flex>
        <Box>
          <FormLabel htmlFor="name">Nome</FormLabel>
          <Input
            name="name"
            id="name"
            type="text"
            placeholder="José Maria"
            required
          ></Input>
        </Box>
        <Box>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="seuemail@gmail.com"
            required
          ></Input>
        </Box>
        <Box>
          <FormLabel htmlFor="password">Senha</FormLabel>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="********"
            required
          ></Input>
        </Box>
        <Flex justifyContent="space-between" alignItems="center">
          <Button
            type="submit"
            bg="#131313"
            color="#fff"
            _hover={{ opacity: "0.9" }}
          >
            Criar conta
          </Button>
          <Link href="/portal/signin" color="#131313">
            Já tenho conta
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
}
