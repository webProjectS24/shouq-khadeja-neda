import users_itemsRepo from '@/app/repo/accountRepo'
export async function GET(request, { params }) {
    const username = params.username;
    const account = await users_itemsRepo.getAccount(username)
    return Response.json(account, { status: 200 });
}