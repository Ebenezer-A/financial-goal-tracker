interface yearlyGoal {
  id: string;
  year: number;
  amount: number;
}

export const fetchYearlyGoal = async (): Promise<yearlyGoal> => {
  const response = await fetch("http://localhost:3000/api/yearly-goals");
  const data = await response.json();
  return data;
};
