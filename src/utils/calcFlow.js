export const numberWithCommas = (n) => {
  n = n.toFixed(2);
  const parts = n.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");  
  return parts.join(".");
};

const calcFlow = (transactions=[]) =>
  transactions.reduce(
    (a, t) => {
      const type = t.transactionType;
      if (type === "Expenses") {
        a.expenses += t.amount;
      }
      if (type === "Income") {
        a.income += t.amount;
      }
      return a;
    },
    { income: 0, expenses: 0 }
  );

export default calcFlow;
