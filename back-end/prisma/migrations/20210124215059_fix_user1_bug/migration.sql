/*
  Warnings:

  - You are about to drop the `User1` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "picture" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL
);

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "User1";
PRAGMA foreign_keys=on;

-- CreateIndex
CREATE UNIQUE INDEX "User.email_unique" ON "User"("email");
