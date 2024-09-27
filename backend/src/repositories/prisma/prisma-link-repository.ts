import { prisma } from "@/lib/prisma";
import { Prisma, Link } from "@prisma/client";
import { LinkRepository } from "../link-repository";
import { link } from "fs";

export class PrismaLinkRepository implements LinkRepository {
  async find(): Promise<Link[]> {
    const links = await prisma.link.findMany({});

    return links;
  }
  async GetShortLink(shortLink: string): Promise<Link | null> {
    const shortLinkRedirect = await prisma.link.findUnique({
      where: {
        shortedLink: `http://localhost:3333/${shortLink}`,
      },
    });

    return shortLinkRedirect;
  }
  async create(data: Prisma.LinkCreateInput): Promise<Link> {
    const link = await prisma.link.create({ data });

    return link;
  }
}
