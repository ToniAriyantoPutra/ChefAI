"use client"

import { useState, useEffect } from "react"
import { Sparkles, TrendingUp, Clock } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface RecipeRecommendationsProps {
  recipes: any[]
  favorites: Set<number>
}

export function RecipeRecommendations({ recipes, favorites }: RecipeRecommendationsProps) {
  const [recommendations, setRecommendations] = useState([])

  useEffect(() => {
    // Simple recommendation algorithm based on favorites and ratings
    const favoriteRecipes = recipes.filter((recipe) => favorites.has(recipe.id))
    const favoriteCategories = favoriteRecipes.map((recipe) => recipe.category)
    const favoriteTags = favoriteRecipes.flatMap((recipe) => recipe.tags)

    const recommended = recipes
      .filter((recipe) => !favorites.has(recipe.id))
      .map((recipe) => {
        let score = recipe.rating * 10

        // Boost score if category matches favorites
        if (favoriteCategories.includes(recipe.category)) {
          score += 20
        }

        // Boost score if tags match favorites
        const matchingTags = recipe.tags.filter((tag) => favoriteTags.includes(tag))
        score += matchingTags.length * 10

        // Boost popular recipes
        if (recipe.reviews > 100) {
          score += 15
        }

        return { ...recipe, score }
      })
      .sort((a, b) => b.score - a.score)
      .slice(0, 3)

    setRecommendations(recommended)
  }, [recipes, favorites])

  if (recommendations.length === 0) return null

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-yellow-500" />
          Rekomendasi Untuk Anda
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {recommendations.map((recipe: any) => (
            <div key={recipe.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg mb-3">
                <img
                  src={recipe.image || "/placeholder.svg"}
                  alt={recipe.title}
                  className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-2 left-2 right-2">
                  <h4 className="text-white font-semibold text-sm leading-tight">{recipe.title}</h4>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex items-center gap-1 text-white text-xs">
                      <Clock className="w-3 h-3" />
                      <span>{recipe.time}m</span>
                    </div>
                    <div className="flex items-center gap-1 text-white text-xs">
                      <TrendingUp className="w-3 h-3" />
                      <span>{recipe.rating}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-1">
                {recipe.tags.slice(0, 2).map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 text-center">
          <Button variant="outline" size="sm">
            Lihat Lebih Banyak Rekomendasi
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
