import users_itemsRepo from "@/app/repo/accountRepo";

export async function GET(request, { params }) {
    const itemNo = params.itemNo
    const item = await users_itemsRepo.getItem(parseInt(itemNo))
    return Response.json(item, { status: 200 });
}

export async function PUT(request, { params }) {
    const itemNo = parseInt(params.itemNo)
    const item = await request.json()
    const updatedAccount = await users_itemsRepo.updateItem(itemNo, item)
    return Response.json(updatedAccount, { status: 200 })
}