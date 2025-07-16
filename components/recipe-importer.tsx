"use client"

import { useState } from "react"
import { Upload, Link, FileText, Download } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { toast } from "@/hooks/use-toast"

interface RecipeImporterProps {
  onRecipeImported: (recipe: any) => void
}

export function RecipeImporter({ onRecipeImported }: RecipeImporterProps) {
  const [url, setUrl] = useState("")
  const [manualRecipe, setManualRecipe] = useState({
    title: "",
    description: "",
    ingredients: "",
    instructions: "",
    time: "",
    servings: "",
    category: "",
  })
  const [isImporting, setIsImporting] = useState(false)

  const importFromUrl = async () => {
    if (!url.trim()) return

    setIsImporting(true)
    try {
      // Simulate API call to extract recipe from URL
      await new Promise((resolve) => setTimeout(resolve, 2000))

      const importedRecipe = {
        id: Date.now(),
        title: "Resep Impor dari " + new URL(url).hostname,
        image:
          "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        badge: "IMPOR",
        time: 30,
        servings: 4,
        calories: 400,
        difficulty: "Sedang",
        rating: 4.5,
        reviews: 0,
        tags: ["Impor"],
        ingredients: [
          { name: "bahan 1", amount: 200, unit: "g", category: "Pantry" },
          { name: "bahan 2", amount: 1, unit: "buah", category: "Sayuran" },
        ],
        steps: [{ step: 1, instruction: "Langkah pertama dari resep yang diimpor", time: 10 }],
        nutrition: { carbs: 40, protein: 20, fat: 25, fiber: 10, sugar: 5 },
        cost: 30000,
        prepTime: 15,
        cookTime: 30,
        category: "Makan Malam",
      }

      onRecipeImported(importedRecipe)
      setUrl("")
      toast({
        title: "Berhasil!",
        description: "Resep berhasil diimpor dari URL",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Gagal mengimpor resep dari URL",
        variant: "destructive",
      })
    } finally {
      setIsImporting(false)
    }
  }

  const addManualRecipe = () => {
    if (!manualRecipe.title.trim()) return

    const newRecipe = {
      id: Date.now(),
      title: manualRecipe.title,
      image:
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      badge: "MANUAL",
      time: Number.parseInt(manualRecipe.time) || 30,
      servings: Number.parseInt(manualRecipe.servings) || 4,
      calories: 400,
      difficulty: "Sedang",
      rating: 4.0,
      reviews: 0,
      tags: ["Manual"],
      ingredients: manualRecipe.ingredients
        .split("\n")
        .map((ing, index) => ({
          name: ing.trim(),
          amount: 1,
          unit: "porsi",
          category: "Pantry",
        }))
        .filter((ing) => ing.name),
      steps: manualRecipe.instructions
        .split("\n")
        .map((step, index) => ({
          step: index + 1,
          instruction: step.trim(),
          time: 5,
        }))
        .filter((step) => step.instruction),
      nutrition: { carbs: 40, protein: 20, fat: 25, fiber: 10, sugar: 5 },
      cost: 25000,
      prepTime: 15,
      cookTime: Number.parseInt(manualRecipe.time) || 30,
      category: manualRecipe.category || "Makan Malam",
    }

    onRecipeImported(newRecipe)
    setManualRecipe({
      title: "",
      description: "",
      ingredients: "",
      instructions: "",
      time: "",
      servings: "",
      category: "",
    })

    toast({
      title: "Berhasil!",
      description: "Resep manual berhasil ditambahkan",
    })
  }

  const exportRecipes = () => {
    toast({
      title: "Export",
      description: "Fitur export akan segera tersedia",
    })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Upload className="w-5 h-5" />
          Import & Export Resep
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="url" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="url">Import URL</TabsTrigger>
            <TabsTrigger value="manual">Manual</TabsTrigger>
            <TabsTrigger value="export">Export</TabsTrigger>
          </TabsList>

          <TabsContent value="url" className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="recipe-url">URL Resep</Label>
              <div className="flex gap-2">
                <Input
                  id="recipe-url"
                  placeholder="https://example.com/recipe"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                />
                <Button onClick={importFromUrl} disabled={isImporting || !url.trim()}>
                  {isImporting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                      Import...
                    </>
                  ) : (
                    <>
                      <Link className="w-4 h-4 mr-2" />
                      Import
                    </>
                  )}
                </Button>
              </div>
            </div>
            <div className="text-sm text-gray-500">Mendukung import dari berbagai website resep populer</div>
          </TabsContent>

          <TabsContent value="manual" className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="title">Judul Resep</Label>
                <Input
                  id="title"
                  value={manualRecipe.title}
                  onChange={(e) => setManualRecipe({ ...manualRecipe, title: e.target.value })}
                  placeholder="Nama resep"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="category">Kategori</Label>
                <Input
                  id="category"
                  value={manualRecipe.category}
                  onChange={(e) => setManualRecipe({ ...manualRecipe, category: e.target.value })}
                  placeholder="Makan Malam"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="time">Waktu (menit)</Label>
                <Input
                  id="time"
                  type="number"
                  value={manualRecipe.time}
                  onChange={(e) => setManualRecipe({ ...manualRecipe, time: e.target.value })}
                  placeholder="30"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="servings">Porsi</Label>
                <Input
                  id="servings"
                  type="number"
                  value={manualRecipe.servings}
                  onChange={(e) => setManualRecipe({ ...manualRecipe, servings: e.target.value })}
                  placeholder="4"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="ingredients">Bahan-bahan (satu per baris)</Label>
              <Textarea
                id="ingredients"
                value={manualRecipe.ingredients}
                onChange={(e) => setManualRecipe({ ...manualRecipe, ingredients: e.target.value })}
                placeholder="200g tepung terigu&#10;2 butir telur&#10;250ml susu"
                rows={4}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="instructions">Langkah-langkah (satu per baris)</Label>
              <Textarea
                id="instructions"
                value={manualRecipe.instructions}
                onChange={(e) => setManualRecipe({ ...manualRecipe, instructions: e.target.value })}
                placeholder="Campurkan tepung dan telur&#10;Tambahkan susu sedikit demi sedikit&#10;Aduk hingga rata"
                rows={6}
              />
            </div>

            <Button onClick={addManualRecipe} className="w-full">
              <FileText className="w-4 h-4 mr-2" />
              Tambah Resep
            </Button>
          </TabsContent>

          <TabsContent value="export" className="space-y-4">
            <div className="text-center space-y-4">
              <div className="text-gray-600">Export koleksi resep Anda ke berbagai format</div>
              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" onClick={exportRecipes}>
                  <Download className="w-4 h-4 mr-2" />
                  Export PDF
                </Button>
                <Button variant="outline" onClick={exportRecipes}>
                  <Download className="w-4 h-4 mr-2" />
                  Export JSON
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
