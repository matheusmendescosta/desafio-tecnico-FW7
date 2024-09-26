import { LinkRepository } from "@/repositories/link-repository";
import { Link } from "@prisma/client";

interface GetShortedLinkServiceRequest {
  shortedLink: string;
}

interface GetShortedLinkServiceResponse {
  linkRedirect: Link | null;
}

export class GetShortedLinkService {
  constructor(private linkRepository: LinkRepository) {}

  async execute({
    shortedLink,
  }: GetShortedLinkServiceRequest): Promise<GetShortedLinkServiceResponse> {
    const linkRedirect = await this.linkRepository.GetShortLink(shortedLink);

    return { linkRedirect };
  }
}
