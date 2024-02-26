import { prisma } from "@/lib/prisma";
import { SignupSchema } from "@/lib/schemas";
import bcrypt from "bcrypt";
import { NextApiRequest, NextApiResponse } from "next";

export default async function signup(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }
  const parsedSignup = SignupSchema.safeParse(req.body);
  if (!parsedSignup.success) {
    throw new Error("Validation error: " + parsedSignup.error.message);
  }

  try {
    const hashedPassword = await bcrypt.hash(parsedSignup.data.password, 10);
    const newUser = await prisma.user.create({
      data: {
        email: parsedSignup.data.email,
        password: hashedPassword,
        firstName: parsedSignup.data.firstName,
        lastName: parsedSignup.data.lastName,
      },
    });

    return res.status(201).json({
      id: newUser.id,
      email: newUser.email,
      firstName: newUser.firstName,
      lastName: newUser.lastName,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "An error occurred" });
  }
}
