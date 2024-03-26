import SignUpForm from "@/modules/auth/components/sign-up-form";
import { Flex } from "@chakra-ui/react";

export default function SignUp() {
  return (
    <Flex justifyContent="center" alignItems="center">
      <SignUpForm />
    </Flex>
  );
}
