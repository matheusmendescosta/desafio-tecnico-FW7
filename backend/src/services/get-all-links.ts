import { LinkRepository } from "@/repositories/link-repository";

export class getAllLinks {
  constructor(private linkRepository: LinkRepository) {}

  async execute() {
    const links = await this.linkRepository.find();

    return { links };
  }
  
}
