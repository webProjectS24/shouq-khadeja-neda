import users_itemsRepo from "@/app/repo/accountRepo";

export async function GET(request) {
  const account = users_itemsRepo.getAccountByUsernamePassword(
    request.body.username,
    request.body.password
  );
  return Response.json(account, { status: 200 });
}
