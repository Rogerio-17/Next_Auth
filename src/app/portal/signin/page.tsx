import SignInForm from "@/modules/auth/components/login-form";
import { Flex } from "@chakra-ui/react";

export default function SignIn() {
  return (
    <Flex justifyContent="center" alignItems="center">
      <SignInForm />
    </Flex>
  );
}
