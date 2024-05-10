import users_itemsRepo from "@/app/repo/accountRepo";

export async function GET(request) {
    const items = await users_itemsRepo.getItems()
    return Response.json(items)
}

export async function POST(request) {
    const item = await request.json()
    const newItem = await users_itemsRepo.addItem(item)
    return Response.json(newItem)
}