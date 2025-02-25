
import React, { useMemo, useState, useEffect } from "react";
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

//test Data - produces a pretty chart!
const monthlyData = [
  { date: "2023-01-01", count: 2 },
  { date: "2023-01-02", count: 1 },
  { date: "2023-01-03", count: 0 },
  { date: "2023-01-04", count: 3 },
  { date: "2023-01-05", count: 2 },
  { date: "2023-01-06", count: 0 },
  { date: "2023-01-07", count: 1 },
  { date: "2023-01-08", count: 5 },
  { date: "2023-01-09", count: 1 },
  { date: "2023-01-10", count: 1 },
  { date: "2023-01-11", count: 2 },
  { date: "2023-01-12", count: 1 },
  { date: "2023-01-13", count: 0 },
  { date: "2023-01-14", count: 2},
  { date: "2023-01-15", count: 1},
  { date: "2023-01-16", count: 0 },
  { date: "2023-01-17", count: 1 },
  { date: "2023-01-18", count: 5 },
  { date: "2023-01-19", count: 1 },
  { date: "2023-01-20", count: 1 },
  { date: "2023-01-21", count: 2 },
  { date: "2023-01-22", count: 1 },
  { date: "2023-01-23", count: 0 },
  { date: "2023-01-24", count: 2 },
  { date: "2023-01-25", count: 1 },
  { date: "2023-01-26", count: 0 },
  { date: "2023-01-27", count: 1 },
  { date: "2023-01-28", count: 5 },
  { date: "2023-01-29", count: 1 },
  { date: "2023-01-30", count: 1 },
  { date: "2023-01-31", count: 2 },
];

//test Data - produces a pretty chart!
const yearlyData = [
  { date: "Jan", count: 46 },
  { date: "Feb", count: 15 },
  { date: "Mar", count: 23 },
  { date: "Apr", count: 18 },
  { date: "May", count: 30 },
  { date: "Jun", count: 22 },
  { date: "Jul", count: 25 },
  { date: "Aug", count: 28 },
  { date: "Sep", count: 20 },
  { date: "Oct", count: 18 },
  { date: "Nov", count: 16 },
  { date: "Dec", count: 14 },
  
];

// works with test data
const chartConfig = {
  monthlyCount: {
    label: "Monthly",
    color: "hsl(210, 100%, 50%)", // Changed to blue
    data: monthlyData,
    xAxisFormatter: (value) => {
      const date = new Date(value);
      return date.toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
      });
    },
  },
  yearlyCount: {
    label: "Yearly",
    color: "hsl(var(--chart-2))",
    data: yearlyData,
    xAxisFormatter: (value) => {
      const date = new Date(value);
      return value
    },
  },
};

// works with the test data
export function ChartComponent({userWriting}) {
  const [activeChart, setActiveChart] = useState("monthlyCount");

  const total = useMemo(() => {
    return {
      monthlyCount: monthlyData.reduce((acc, curr) => acc + curr.count, 0),
      yearlyCount: yearlyData.reduce((acc, curr) => acc + curr.count, 0),
    };
  }, [monthlyData, yearlyData]);

  const activeData = activeChart === "monthlyCount" ? monthlyData : yearlyData;
  const xAxisFormatter = chartConfig[activeChart].xAxisFormatter;

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
            data={activeData}
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
              tickFormatter={xAxisFormatter}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  nameKey={activeChart === "monthlyCount" ? "Monthly Writings" : "Yearly Writings"}
                  labelFormatter={(value) => {
                    if (activeChart === "monthlyCount") {
                      return new Date(value).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      });
                    } else {
                      return value;
                    }
                  }}
                />
              }
            />
            <Line
              dataKey="count"
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