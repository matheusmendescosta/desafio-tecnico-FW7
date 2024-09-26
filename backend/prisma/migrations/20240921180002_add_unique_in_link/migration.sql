/*
  Warnings:

  - A unique constraint covering the columns `[shortedLink]` on the table `link` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `link_shortedLink_key` ON `link`(`shortedLink`);
