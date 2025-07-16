"use client"

import { useState } from "react"
import { Package, AlertTriangle, Plus, Minus } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

interface InventoryManagerProps {
  recipes: any[]
}

export function InventoryManager({ recipes }: InventoryManagerProps) {
  const [inventory, setInventory] = useState([
    { id: 1, name: "Beras", current: 2, max: 5, unit: "kg", category: "Grains", expiry: "2024-03-15" },
    { id: 2, name: "Telur", current: 6, max: 12, unit: "butir", category: "Dairy & Eggs", expiry: "2024-02-20" },
    { id: 3, name: "Minyak Goreng", current: 1, max: 2, unit: "liter", category: "Pantry", expiry: "2024-06-10" },
    { id: 4, name: "Garam", current: 0, max: 1, unit: "kg", category: "Bumbu", expiry: "2025-01-01" },
  ])

  const updateQuantity = (id: number, change: number) => {
    setInventory((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, current: Math.max(0, Math.min(item.max, item.current + change)) } : item,
      ),
    )
  }

  const getStockLevel = (current: number, max: number) => {
    const percentage = (current / max) * 100
    if (percentage === 0) return { level: "empty", color: "bg-red-500", text: "Habis" }
    if (percentage < 25) return { level: "low", color: "bg-orange-500", text: "Rendah" }
    if (percentage < 75) return { level: "medium", color: "bg-yellow-500", text: "Sedang" }
    return { level: "high", color: "bg-green-500", text: "Cukup" }
  }

  const getRecipeSuggestions = () => {
    const availableIngredients = inventory.filter((item) => item.current > 0).map((item) => item.name.toLowerCase())

    return recipes
      .filter((recipe) =>
        recipe.ingredients.some((ing) =>
          availableIngredients.some(
            (available) => ing.name.toLowerCase().includes(available) || available.includes(ing.name.toLowerCase()),
          ),
        ),
      )
      .slice(0, 3)
  }

  const lowStockItems = inventory.filter((item) => item.current / item.max < 0.25)
  const suggestions = getRecipeSuggestions()

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Package className="w-5 h-5" />
          Manajemen Persediaan
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Low Stock Alert */}
        {lowStockItems.length > 0 && (
          <div className="p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200 dark:border-orange-800">
            <div className="flex items-center gap-2 text-orange-800 dark:text-orange-200 mb-2">
              <AlertTriangle className="w-4 h-4" />
              <span className="font-medium">Stok Menipis</span>
            </div>
            <div className="space-y-1">
              {lowStockItems.map((item) => (
                <div key={item.id} className="text-sm text-orange-700 dark:text-orange-300">
                  • {item.name}: {item.current} {item.unit}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Inventory List */}
        <div className="space-y-3">
          {inventory.map((item) => {
            const stockLevel = getStockLevel(item.current, item.max)
            const percentage = (item.current / item.max) * 100

            return (
              <div key={item.id} className="p-3 border rounded-lg space-y-2">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium">{item.name}</h4>
                    <div className="text-sm text-gray-500">
                      {item.current} / {item.max} {item.unit}
                    </div>
                  </div>
                  <Badge variant={stockLevel.level === "empty" ? "destructive" : "secondary"}>{stockLevel.text}</Badge>
                </div>

                <Progress value={percentage} className="h-2" />

                <div className="flex justify-between items-center">
                  <div className="text-xs text-gray-500">Exp: {new Date(item.expiry).toLocaleDateString("id-ID")}</div>
                  <div className="flex items-center gap-1">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => updateQuantity(item.id, -1)}
                      disabled={item.current === 0}
                      className="w-8 h-8 p-0"
                    >
                      <Minus className="w-3 h-3" />
                    </Button>
                    <span className="w-8 text-center text-sm">{item.current}</span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => updateQuantity(item.id, 1)}
                      disabled={item.current === item.max}
                      className="w-8 h-8 p-0"
                    >
                      <Plus className="w-3 h-3" />
                    </Button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Recipe Suggestions */}
        {suggestions.length > 0 && (
          <div className="space-y-3">
            <h4 className="font-medium text-sm">Resep yang Bisa Dibuat</h4>
            {suggestions.map((recipe) => (
              <div
                key={recipe.id}
                className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={recipe.image || "/placeholder.svg"}
                    alt={recipe.title}
                    className="w-12 h-12 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h5 className="font-medium text-sm">{recipe.title}</h5>
                    <div className="text-xs text-gray-500">
                      {recipe.time} menit • {recipe.servings} porsi
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <Button className="w-full" size="sm">
          <Plus className="w-4 h-4 mr-2" />
          Tambah Item Baru
        </Button>
      </CardContent>
    </Card>
  )
}
