import users_itemsRepo from "@/app/repo/accountRepo";


export async function GET(request, { params }) {
    const accountNo = params.accountNo
    const items = await users_itemsRepo.getItemsOfSeller(parseInt(accountNo))
    return Response.json(items,{ status: 200 })
}

export async function POST(request, { params }) {
    const accountNo = params.accountNo
    const item = await request.json()
    const response = await users_itemsRepo.addItem(parseInt(accountNo), item)
    return Response.json(response, { status: 201 })
}
