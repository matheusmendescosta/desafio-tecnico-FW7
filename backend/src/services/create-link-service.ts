import { LinkRepository } from "@/repositories/link-repository";
import { Link } from "@prisma/client";
import crypto from "crypto";

interface CreateLinkServiceRequest {
  link: string;
  description: string;
}

interface CreateLinkServiceResponse {
  linkCreate: Link;
}

export class CreateLinkService {
  constructor(private linkRepository: LinkRepository) {}

  private generateShortLink(): string {
    return crypto.randomBytes(4).toString("hex");
  }

  async execute({ link, description }: CreateLinkServiceRequest): Promise<CreateLinkServiceResponse> {
    const shortLink = this.generateShortLink();
    const shortedLink = `http://localhost:3333/${shortLink}`;

    const linkCreate = await this.linkRepository.create({ link, description, shortedLink });

    return { linkCreate };
  }
}
