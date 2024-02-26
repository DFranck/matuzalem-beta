import { z } from "zod";

// Schéma pour les credentials
export const CredentialsSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1, "Password is required"),
});

// Schéma pour l'utilisateur (ajustez selon votre modèle d'utilisateur)
export const SignupSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
  password: z.string().min(1, "Password is required"),
});
