import users_itemsRepo from "@/app/repo/accountRepo";

export async function GET(request, { params }) {
    const accountNo = params.accountNo;
    let totalRevenue = await users_itemsRepo.getproductsNeverSold(parseInt(accountNo))
    return Response.json(totalRevenue, { status: 200 });
}