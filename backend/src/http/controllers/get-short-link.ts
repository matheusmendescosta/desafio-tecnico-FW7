import { PrismaLinkRepository } from "@/repositories/prisma/prisma-link-repository";
import { GetShortedLinkService } from "@/services/get-shorted-link";
import { Request, Response } from "express";
import { z } from "zod";

const routeSchema = z.object({
  shortedLink: z.string(),
});

export async function GetShortedLink(req: Request, res: Response) {
  const { shortedLink } = routeSchema.parse(req.params);

  const getShortedLinkService = new GetShortedLinkService(
    new PrismaLinkRepository()
  );

  try {
    const { linkRedirect } = await getShortedLinkService.execute({
      shortedLink,
    });

    if (linkRedirect) {
      return res.redirect(linkRedirect.link);
    } else {
      return res.status(404).send({ message: "Link not found" });
    }
  } catch (error) {
    return res.status(500).send({ message: "Internal server error" });
  }
}
