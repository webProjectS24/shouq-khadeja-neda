import users_itemsRepo from "@/app/repo/accountRepo";

export async function GET(request, { params }) {
    const accountNo = params.accountNo;
    let account = await users_itemsRepo.getAccount(parseInt(accountNo))
    if(account.acctType == "seller"){
        account = await users_itemsRepo.getSeller(parseInt(accountNo))  
    }
    else{
        account = await users_itemsRepo.getCustomer(parseInt(accountNo))
    }
    return Response.json(account, { status: 200 });
}

export async function PUT(request, { params }) {
    const accountNo = params.accountNo;
    const account = await request.json()
    const updatedAccount = await users_itemsRepo.updateAccount(parseInt(accountNo), account)
    return Response.json(updatedAccount)
}