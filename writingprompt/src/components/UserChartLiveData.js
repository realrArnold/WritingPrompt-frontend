
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

//works with real data
const transformToMonthlyData = (userWriting) => {
  const monthlyData = {};
  userWriting.forEach((writing) => {
    const date = new Date(writing.createdAt).toISOString().split("T")[0];
    if (!monthlyData[date]) {
      monthlyData[date] = 0;
    }
    monthlyData[date] += 1;
  });
  return Object.keys(monthlyData).map((date) => ({
    date,
    count: monthlyData[date],
  }));
};

//works with real data
const transformToYearlyData = (userWriting) => {
  const yearlyData = {};
  userWriting.forEach((writing) => {
    const month = new Date(writing.createdAt).toLocaleString("en-GB", { month: "short" });
    if (!yearlyData[month]) {
      yearlyData[month] = 0;
    }
    yearlyData[month] += 1;
  });
  return Object.keys(yearlyData).map((month) => ({
    date: month,
    count: yearlyData[month],
  }));
};


//works with real data
const chartConfig = {
  monthlyCount: {
    label: "Monthly",
    color: "hsl(210, 100%, 50%)", 
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
    xAxisFormatter: (value) => value,
  },
};

//works with real data
export function ChartComponentLiveData({ userWriting }) {
  const [activeChart, setActiveChart] = useState("monthlyCount");
  const [monthlyData, setMonthlyData] = useState([]);
  const [yearlyData, setYearlyData] = useState([]);

  useEffect(() => {
    if (Array.isArray(userWriting)) {
      setMonthlyData(transformToMonthlyData(userWriting));
      setYearlyData(transformToYearlyData(userWriting));
    } else {
      console.error("userWritings is not an array:", userWriting);
    }
  }, [userWriting]);

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