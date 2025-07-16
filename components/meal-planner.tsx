"use client"

import { useState } from "react"
import { Calendar, Plus, ChefHat, Clock } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

interface MealPlannerProps {
  recipes: any[]
}

const daysOfWeek = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"]
const mealTypes = ["Sarapan", "Makan Siang", "Makan Malam", "Camilan"]

export function MealPlanner({ recipes }: MealPlannerProps) {
  const [mealPlan, setMealPlan] = useState({})
  const [selectedDay, setSelectedDay] = useState("")
  const [selectedMealType, setSelectedMealType] = useState("")
  const [showAddDialog, setShowAddDialog] = useState(false)

  const addMealToPlan = (recipeId: number) => {
    if (selectedDay && selectedMealType) {
      const key = `${selectedDay}-${selectedMealType}`
      const recipe = recipes.find((r) => r.id === recipeId)
      setMealPlan((prev) => ({
        ...prev,
        [key]: recipe,
      }))
      setShowAddDialog(false)
    }
  }

  const removeMealFromPlan = (day: string, mealType: string) => {
    const key = `${day}-${mealType}`
    setMealPlan((prev) => {
      const newPlan = { ...prev }
      delete newPlan[key]
      return newPlan
    })
  }

  const getTotalNutrition = () => {
    const meals = Object.values(mealPlan)
    return meals.reduce(
      (total, meal: any) => ({
        calories: total.calories + (meal?.calories || 0),
        cost: total.cost + (meal?.cost || 0),
      }),
      { calories: 0, cost: 0 },
    )
  }

  const weeklyNutrition = getTotalNutrition()

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calendar className="w-5 h-5" />
          Perencanaan Makan Mingguan
        </CardTitle>
        <div className="flex gap-4 text-sm">
          <div className="flex items-center gap-2">
            <span>Total Kalori/Minggu:</span>
            <Badge variant="secondary">{weeklyNutrition.calories} kal</Badge>
          </div>
          <div className="flex items-center gap-2">
            <span>Estimasi Biaya:</span>
            <Badge variant="secondary">
              {new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
                minimumFractionDigits: 0,
              }).format(weeklyNutrition.cost)}
            </Badge>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <div className="grid grid-cols-1 lg:grid-cols-7 gap-4">
          {daysOfWeek.map((day) => (
            <div key={day} className="space-y-3">
              <h3 className="font-semibold text-center p-2 bg-gray-100 dark:bg-slate-800 rounded-lg">{day}</h3>

              {mealTypes.map((mealType) => {
                const key = `${day}-${mealType}`
                const meal = mealPlan[key]

                return (
                  <div key={mealType} className="space-y-2">
                    <h4 className="text-sm font-medium text-gray-600 dark:text-gray-300">{mealType}</h4>

                    {meal ? (
                      <div className="p-3 bg-white dark:bg-slate-800 rounded-lg border shadow-sm">
                        <div className="flex justify-between items-start mb-2">
                          <h5 className="font-medium text-sm leading-tight">{meal.title}</h5>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeMealFromPlan(day, mealType)}
                            className="w-6 h-6 p-0 text-red-500 hover:text-red-700"
                          >
                            ×
                          </Button>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                          <Clock className="w-3 h-3" />
                          <span>{meal.time}m</span>
                          <span>•</span>
                          <span>{meal.calories} kal</span>
                        </div>
                      </div>
                    ) : (
                      <Dialog
                        open={showAddDialog && selectedDay === day && selectedMealType === mealType}
                        onOpenChange={setShowAddDialog}
                      >
                        <DialogTrigger asChild>
                          <Button
                            variant="outline"
                            size="sm"
                            className="w-full h-16 border-dashed bg-transparent"
                            onClick={() => {
                              setSelectedDay(day)
                              setSelectedMealType(mealType)
                              setShowAddDialog(true)
                            }}
                          >
                            <Plus className="w-4 h-4" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>
                              Pilih Resep untuk {mealType} - {day}
                            </DialogTitle>
                          </DialogHeader>
                          <div className="space-y-4 max-h-96 overflow-y-auto">
                            {recipes
                              .filter((recipe) => recipe.category === mealType || mealType === "Camilan")
                              .map((recipe) => (
                                <div
                                  key={recipe.id}
                                  className="flex items-center gap-4 p-4 border rounded-lg hover:bg-gray-50 dark:hover:bg-slate-800 cursor-pointer"
                                  onClick={() => addMealToPlan(recipe.id)}
                                >
                                  <img
                                    src={recipe.image || "/placeholder.svg"}
                                    alt={recipe.title}
                                    className="w-16 h-16 object-cover rounded-lg"
                                  />
                                  <div className="flex-1">
                                    <h4 className="font-medium">{recipe.title}</h4>
                                    <div className="flex items-center gap-2 text-sm text-gray-500">
                                      <Clock className="w-4 h-4" />
                                      <span>{recipe.time}m</span>
                                      <span>•</span>
                                      <span>{recipe.calories} kal</span>
                                    </div>
                                  </div>
                                  <ChefHat className="w-5 h-5 text-gray-400" />
                                </div>
                              ))}
                          </div>
                        </DialogContent>
                      </Dialog>
                    )}
                  </div>
                )
              })}
            </div>
          ))}
        </div>

        <div className="mt-6 flex gap-4">
          <Button className="flex-1">
            <Calendar className="w-4 h-4 mr-2" />
            Generate Meal Plan Otomatis
          </Button>
          <Button variant="outline" className="flex-1 bg-transparent">
            Export ke Kalender
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
