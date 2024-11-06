import { addIncome } from "@/api";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";

export const IncomeDialog = () => {
  const [amount, setAmount] = useState(0);
  const [source, setSource] = useState("");

  const addIncomeMutation = useMutation({
    mutationFn: ({ amount, source }: { amount: number; source: string }) =>
      addIncome(amount, source),
    onSuccess: () => {
      console.log("Income added successfully");
    },
  });

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="border-2 border-text ">
          Add Income
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Your Income</DialogTitle>
          <DialogDescription>
            Add Your Incomes profile here. Include One or Two Word Source.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid items-center gap-4">
            <Input
              id="Amount"
              type="number"
              placeholder="Amount"
              className="col-span-3"
              onChange={(e) => setAmount(Number(e.target.value))}
            />
          </div>
          <div className="grid items-center gap-4">
            <Input
              id="Source"
              placeholder="Source"
              className="col-span-3"
              onChange={(e) => setSource(e.target.value)}
            />
          </div>
        </div>
        <DialogFooter>
          <Button
            type="submit"
            onClick={() => {
              addIncomeMutation.mutate({
                amount,
                source,
              });
            }}
          >
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
