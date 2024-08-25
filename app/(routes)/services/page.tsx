"use client";
import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface PricingPlan {
  title: string;
  monthlyPrice: number;
  yearlyPrice: number;
  storage: string;
  bandwidth: string;
  emails: number;
  ssd: boolean;
  description: string;
  features: string[];
  actionLabel: string;
  popular?: boolean;
  exclusive?: boolean;
}

const pricingPlans: PricingPlan[] = [
  {
    title: "Basic",
    monthlyPrice: 10,
    yearlyPrice: 100,
    storage: "20GB",
    bandwidth: "1TB",
    emails: 10,
    ssd: false,
    description: "Essential features you need to get started",
    features: ["20GB Storage", "1TB Bandwidth", "10 Email Accounts"],
    actionLabel: "Get Started",
  },
  {
    title: "Silver",
    monthlyPrice: 20,
    yearlyPrice: 200,
    storage: "40GB",
    bandwidth: "2TB",
    emails: 20,
    ssd: true,
    description: "Perfect for small businesses",
    features: ["40GB Storage", "2TB Bandwidth", "20 Email Accounts", "SSD Storage"],
    actionLabel: "Get Started",
    popular: true,
  },
  {
    title: "Gold",
    monthlyPrice: 40,
    yearlyPrice: 400,
    storage: "80GB",
    bandwidth: "4TB",
    emails: 40,
    ssd: true,
    description: "Advanced features for growing businesses",
    features: ["80GB Storage", "4TB Bandwidth", "40 Email Accounts", "SSD Storage"],
    actionLabel: "Get Started",
  },
  {
    title: "Platinum",
    monthlyPrice: 80,
    yearlyPrice: 800,
    storage: "160GB",
    bandwidth: "8TB",
    emails: 80,
    ssd: true,
    description: "Enterprise-grade solution",
    features: ["160GB Storage", "8TB Bandwidth", "80 Email Accounts", "SSD Storage"],
    actionLabel: "Get Started",
    exclusive: true,
  },
];

interface PricingHeaderProps {
  title: string;
  subtitle: string;
}

const PricingHeader: React.FC<PricingHeaderProps> = ({ title, subtitle }) => (
  <section className="text-center mb-8">
    <h2 className="text-3xl font-bold">{title}</h2>
    <p className="text-xl pt-1">{subtitle}</p>
  </section>
);

interface PricingSwitchProps {
  onSwitch: (value: string) => void;
  selectedValue: string;
}

const PricingSwitch: React.FC<PricingSwitchProps> = ({ onSwitch, selectedValue }) => (
  <Tabs value={selectedValue} className="w-[300px] mx-auto mb-8" onValueChange={onSwitch}>
    <TabsList className="grid w-full grid-cols-2">
      <TabsTrigger value="monthly">Monthly</TabsTrigger>
      <TabsTrigger value="yearly">Yearly</TabsTrigger>
    </TabsList>
  </Tabs>
);

interface PricingCardProps {
  plan: PricingPlan;
  isYearly: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({ plan, isYearly }) => {
  const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice;
  return (
    <Card className={cn(
      "w-full sm:w-72 flex flex-col justify-between py-1",
      plan.popular ? "border-yellow-400" : "border-gray-200",
      plan.exclusive ? "animate-background-shine bg-white dark:bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] transition-colors" : ""
    )}>
      <div>
        <CardHeader className="pb-8 pt-4">
          <div className="flex justify-between items-center">
            <CardTitle className="text-lg">{plan.title}</CardTitle>
            {plan.popular && (
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-800">
                Popular
              </span>
            )}
          </div>
          <div className="flex items-baseline mt-2">
            <span className="text-3xl font-bold">${price}</span>
            <span className="ml-1 text-gray-500">/{isYearly ? 'year' : 'month'}</span>
          </div>
          <CardDescription className="mt-2">{plan.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {plan.features.map((feature, index) => (
              <li key={index} className="flex items-center">
                <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </div>
      <CardFooter className="mt-6">
        <Button className="w-full">{plan.actionLabel}</Button>
      </CardFooter>
    </Card>
  );
};

interface PricingTableProps {
  plans: PricingPlan[];
  isYearly: boolean;
}

const PricingTable: React.FC<PricingTableProps> = ({ plans, isYearly }) => (
  <div className="overflow-x-auto overflow-hidden">
    <table className="w-full border-collapse">
      <thead>
        <tr className="bg-yellow-400">
          <th className="py-3 px-4 text-left text-black">Plan</th>
          <th className="py-3 px-4 text-left text-black">Storage</th>
          <th className="py-3 px-4 text-left text-black">Bandwidth</th>
          <th className="py-3 px-4 text-left text-black">Emails</th>
          <th className="py-3 px-4 text-left text-black">SSD</th>
          <th className="py-3 px-4 text-right text-black">Price</th>
          <th className="py-3 px-4"></th>
        </tr>
      </thead>
      <tbody>
        {plans.map((plan, index) => (
          <tr key={index} className="border-t">
            <td className="py-3 px-4 font-medium">{plan.title}</td>
            <td className="py-3 px-4">{plan.storage}</td>
            <td className="py-3 px-4">{plan.bandwidth}</td>
            <td className="py-3 px-4">{plan.emails}</td>
            <td className="py-3 px-4">
              {plan.ssd ? (
                <CheckCircle2 className="h-5 w-5 text-green-500" />
              ) : (
                <span className="text-gray-400">-</span>
              )}
            </td>
            <td className="py-3 px-4 text-right">
              ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}/{isYearly ? 'year' : 'month'}
            </td>
            <td className="py-3 px-4">
              <Button variant="outline" size="sm">{plan.actionLabel}</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const PricingPage: React.FC = () => {
  const [isYearly, setIsYearly] = useState(false);
  const [viewType, setViewType] = useState("card");

  const togglePricingPeriod = (value: string) => setIsYearly(value === "yearly");

  return (
    <div className="container mx-auto px-4 py-16">
      <PricingHeader title="Pricing Plans" subtitle="Choose the plan that's right for you" />
      <div className="flex justify-center space-x-4 mb-8">
        <Button
          variant={viewType === "card" ? "default" : "outline"}
          onClick={() => setViewType("card")}
        >
          Card View
        </Button>
        <Button
          variant={viewType === "table" ? "default" : "outline"}
          onClick={() => setViewType("table")}
        >
          Table View
        </Button>
      </div>
      <PricingSwitch onSwitch={togglePricingPeriod} selectedValue={isYearly ? "yearly" : "monthly"} />
      {viewType === "card" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={index} plan={plan} isYearly={isYearly} />
          ))}
        </div>
      ) : (
        <PricingTable plans={pricingPlans} isYearly={isYearly} />
      )}
    </div>
  );
};

export default PricingPage;