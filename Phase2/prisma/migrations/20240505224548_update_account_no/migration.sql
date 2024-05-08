/*
  Warnings:

  - The primary key for the `Seller` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `sellerId` on the `Seller` table. All the data in the column will be lost.
  - The primary key for the `Customer` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `custId` on the `Customer` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Seller" (
    "accountNo" INTEGER NOT NULL,
    "companyName" TEXT NOT NULL,
    CONSTRAINT "Seller_accountNo_fkey" FOREIGN KEY ("accountNo") REFERENCES "Account" ("accountNo") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Seller" ("accountNo", "companyName") SELECT "accountNo", "companyName" FROM "Seller";
DROP TABLE "Seller";
ALTER TABLE "new_Seller" RENAME TO "Seller";
CREATE UNIQUE INDEX "Seller_accountNo_key" ON "Seller"("accountNo");
CREATE TABLE "new_Transaction" (
    "transactionId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "itemNo" INTEGER NOT NULL,
    "custId" INTEGER NOT NULL,
    "Date" DATETIME NOT NULL,
    "totalPrice" REAL NOT NULL,
    CONSTRAINT "Transaction_itemNo_fkey" FOREIGN KEY ("itemNo") REFERENCES "Item" ("itemNo") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Transaction_custId_fkey" FOREIGN KEY ("custId") REFERENCES "Customer" ("accountNo") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Transaction" ("Date", "custId", "itemNo", "totalPrice", "transactionId") SELECT "Date", "custId", "itemNo", "totalPrice", "transactionId" FROM "Transaction";
DROP TABLE "Transaction";
ALTER TABLE "new_Transaction" RENAME TO "Transaction";
CREATE TABLE "new_Item" (
    "itemNo" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "quantity" INTEGER NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "sold" INTEGER NOT NULL,
    "sellerId" INTEGER NOT NULL,
    CONSTRAINT "Item_sellerId_fkey" FOREIGN KEY ("sellerId") REFERENCES "Seller" ("accountNo") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Item" ("imageUrl", "itemNo", "name", "price", "quantity", "sellerId", "sold", "status") SELECT "imageUrl", "itemNo", "name", "price", "quantity", "sellerId", "sold", "status" FROM "Item";
DROP TABLE "Item";
ALTER TABLE "new_Item" RENAME TO "Item";
CREATE TABLE "new_Customer" (
    "accountNo" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "phoneNo" TEXT NOT NULL,
    "shippingAddress" TEXT NOT NULL,
    CONSTRAINT "Customer_accountNo_fkey" FOREIGN KEY ("accountNo") REFERENCES "Account" ("accountNo") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Customer" ("accountNo", "email", "phoneNo", "shippingAddress") SELECT "accountNo", "email", "phoneNo", "shippingAddress" FROM "Customer";
DROP TABLE "Customer";
ALTER TABLE "new_Customer" RENAME TO "Customer";
CREATE UNIQUE INDEX "Customer_accountNo_key" ON "Customer"("accountNo");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
