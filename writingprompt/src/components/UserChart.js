"use client";

import React, { useMemo, useState } from "react";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { date: "2023-01-01", monthlyCount: 12, yearlyCount: 150 },
  { date: "2023-02-01", monthlyCount: 15, yearlyCount: 165 },
  { date: "2023-03-01", monthlyCount: 18, yearlyCount: 183 },
  { date: "2023-04-01", monthlyCount: 14, yearlyCount: 197 },
  { date: "2023-05-01", monthlyCount: 22, yearlyCount: 219 },
  { date: "2023-06-01", monthlyCount: 19, yearlyCount: 238 },
  { date: "2023-07-01", monthlyCount: 23, yearlyCount: 261 },
  { date: "2023-08-01", monthlyCount: 25, yearlyCount: 286 },
  { date: "2023-09-01", monthlyCount: 20, yearlyCount: 306 },
  { date: "2023-10-01", monthlyCount: 18, yearlyCount: 324 },
  { date: "2023-11-01", monthlyCount: 16, yearlyCount: 340 },
  { date: "2023-12-01", monthlyCount: 14, yearlyCount: 354 },
  { date: "2024-01-01", monthlyCount: 15, yearlyCount: 15 },
  { date: "2024-02-01", monthlyCount: 18, yearlyCount: 33 },
  { date: "2024-03-01", monthlyCount: 21, yearlyCount: 54 },
  { date: "2024-04-01", monthlyCount: 19, yearlyCount: 73 },
];

const chartConfig = {
  monthlyCount: {
    label: "Month",
    color: "hsl(var(--chart-1))",
  },
  yearlyCount: {
    label: "Year",
    color: "hsl(var(--chart-2))",
  },
};

export function ChartComponent() {
  const [activeChart, setActiveChart] = useState("monthlyCount");

  const total = useMemo(() => {
    return {
      monthlyCount: chartData.reduce((acc, curr) => acc + curr.monthlyCount, 0),
      yearlyCount: chartData[chartData.length - 1]?.yearlyCount || 0,
    };
  }, []);

  return (
    <Card>
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
          <CardTitle>Writing Activity</CardTitle>
          <CardDescription>Showing how many times you have written</CardDescription>
        </div>
        <div className="flex">
          {Object.keys(chartConfig).map((chart) => (
            <button
              key={chart}
              data-active={activeChart === chart}
              className="flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6"
              onClick={() => setActiveChart(chart)}
            >
              <span className="text-xs text-muted-foreground">
                {chartConfig[chart].label}
              </span>
              <span className="text-lg font-bold leading-none sm:text-3xl">
                {chart === "monthlyCount" 
                  ? total.monthlyCount.toLocaleString() 
                  : total.yearlyCount.toLocaleString()}
              </span>
            </button>
          ))}
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "short",
                });
              }}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  nameKey={activeChart === "monthlyCount" ? "Monthly Writings" : "Yearly Writings"}
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    });
                  }}
                />
              }
            />
            <Line
              dataKey={activeChart}
              type="monotone"
              stroke={chartConfig[activeChart].color}
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}