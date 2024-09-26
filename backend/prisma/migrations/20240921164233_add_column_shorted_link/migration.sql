/*
  Warnings:

  - Added the required column `shortedLink` to the `link` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `link` ADD COLUMN `shortedLink` VARCHAR(191) NOT NULL;
