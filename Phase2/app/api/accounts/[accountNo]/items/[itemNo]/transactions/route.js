import users_itemsRepo from "@/app/repo/accountRepo";

export async function GET(request, { params }) {
    const itemNo = params.itemNo;
    const transactions =await users_itemsRepo.getBuyers(parseInt(itemNo))
    return Response.json(transactions, { status: 200 });
}

export async function POST(request, { params }) {
    const accountNo = params.accountNo;
    const itemNo = params.itemNo
    const transaction = await request.json()
    const newTransaction = await users_itemsRepo.addTransaction(transaction, parseInt(accountNo),parseInt(itemNo))
    return Response.json(newTransaction)
}


