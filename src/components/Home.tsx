import { useQuery } from "@tanstack/react-query";
import { fetchYearlyGoal } from "../api/fetchYearlyGoal";

function Home() {
  const yearlyGoal = useQuery({
    queryKey: ["yearlyGoal"],
    queryFn: fetchYearlyGoal,
  });

  if (yearlyGoal.isLoading) return <div>Loading ...</div>;

  return (
    <div className="flex flex-col w-full items-center font-DMSans">
      <p className="mt-28 mb-28 text-4xl md:text-5xl lg:text-6xl font-bold ">
        $ {yearlyGoal.data?.amount.toLocaleString()}
      </p>
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={i}
          className="bg-secondary flex justify-between p-4 mb-3 rounded-md gap-16 md:gap-0 md:w-1/3"
        >
          <p>$ 1000</p>
          <p>source: Freelance</p>
        </div>
      ))}
    </div>
  );
}

export default Home;
