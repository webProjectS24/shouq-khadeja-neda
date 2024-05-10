/*
  Warnings:

  - Added the required column `quantity` to the `Transaction` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Transaction" (
    "transactionId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "itemNo" INTEGER NOT NULL,
    "custId" INTEGER NOT NULL,
    "Date" DATETIME NOT NULL,
    "totalPrice" REAL NOT NULL,
    "quantity" INTEGER NOT NULL,
    CONSTRAINT "Transaction_itemNo_fkey" FOREIGN KEY ("itemNo") REFERENCES "Item" ("itemNo") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Transaction_custId_fkey" FOREIGN KEY ("custId") REFERENCES "Customer" ("accountNo") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Transaction" ("Date", "custId", "itemNo", "totalPrice", "transactionId") SELECT "Date", "custId", "itemNo", "totalPrice", "transactionId" FROM "Transaction";
DROP TABLE "Transaction";
ALTER TABLE "new_Transaction" RENAME TO "Transaction";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
