"use client"

import { useState } from "react"
import { Activity, Target, TrendingUp } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"

export function NutritionTracker() {
  const [dailyGoals, setDailyGoals] = useState({
    calories: 2000,
    protein: 150,
    carbs: 250,
    fat: 65,
  })

  const [consumed, setConsumed] = useState({
    calories: 1200,
    protein: 80,
    carbs: 150,
    fat: 40,
  })

  const getProgressPercentage = (consumed: number, goal: number) => {
    return Math.min((consumed / goal) * 100, 100)
  }

  const getProgressColor = (percentage: number) => {
    if (percentage < 50) return "bg-red-500"
    if (percentage < 80) return "bg-yellow-500"
    return "bg-green-500"
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Activity className="w-5 h-5" />
          Pelacakan Nutrisi Harian
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Daily Progress */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {Object.entries(consumed).map(([key, value]) => {
            const goal = dailyGoals[key]
            const percentage = getProgressPercentage(value, goal)

            return (
              <div key={key} className="text-center space-y-2">
                <div className="text-2xl font-bold">
                  {value}
                  <span className="text-sm text-gray-500">/{goal}</span>
                </div>
                <div className="text-sm font-medium capitalize">{key}</div>
                <Progress value={percentage} className="h-2" />
                <div className="text-xs text-gray-500">{percentage.toFixed(0)}% dari target</div>
              </div>
            )
          })}
        </div>

        {/* Weekly Trend */}
        <div className="space-y-4">
          <h3 className="font-semibold flex items-center gap-2">
            <TrendingUp className="w-4 h-4" />
            Tren Mingguan
          </h3>
          <div className="grid grid-cols-7 gap-2">
            {["Sen", "Sel", "Rab", "Kam", "Jum", "Sab", "Min"].map((day, index) => (
              <div key={day} className="text-center">
                <div className="text-xs text-gray-500 mb-1">{day}</div>
                <div
                  className={`h-16 rounded ${index < 5 ? "bg-green-200" : "bg-gray-200"} flex items-end justify-center`}
                >
                  <div
                    className={`w-full rounded-b ${index < 5 ? "bg-green-500" : "bg-gray-400"}`}
                    style={{ height: `${Math.random() * 80 + 20}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="flex-1 bg-transparent">
            <Target className="w-4 h-4 mr-2" />
            Atur Target
          </Button>
          <Button variant="outline" size="sm" className="flex-1 bg-transparent">
            Log Makanan
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
