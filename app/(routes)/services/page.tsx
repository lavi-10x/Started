"use client";
import React, { useState } from "react";
import Image from "next/image";
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

const services = [
  {
    title: "Web Development",
    description: "We choose our teams carefully. Our people are the secret to great work."
  },
  {
    title: "Desktop Development",
    description: "Benefit from automatic updates to all boards any time you need to make a change to your website."
  },
  {
    title: "Mobile Development",
    description: "We've user tested our own process by shipping over 1k products for clients."
  },
  {
    title: "Cyber Security",
    description: "We stay lean and help your product do one thing well."
  },
  {
    title: "Graphic Design",
    description: "We actively pursue the right balance between functionality and aesthetics, creating delightful experiences."
  },
  {
    title: "Networking",
    description: "From boarding passes to movie tickets, there's pretty much nothing you can't store with Preline."
  }
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
            <span className="ml-1 text-gray-700 dark:text-yellow-400">/{isYearly ? 'year' : 'month'}</span>
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
  const [viewType, setViewType] = useState<"card" | "table">("card");

  const togglePricingPeriod = (value: string) => setIsYearly(value === "yearly");

  return (
    <div className="container mx-auto px-4 py-16">
      <div >
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 sm:px-6 pb-16 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-black dark:text-white  sm:text-4xl">Services</h2>
            <p className="mt-4 text-gray-700 dark:text-white">Stay in the know with insights from industry experts.</p>
            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              {services.map((service, index) => (
                <div key={index} className="border-t border-gray-200 dark:border-yellow-700 pt-4">
                  <dt className="font-medium text-black dark:text-yellow-400">{service.title}</dt>
                  <dd className="mt-2 text-sm text-gray-700  dark:text-white">{service.description}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
            <Image
              src="https://images.unsplash.com/photo-1531765408077-9a1f85f90df1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MnwzMTk0OTA4OHx8ZW58MHx8fHx8"
              alt="Service image 1"
              width={400}
              height={320}
              className="rounded-lg bg-gray-100"
            />
            <Image
              src="https://images.unsplash.com/photo-1563920443079-783e5c786b83?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Service image 2"
              width={400}
              height={320}
              className="rounded-lg bg-gray-100"
            />
            <Image
              src="https://images.unsplash.com/photo-1455849318743-b2233052fcff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHRlY2glMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D"
              alt="Service image 3"
              width={400}
              height={320}
              className="rounded-lg bg-gray-100"
            />
            <Image
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dGVjaCUyMGltYWdlfGVufDB8fDB8fHww"
              alt="Service image 4"
              width={400}
              height={320}
              className="rounded-lg bg-gray-100"
            />
          </div>
        </div>
      </div>
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