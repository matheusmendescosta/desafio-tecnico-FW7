import { PrismaLinkRepository } from "@/repositories/prisma/prisma-link-repository";
import { CreateLinkService } from "@/services/create-link-service";
import { Request, Response } from "express";
import { z } from "zod";

const bodySchema = z.object({
  link: z.string().min(1, "require"),
  description: z.string(),
});

export async function CreateLinkController(req: Request, res: Response) {
  const body = bodySchema.parse(req.body);

  const createLinkService = new CreateLinkService(new PrismaLinkRepository());

  try {
    const { linkCreate } = await createLinkService.execute(body);

    return res.status(201).json({ linkCreate });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
