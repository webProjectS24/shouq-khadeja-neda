import users_itemsRepo from "@/app/repo/accountRepo";

export async function GET(request) {
    const accounts = await users_itemsRepo.getAccounts()
    return Response.json(accounts)
}