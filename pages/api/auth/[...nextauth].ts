import { prisma } from "@/lib/prisma";
import { CredentialsSchema } from "@/lib/schemas";
import bcrypt from "bcrypt";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentals",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials) return null;
        const parsedCredentials = CredentialsSchema.safeParse(credentials);
        if (!parsedCredentials.success)
          throw new Error(
            "Validation error: " + parsedCredentials.error.message
          );
        const user = await prisma.user.findUnique({
          where: {
            email: parsedCredentials.data.email,
          },
        });
        if (
          user &&
          (await bcrypt.compare(parsedCredentials.data.password, user.password))
        ) {
          return {
            id: user.id.toString(),
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
          };
        } else {
          throw new Error("Invalid email or password");
        }
      },
    }),
  ],
});
