-- CreateTable
CREATE TABLE "Account" (
    "accountNo" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "surname" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "balance" REAL NOT NULL,
    "isLogged" BOOLEAN NOT NULL DEFAULT false,
    "acctType" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Customer" (
    "custId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "accountNo" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "phoneNo" TEXT NOT NULL,
    "shippingAddress" TEXT NOT NULL,
    CONSTRAINT "Customer_accountNo_fkey" FOREIGN KEY ("accountNo") REFERENCES "Account" ("accountNo") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Seller" (
    "sellerId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "companyName" TEXT NOT NULL,
    "accountNo" INTEGER NOT NULL,
    CONSTRAINT "Seller_accountNo_fkey" FOREIGN KEY ("accountNo") REFERENCES "Account" ("accountNo") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Item" (
    "itemNo" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "quantity" INTEGER NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "sold" INTEGER NOT NULL,
    "sellerId" INTEGER NOT NULL,
    CONSTRAINT "Item_sellerId_fkey" FOREIGN KEY ("sellerId") REFERENCES "Seller" ("sellerId") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Transaction" (
    "transactionId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "itemNo" INTEGER NOT NULL,
    "custId" INTEGER NOT NULL,
    "Date" DATETIME NOT NULL,
    "totalPrice" REAL NOT NULL,
    CONSTRAINT "Transaction_itemNo_fkey" FOREIGN KEY ("itemNo") REFERENCES "Item" ("itemNo") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Transaction_custId_fkey" FOREIGN KEY ("custId") REFERENCES "Customer" ("custId") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Customer_accountNo_key" ON "Customer"("accountNo");

-- CreateIndex
CREATE UNIQUE INDEX "Seller_accountNo_key" ON "Seller"("accountNo");
