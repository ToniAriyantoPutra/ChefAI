"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { NavigationTabs } from "@/components/navigation-tabs"
import { RecipeCard } from "@/components/recipe-card"
import { GroceryList } from "@/components/grocery-list"
import { MealPlanner } from "@/components/meal-planner"
import { RecipeRecommendations } from "@/components/recipe-recommendations"
import { NutritionTracker } from "@/components/nutrition-tracker"
import { InventoryManager } from "@/components/inventory-manager"
import { CookingMode } from "@/components/cooking-mode"
import { RecipeImporter } from "@/components/recipe-importer"

const sampleRecipes = [
  {
    id: 1,
    title: "Pasta Carbonara Premium",
    image:
      "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    badge: "TERPOPULER",
    time: 25,
    servings: 4,
    calories: 520,
    difficulty: "Sedang",
    rating: 4.8,
    reviews: 156,
    tags: ["Vegetarian", "Bebas Gluten"],
    ingredients: [
      { name: "spaghetti", amount: 400, unit: "g", category: "Pasta & Noodles" },
      { name: "daging asap (pancetta)", amount: 200, unit: "g", category: "Daging" },
      { name: "telur", amount: 4, unit: "butir", category: "Dairy & Eggs" },
      { name: "keju pecorino", amount: 100, unit: "g", category: "Dairy & Eggs" },
      { name: "keju parmesan", amount: 50, unit: "g", category: "Dairy & Eggs" },
      { name: "bawang putih", amount: 2, unit: "siung", category: "Sayuran" },
      { name: "garam dan lada hitam", amount: 1, unit: "secukupnya", category: "Bumbu" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Rebus spaghetti dalam air mendidih yang diberi garam hingga al dente (sekitar 8-10 menit). Sementara itu, potong dadu pancetta dan cincang bawang putih.",
        time: 10,
        temperature: null,
        tips: "Pastikan air benar-benar mendidih sebelum memasukkan pasta",
      },
      {
        step: 2,
        instruction:
          "Panaskan wajan, tambahkan pancetta dan masak hingga garing. Tambahkan bawang putih cincang dan masak selama 1 menit hingga harum.",
        time: 5,
        temperature: "Medium-high",
        tips: "Jangan sampai bawang putih gosong",
      },
      {
        step: 3,
        instruction:
          "Dalam mangkuk, kocok telur, keju pecorino, keju parmesan, garam, dan lada hitam hingga tercampur rata.",
        time: 2,
        temperature: null,
        tips: "Gunakan keju yang sudah diparut halus",
      },
      {
        step: 4,
        instruction:
          "Tiriskan spaghetti, sisakan sedikit air rebusan. Segera campur spaghetti dengan campuran telur dan keju. Aduk cepat hingga saus mengental.",
        time: 2,
        temperature: null,
        tips: "Kunci sukses: aduk cepat agar telur tidak menggumpal",
      },
      {
        step: 5,
        instruction:
          "Tambahkan pancetta dan bawang putih ke spaghetti. Aduk rata. Sajikan segera dengan taburan keju parmesan dan lada hitam segar.",
        time: 1,
        temperature: null,
        tips: "Sajikan dalam piring yang sudah dihangatkan",
      },
    ],
    nutrition: {
      carbs: 45,
      protein: 25,
      fat: 20,
      fiber: 7,
      sugar: 3,
    },
    cost: 45000,
    prepTime: 15,
    cookTime: 25,
    category: "Makan Malam",
  },
  {
    id: 2,
    title: "Salad Quinoa Mediterania",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    badge: "BARU",
    time: 20,
    servings: 2,
    calories: 320,
    difficulty: "Mudah",
    rating: 4.6,
    reviews: 89,
    tags: ["Vegan", "Bebas Gluten"],
    ingredients: [
      { name: "quinoa", amount: 200, unit: "g", category: "Grains" },
      { name: "mentimun", amount: 1, unit: "buah", category: "Sayuran" },
      { name: "tomat ceri", amount: 200, unit: "g", category: "Sayuran" },
      { name: "zaitun", amount: 100, unit: "g", category: "Pantry" },
      { name: "daun mint", amount: 50, unit: "g", category: "Herbs" },
      { name: "lemon", amount: 1, unit: "buah", category: "Buah" },
      { name: "minyak zaitun", amount: 3, unit: "sdm", category: "Pantry" },
    ],
    steps: [
      {
        step: 1,
        instruction: "Cuci quinoa hingga bersih, lalu rebus dalam air mendidih selama 15 menit hingga empuk.",
        time: 15,
        temperature: null,
        tips: "Bilas quinoa sampai air bilasan jernih",
      },
      {
        step: 2,
        instruction: "Potong dadu mentimun dan tomat ceri. Cincang halus daun mint.",
        time: 5,
        temperature: null,
        tips: "Potong sayuran dengan ukuran yang seragam",
      },
      {
        step: 3,
        instruction: "Campur quinoa yang sudah dingin dengan sayuran, zaitun, dan mint.",
        time: 2,
        temperature: null,
        tips: "Pastikan quinoa sudah benar-benar dingin",
      },
      {
        step: 4,
        instruction: "Buat dressing dari perasan lemon dan minyak zaitun. Tuang ke salad dan aduk rata.",
        time: 3,
        temperature: null,
        tips: "Tambahkan garam dan lada sesuai selera",
      },
    ],
    nutrition: {
      carbs: 35,
      protein: 15,
      fat: 25,
      fiber: 15,
      sugar: 10,
    },
    cost: 25000,
    prepTime: 10,
    cookTime: 15,
    category: "Makan Siang",
  },
]

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("Semua Resep")
  const [recipes, setRecipes] = useState(sampleRecipes)
  const [filteredRecipes, setFilteredRecipes] = useState(sampleRecipes)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedRecipe, setSelectedRecipe] = useState(null)
  const [showCookingMode, setShowCookingMode] = useState(false)
  const [groceryItems, setGroceryItems] = useState([])
  const [favorites, setFavorites] = useState(new Set())
  const [filters, setFilters] = useState({
    difficulty: "",
    maxTime: "",
    dietary: [],
    maxCalories: "",
  })

  // Filter recipes based on search and filters
  useEffect(() => {
    let filtered = recipes

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(
        (recipe) =>
          recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          recipe.ingredients.some((ing) => ing.name.toLowerCase().includes(searchQuery.toLowerCase())) ||
          recipe.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase())),
      )
    }

    // Category filter
    if (activeTab !== "Semua Resep") {
      filtered = filtered.filter((recipe) => recipe.category === activeTab)
    }

    // Advanced filters
    if (filters.difficulty) {
      filtered = filtered.filter((recipe) => recipe.difficulty === filters.difficulty)
    }

    if (filters.maxTime) {
      filtered = filtered.filter((recipe) => recipe.time <= Number.parseInt(filters.maxTime))
    }

    if (filters.dietary.length > 0) {
      filtered = filtered.filter((recipe) => filters.dietary.every((diet) => recipe.tags.includes(diet)))
    }

    if (filters.maxCalories) {
      filtered = filtered.filter((recipe) => recipe.calories <= Number.parseInt(filters.maxCalories))
    }

    setFilteredRecipes(filtered)
  }, [recipes, searchQuery, activeTab, filters])

  const addToGroceryList = (ingredients) => {
    const newItems = ingredients.map((ing) => ({
      id: Date.now() + Math.random(),
      name: ing.name,
      amount: ing.amount,
      unit: ing.unit,
      category: ing.category,
      checked: false,
    }))
    setGroceryItems((prev) => [...prev, ...newItems])
  }

  const toggleFavorite = (recipeId) => {
    setFavorites((prev) => {
      const newFavorites = new Set(prev)
      if (newFavorites.has(recipeId)) {
        newFavorites.delete(recipeId)
      } else {
        newFavorites.add(recipeId)
      }
      return newFavorites
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 py-6 max-w-7xl">
        <Header
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          filters={filters}
          onFiltersChange={setFilters}
        />

        <NavigationTabs activeTab={activeTab} onTabChange={setActiveTab} />

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="xl:col-span-3 space-y-8">
            {/* Recipe Recommendations */}
            <RecipeRecommendations recipes={recipes} favorites={favorites} />

            {/* Recipe Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredRecipes.map((recipe) => (
                <RecipeCard
                  key={recipe.id}
                  recipe={recipe}
                  isFavorite={favorites.has(recipe.id)}
                  onToggleFavorite={() => toggleFavorite(recipe.id)}
                  onAddToGroceryList={() => addToGroceryList(recipe.ingredients)}
                  onStartCooking={() => {
                    setSelectedRecipe(recipe)
                    setShowCookingMode(true)
                  }}
                />
              ))}
            </div>

            {/* Meal Planner */}
            <MealPlanner recipes={recipes} />

            {/* Nutrition Tracker */}
            <NutritionTracker />

            {/* Recipe Importer */}
            <RecipeImporter onRecipeImported={(recipe) => setRecipes((prev) => [...prev, recipe])} />
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <GroceryList items={groceryItems} onItemsChange={setGroceryItems} />

            <InventoryManager recipes={recipes} />
          </div>
        </div>

        {/* Cooking Mode Modal */}
        {showCookingMode && selectedRecipe && (
          <CookingMode
            recipe={selectedRecipe}
            onClose={() => {
              setShowCookingMode(false)
              setSelectedRecipe(null)
            }}
          />
        )}
      </div>
    </div>
  )
}
