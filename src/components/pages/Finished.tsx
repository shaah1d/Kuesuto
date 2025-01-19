"use client"
import * as React from "react"
import {useState} from 'react'
import { TrendingUp } from "lucide-react"
import { Label, Pie, PieChart } from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"


interface FinishedProps {
  score: number; 
  incorrectAnswers: {
    question: string;
    correctAnswer: string;
    userAnswer: string;
    explanation: string;
  }[];
}


const chartConfig = {
  visitors: {
    label: "Questions",
  },
  chrome: {
    label: "Correct",
    color: "#4f772d",
  },

  other: {
    label: "Wrong",
    color: "#c1121f",
  },
} satisfies ChartConfig


function Finished({ score , incorrectAnswers}: FinishedProps) {
  const chartData = [
    { browser: "chrome", questions: score ?? 0, fill: "var(--color-chrome)" },
  
    { browser: "other", questions: 10 - (score ?? 0), fill: "var(--color-other)" },
  ]
  
  const totalVisitors = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.questions, 0)
  }, [])
 
    return (
   <div className="overflow-hidden">
        
      <CardHeader className="items-center pb-0">
        <CardTitle>Pie Chart - Your Score</CardTitle>
      
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="questions"
              nameKey="browser"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {totalVisitors.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                  Questions
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>


      {incorrectAnswers.map((answer, index) => (
          <Card key={index} className= "border-black-500 mt-2">
            <CardHeader>
              <CardTitle className="text-lg">{answer.question}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-2">
                <span className="font-semibold">Your answer:</span> {answer.userAnswer}
              </p>
              <p className="mb-2">
                <span className="font-semibold">Correct answer:</span> {answer.correctAnswer}
              </p>
              <p className="mt-4 p-4 bg-gray-100 rounded-md">
                <span className="font-semibold text-green-500">Explanation:</span> {answer.explanation}
              </p>
            </CardContent>
          </Card>
    ))}

    <button className="btn btn-primary mt-3"
    onClick={() => window.location.reload()}>
      Give another shot &rarr;
    </button>
      </div>
      );
}

export default Finished