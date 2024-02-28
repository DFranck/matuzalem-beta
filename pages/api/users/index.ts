import { Prisma, PrismaClient } from "@prisma/client";
import { SignupSchema } from "@/lib/schemas";
import bcrypt from "bcrypt";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();
export default async function handler(
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
    // Améliorer la gestion des erreurs pour distinguer les erreurs Prisma
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      // Vérifier si l'erreur est une violation de contrainte unique (exemple : email déjà utilisé)
      if (error.code === "P2002") {
        return res.status(409).json({ message: "Email already in use" });
      }
    }
    console.error(error);
    // Retourner une réponse plus générale au client pour éviter de divulguer des détails d'erreur sensibles
    return res.status(500).json({ message: "Failed to create user" });
  }
}
