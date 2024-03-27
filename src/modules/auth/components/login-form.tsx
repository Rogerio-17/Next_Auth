'use client'
import {
  Box,
  Button,
  Flex,
  FormLabel,
  Input,
  Link,
  Text,
} from "@chakra-ui/react";

import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const signInFormSchema = zod.object({
  email: zod.string().min(1, "Email obrigátorio"),
  senha: zod.string().min(1, "Senha obrigatoria"),
})

export type OderData = zod.infer<typeof signInFormSchema>

export type ConfirmOrderFormData = OderData;


export default function SignInForm() {
  const {register, handleSubmit} = useForm<ConfirmOrderFormData>({
    resolver: zodResolver(signInFormSchema)
  })

 function handleGetLogin(data: ConfirmOrderFormData) {
    console.log(data)
  }

  return (
    <Flex justifyContent="center" alignItems="center" marginTop="8rem">
      <Flex
        as="form"
        w="350px"
        border="1px solid #e0dede"
        flexDirection="column"
        p="1.5rem"
        gap="1.5rem"
        borderRadius="8px"
        lineHeight="10px"
        onSubmit={handleSubmit(handleGetLogin)}
      >
        <Flex justifyContent="center" marginBottom="1rem">
          <Text fontWeight="bold" fontSize="1.2rem">
            Realize o login
          </Text>
        </Flex>
        <Box>
          <FormLabel>Email:</FormLabel>
          <Input {...register("email")} type="email" placeholder="seuemail@gmail.com"></Input>
        </Box>
        <Box>
          <FormLabel>Senha:</FormLabel>
          <Input {...register("senha")} type="password" placeholder="********"></Input>
        </Box>
        <Flex justifyContent="space-between" alignItems="center">
          <Button type="submit" bg="#131313" color="#fff" _hover={{opacity: '0.9' }}>
            Logar
          </Button>
          <Link href="/portal/signin" color="#131313">
            Criar conta
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
}
