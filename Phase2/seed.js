import fs from 'fs-extra'
import path from 'path'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const itemsPath = path.join(process.cwd(), 'app/data/items.json')
const accountsPath = path.join(process.cwd(), 'app/data/accounts.json')
const customersPath = path.join(process.cwd(), 'app/data/customers.json')
const sellersPath = path.join(process.cwd(), 'app/data/sellers.json')

async function main() {
    try {
        const items = await fs.readJSON(itemsPath)
        const accounts = await fs.readJSON(accountsPath)
        const customers = await fs.readJSON(customersPath)
        const sellers = await fs.readJSON(sellersPath)


        for (const account of accounts) await prisma.account.create({ data: account })
        for (const seller of sellers) await prisma.seller.create({ data: seller })
        for (const customer of customers) await prisma.customer.create({ data: customer })
        for (const item of items) await prisma.item.create({ data: item })

    } catch (error) {
        console.log(error);
        return { error: error.message }
    }
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })