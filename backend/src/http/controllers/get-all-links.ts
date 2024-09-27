import { PrismaLinkRepository } from "@/repositories/prisma/prisma-link-repository";
import { getAllLinks } from "@/services/get-all-links";
import { Request, Response } from "express";

export async function GetLinks(req: Request, res: Response) {
  const getLinksService = new getAllLinks(new PrismaLinkRepository());

  const { links } = await getLinksService.execute();

  return res.status(200).send({ links });
}
