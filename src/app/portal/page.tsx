import { Flex, Heading, Text } from "@chakra-ui/react";

export default function Portal() {
  return (
    <Flex flexDirection="column" alignItems="center" marginTop="5rem">
      <Heading fontWeight="bold">Página do portal</Heading>
      <Text>Somente pessoas logas podem estar aqui</Text>
    </Flex>
  );
}
