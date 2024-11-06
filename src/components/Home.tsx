import { useQuery } from "@tanstack/react-query";
import { fetchIncomes, fetchYearlyGoal } from "../api";
import { IncomeDialog } from "./IncomeDialog";
import { Progress } from "./ui/progress";

function Home() {
  const yearlyGoal = useQuery({
    queryKey: ["yearlyGoal"],
    queryFn: fetchYearlyGoal,
  });

  const income = useQuery({
    queryKey: ["income"],
    queryFn: fetchIncomes,
  });

  if (yearlyGoal.isLoading) return <div>Loading ...</div>;

  return (
    <div className="flex flex-col w-full items-center font-DMSans">
      <p className="mt-20 mb-7 text-4xl md:text-5xl lg:text-6xl font-bold ">
        $ {yearlyGoal.data?.amount.toLocaleString()}
      </p>
      <div className="flex justify-center w-1/2 mb-12">
        <Progress value={33} className="border border-gray-400" />
      </div>
      <div className="flex md:w-1/3 min-w-[350px] mb-5">
        <p className="text-xl text-text opacity-75">Latest Incomes</p>
      </div>
      {income.data?.map((income) => {
        return (
          <div
            key={income.id}
            className="bg-secondary flex justify-between p-4 mb-3 rounded-md gap-16 md:gap-0 md:w-1/3 min-w-[350px]"
          >
            <p>$ {income.amount.toLocaleString()}</p>
            <p>source: {income.source}</p>
          </div>
        );
      })}
      <div className="flex w-full md:justify-end justify-center md:mr-32 absolute bottom-6">
        <IncomeDialog />
      </div>
    </div>
  );
}

export default Home;
