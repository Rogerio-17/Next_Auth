import { PrismaClient } from "@prisma/client";
import * as bcrypt from "bcrypt";
import { redirect } from "next/navigation";

const prisma = new PrismaClient();

async function createAccount(formData: FormData) {
  "use server";
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const passwordNoIncripted = formData.get("password") as string;

  const hashPassword = await bcrypt.hash(passwordNoIncripted, 10);

  await prisma.user.create({
    data: {
      name,
      email,
      password: hashPassword,
    },
  });

  console.log("Usuario foi criado com sucesso!");
  redirect("/portal/signin");
}

async function Login(formData: FormData) {
  "use server";
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const user = await prisma.user.findFirst({
    where: {
      email,
    },
  });

  if (!user) {
    console.log("Usúario não foi localizado");
    redirect("/portal/signup");
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    console.log("Usuário ou senha invalidos!");
    redirect("/portal/signin");
  }

  console.log("Usuário logado com sucesso!");
  redirect("/portal");
}

const AuthActions = {
  createAccount,
  Login,
};

export default AuthActions;
