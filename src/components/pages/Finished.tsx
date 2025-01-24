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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


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
    color: " #28a745",
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
      <div className="container mx-auto px-4 py-8 max-w-4xl">
     
        <CardHeader className="text-center">
          <CardTitle>Quiz Results</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="mx-auto aspect-square max-h-[250px]">
            <PieChart>
              <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
              <Pie data={chartData} dataKey="questions" nameKey="browser" innerRadius={60} strokeWidth={5}>
                <Label
                  content={({ viewBox }) => {
                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                      return (
                        <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle" dominantBaseline="middle">
                          <tspan x={viewBox.cx} y={viewBox.cy} className="fill-foreground text-3xl font-bold">
                            {score}
                          </tspan>
                          <tspan x={viewBox.cx} y={(viewBox.cy || 0) + 24} className="fill-muted-foreground text-sm">
                            Correct
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
    

      {incorrectAnswers.length > 0 && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Incorrect Answers</h2>
          <Accordion type="single" collapsible className="w-full">
            {incorrectAnswers.map((answer, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{answer.question}</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    <p>
                      <span className="font-semibold">Your answer:</span> {answer.userAnswer}
                    </p>
                    <p>
                      <span className="font-semibold">Correct answer:</span> {answer.correctAnswer}
                    </p>
                    <div className="bg-muted p-4 rounded-md">
                      <p className="font-semibold text-green-500 mb-2">Explanation:</p>
                      <p>{answer.explanation}</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      )}
  <div className="text-center">
    <button className="btn btn-primary mt-3"
    onClick={() => window.location.reload()}>
      Give another shot &rarr;
    </button>
    </div>
      </div>
      );
}

export default Finished