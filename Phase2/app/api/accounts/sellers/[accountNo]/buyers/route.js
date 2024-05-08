import users_itemsRepo from "@/app/repo/accountRepo";

export async function GET(request, { params }) {
    const itemNo = params.itemNo
    const customers = await users_itemsRepo.getBuyers(parseInt(itemNo))
    return Response.json(customers,{ status: 200 })
}