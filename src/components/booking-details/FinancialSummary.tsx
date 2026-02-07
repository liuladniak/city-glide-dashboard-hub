import { CreditCard } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface Props {
  total: number;
  paid: number;
  currency: string;
}

const FinancialSummary = ({ total, paid, currency }: Props) => {
  const balance = total - paid;

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-lg flex items-center gap-2">
          <CreditCard className="w-4 h-4" />
          Financial Summary
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Total Price</span>
          <span className="font-medium text-foreground">{currency}{total.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Amount Paid</span>
          <span className="font-medium text-green-600">{currency}{paid.toFixed(2)}</span>
        </div>
        <Separator />
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-foreground">Balance Due</span>
          <span className={`text-xl font-bold ${balance > 0 ? "text-destructive" : "text-green-600"}`}>
            {currency}{balance.toFixed(2)}
          </span>
        </div>

        {balance > 0 && (
          <Button className="w-full mt-2" size="sm">
            Collect Payment
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default FinancialSummary;
