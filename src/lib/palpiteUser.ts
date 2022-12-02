import { prisma } from "./prisma";

export async function getPalpitesUsers() {
  const palpites = await prisma.user.findMany();
  return palpites;
}