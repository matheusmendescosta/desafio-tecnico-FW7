import { Link, Prisma } from "@prisma/client";

export interface LinkRepository {
  create(data: Prisma.LinkCreateInput): Promise<Link>;
  GetShortLink(link: string): Promise<Link | null>;
}
