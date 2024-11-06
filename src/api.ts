interface yearlyGoal {
  id: string;
  year: number;
  amount: number;
}

interface income {
  id: string;
  amount: number;
  source: string;
  date: Date;
}

const baseUrl = "http://localhost:3000/api";

export const fetchYearlyGoal = async (): Promise<yearlyGoal> => {
  const response = await fetch(baseUrl + "/yearly-goals");
  const data = await response.json();
  return data;
};

export const addIncome = async (amount: number, source: string) => {
  const response = await fetch(baseUrl + "/income", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      amount,
      source,
    }),
  });
  const data = await response.json();
  return data;
};

export const fetchIncomes = async (): Promise<income[]> => {
  const response = await fetch(baseUrl + "/income");
  const data = await response.json();
  return data;
};
