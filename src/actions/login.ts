"use server";
import * as z from "zod";
import { LoginSchema } from "@/schema";


export const Login = async (values: z.infer<typeof LoginSchema>) => {
  const validatedFields = LoginSchema.parse(values);
  if (!validatedFields) return { error: "Invalid Login !" };
  return { success: "Login Success." };
};
