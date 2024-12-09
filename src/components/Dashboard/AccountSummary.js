import React from "react";
import calcFlow, { numberWithCommas } from "../../utils/calcFlow";

const AccountSummary = (props) => {
  const { profile } = props;
  
  const length = profile?.accounts?.length || 0;
  const transactions = profile?.accounts?.map(a => a?.transactions)?.flat();

  const total = calcFlow(transactions);
  const totalIncome = numberWithCommas(total.income);
  const totalExpenses = numberWithCommas(total.expenses);
  const totalBalance = numberWithCommas(total.income - total.expenses);

  return (
    <>
      {length ? (
        <section className="py-20">
          <h1 className="text-3xl text-center mb-5 text-indigo-600">
            Account Summary - for {length} Accounts
          </h1>
          <div className="container mx-auto px-4">
            <div className="py-4 flex flex-wrap items-center text-center rounded-lg border">
              <div className="py-4 w-full md:w-1/2 lg:w-1/4 border-b md:border-b-0 lg:border-r">
                <h4 className="mb-2 text-gray-500">Total Income</h4>
                <span className="text-3xl lg:text-4xl font-bold text-green-600">
                  ${totalIncome}
                </span>
              </div>
              <div className="py-4 w-full md:w-1/2 lg:w-1/4 border-b md:border-b-0 lg:border-r">
                <h4 className="mb-2 text-gray-500">Total Expenses</h4>
                <span className="text-3xl lg:text-4xl font-bold text-red-600">
                  ${totalExpenses}
                </span>
              </div>
              <div className="py-4 w-full md:w-1/2 lg:w-1/4 border-b md:border-b-0 lg:border-r">
                <h4 className="mb-2 text-gray-500">Total Balance</h4>
                <span className="text-3xl lg:text-4xl font-bold text-indigo-600">
                  ${totalBalance}
                </span>
              </div>
              <div className="py-4 w-full md:w-1/2 lg:w-1/4">
                <h4 className="mb-2 text-gray-500">Total Transactions</h4>
                <span className="text-3xl lg:text-4xl font-bold">
                  {transactions?.length}
                </span>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <h2 className="text-center text-3xl mt-5">No Account Summary Found</h2>
      )}
    </>
  );
};

export default AccountSummary;
