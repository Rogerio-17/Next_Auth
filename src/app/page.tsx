import { Flex, Heading, Link } from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex flexDirection="column" alignItems="center" marginTop="5rem">
      <Heading fontWeight="bold">Página Home</Heading>
      <Link href="/portal" color="blue">
        Acesse o portal
      </Link>{" "}
      ou{" "}
      <Link href="/portal/signup" color="blue">
        Crie uma conta
      </Link>
    </Flex>
  );
}
