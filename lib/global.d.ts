// Dans le fichier global.d.ts
interface CustomGlobal extends NodeJS.Global {
  prisma: import("@prisma/client").PrismaClient;
}

declare var global: CustomGlobal;
