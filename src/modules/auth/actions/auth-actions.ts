"use server"
import { PrismaClient } from "@prisma/client";
import * as bcrypt from "bcrypt";
import { redirect } from "next/navigation";

interface formProps {
  name?: string,
  email?: string,
  senha?: string
}

const prisma = new PrismaClient();

async function createAccount(formData: formProps) {
  console.log(formData)

  redirect("/portal/login");
}

const AuthActions = {
  createAccount,
};

export default AuthActions;
