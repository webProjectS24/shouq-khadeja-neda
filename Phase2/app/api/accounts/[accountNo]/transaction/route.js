import users_itemsRepo from "@/app/repo/accountRepo";

export async function GET(request, { params }) {
  const accountNo = params.accountNo;
  const transactions = await users_itemsRepo.getTransactionsOfCustomer(
    parseInt(accountNo)
  );
  return Response.json(transactions, { status: 200 });
}
