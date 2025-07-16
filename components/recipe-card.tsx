"use client"

import { useState } from "react"
import { Heart, Clock, Users, Flame, Star, ChefHat, ShoppingCart, Play, DollarSign } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface RecipeCardProps {
  recipe: any
  isFavorite: boolean
  onToggleFavorite: () => void
  onAddToGroceryList: () => void
  onStartCooking: () => void
}

export function RecipeCard({
  recipe,
  isFavorite,
  onToggleFavorite,
  onAddToGroceryList,
  onStartCooking,
}: RecipeCardProps) {
  const [servings, setServings] = useState(recipe.servings)
  const [showDetails, setShowDetails] = useState(false)
  const [unit, setUnit] = useState("metric")

  const scaledIngredients = recipe.ingredients.map((ing) => ({
    ...ing,
    amount: (ing.amount * servings) / recipe.servings,
  }))

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Mudah":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
      case "Sedang":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
      case "Sulit":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200"
    }
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(amount)
  }

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
      <div className="relative">
        <img
          src={recipe.image || "/placeholder.svg"}
          alt={recipe.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <Badge className="absolute top-4 right-4 bg-orange-500 hover:bg-orange-600">{recipe.badge}</Badge>
        <Button
          variant="ghost"
          size="icon"
          onClick={onToggleFavorite}
          className="absolute top-4 left-4 bg-white/80 hover:bg-white"
        >
          <Heart className={`w-5 h-5 ${isFavorite ? "fill-red-500 text-red-500" : "text-gray-600"}`} />
        </Button>
      </div>

      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-orange-600 transition-colors">
            {recipe.title}
          </h3>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium">{recipe.rating}</span>
            <span className="text-sm text-gray-500">({recipe.reviews})</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 mb-4">
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
            <Clock className="w-4 h-4" />
            <span>{recipe.time} menit</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
            <Users className="w-4 h-4" />
            <span>{recipe.servings} porsi</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
            <Flame className="w-4 h-4" />
            <span>{recipe.calories} kal</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
            <DollarSign className="w-4 h-4" />
            <span>{formatCurrency(recipe.cost)}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          <Badge className={getDifficultyColor(recipe.difficulty)}>{recipe.difficulty}</Badge>
          {recipe.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="flex gap-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="flex-1 bg-transparent">
                <ChefHat className="w-4 h-4 mr-2" />
                Detail
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-2xl">{recipe.title}</DialogTitle>
              </DialogHeader>

              <Tabs defaultValue="ingredients" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="ingredients">Bahan</TabsTrigger>
                  <TabsTrigger value="steps">Langkah</TabsTrigger>
                  <TabsTrigger value="nutrition">Nutrisi</TabsTrigger>
                  <TabsTrigger value="tips">Tips</TabsTrigger>
                </TabsList>

                <TabsContent value="ingredients" className="space-y-4">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <Label htmlFor="servings">Porsi:</Label>
                      <Input
                        id="servings"
                        type="number"
                        value={servings}
                        onChange={(e) => setServings(Number.parseInt(e.target.value) || 1)}
                        className="w-20"
                        min="1"
                      />
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setUnit(unit === "metric" ? "imperial" : "metric")}
                    >
                      {unit === "metric" ? "Metrik" : "Imperial"}
                    </Button>
                  </div>

                  <div className="space-y-2">
                    {scaledIngredients.map((ingredient, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center p-3 bg-gray-50 dark:bg-slate-800 rounded-lg"
                      >
                        <span>{ingredient.name}</span>
                        <span className="font-medium">
                          {ingredient.amount} {ingredient.unit}
                        </span>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="steps" className="space-y-4">
                  {recipe.steps.map((step, index) => (
                    <div key={index} className="flex gap-4 p-4 bg-gray-50 dark:bg-slate-800 rounded-lg">
                      <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                        {step.step}
                      </div>
                      <div className="flex-1">
                        <p className="mb-2">{step.instruction}</p>
                        {step.time && (
                          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                            <Clock className="w-4 h-4" />
                            <span>{step.time} menit</span>
                            {step.temperature && (
                              <>
                                <span>•</span>
                                <span>{step.temperature}</span>
                              </>
                            )}
                          </div>
                        )}
                        {step.tips && (
                          <div className="mt-2 p-2 bg-blue-50 dark:bg-blue-900/20 rounded text-sm text-blue-800 dark:text-blue-200">
                            💡 {step.tips}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </TabsContent>

                <TabsContent value="nutrition" className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    {Object.entries(recipe.nutrition).map(([key, value]) => (
                      <div key={key} className="space-y-2">
                        <div className="flex justify-between">
                          <span className="capitalize">{key}</span>
                          <span>{value}%</span>
                        </div>
                        <Progress value={value} className="h-2" />
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="tips" className="space-y-4">
                  <div className="space-y-3">
                    <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                      <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Tips Memasak</h4>
                      <ul className="space-y-1 text-sm text-green-700 dark:text-green-300">
                        <li>• Siapkan semua bahan sebelum mulai memasak</li>
                        <li>• Gunakan api sedang untuk hasil terbaik</li>
                        <li>• Jangan lupa mencicipi dan sesuaikan bumbu</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                      <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Substitusi Bahan</h4>
                      <ul className="space-y-1 text-sm text-blue-700 dark:text-blue-300">
                        <li>• Keju parmesan → Keju cheddar parut</li>
                        <li>• Pancetta → Bacon atau ham</li>
                        <li>• Spaghetti → Pasta lain seperti fettuccine</li>
                      </ul>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </DialogContent>
          </Dialog>

          <Button onClick={onAddToGroceryList} variant="outline" size="icon">
            <ShoppingCart className="w-4 h-4" />
          </Button>

          <Button onClick={onStartCooking} className="bg-orange-500 hover:bg-orange-600">
            <Play className="w-4 h-4 mr-2" />
            Masak
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
