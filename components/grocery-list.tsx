"use client"

import { useState } from "react"
import { Plus, Trash2, ShoppingCart, Printer, Share } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface GroceryListProps {
  items: any[]
  onItemsChange: (items: any[]) => void
}

const categories = [
  "Sayuran",
  "Buah",
  "Daging",
  "Dairy & Eggs",
  "Pantry",
  "Bumbu",
  "Grains",
  "Pasta & Noodles",
  "Herbs",
]

export function GroceryList({ items, onItemsChange }: GroceryListProps) {
  const [newItem, setNewItem] = useState({ name: "", amount: "", unit: "", category: "" })
  const [editingId, setEditingId] = useState(null)
  const [showAddDialog, setShowAddDialog] = useState(false)

  const addItem = () => {
    if (newItem.name.trim()) {
      const item = {
        id: Date.now(),
        ...newItem,
        checked: false,
      }
      onItemsChange([...items, item])
      setNewItem({ name: "", amount: "", unit: "", category: "" })
      setShowAddDialog(false)
    }
  }

  const toggleItem = (id: number) => {
    onItemsChange(items.map((item) => (item.id === id ? { ...item, checked: !item.checked } : item)))
  }

  const deleteItem = (id: number) => {
    onItemsChange(items.filter((item) => item.id !== id))
  }

  const clearCompleted = () => {
    onItemsChange(items.filter((item) => !item.checked))
  }

  const groupedItems = items.reduce((acc, item) => {
    const category = item.category || "Lainnya"
    if (!acc[category]) acc[category] = []
    acc[category].push(item)
    return acc
  }, {})

  const completedCount = items.filter((item) => item.checked).length
  const totalCost = items.reduce((sum, item) => sum + (item.estimatedCost || 0), 0)

  return (
    <Card className="sticky top-6">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <ShoppingCart className="w-5 h-5" />
          Daftar Belanja
          <Badge variant="secondary">{items.length}</Badge>
        </CardTitle>
        <div className="flex gap-2">
          <Dialog open={showAddDialog} onOpenChange={setShowAddDialog}>
            <DialogTrigger asChild>
              <Button size="sm" className="flex-1">
                <Plus className="w-4 h-4 mr-2" />
                Tambah
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Tambah Item Baru</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">Nama Item</Label>
                  <Input
                    id="name"
                    value={newItem.name}
                    onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
                    placeholder="Contoh: Tomat"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="amount">Jumlah</Label>
                    <Input
                      id="amount"
                      value={newItem.amount}
                      onChange={(e) => setNewItem({ ...newItem, amount: e.target.value })}
                      placeholder="500"
                    />
                  </div>
                  <div>
                    <Label htmlFor="unit">Satuan</Label>
                    <Input
                      id="unit"
                      value={newItem.unit}
                      onChange={(e) => setNewItem({ ...newItem, unit: e.target.value })}
                      placeholder="gram"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="category">Kategori</Label>
                  <Select
                    value={newItem.category}
                    onValueChange={(value) => setNewItem({ ...newItem, category: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Pilih kategori" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((cat) => (
                        <SelectItem key={cat} value={cat}>
                          {cat}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <Button onClick={addItem} className="w-full">
                  Tambah Item
                </Button>
              </div>
            </DialogContent>
          </Dialog>

          <Button variant="outline" size="sm" onClick={clearCompleted}>
            <Trash2 className="w-4 h-4" />
          </Button>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Progress */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Progress</span>
            <span>
              {completedCount}/{items.length}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-green-500 h-2 rounded-full transition-all"
              style={{ width: `${items.length ? (completedCount / items.length) * 100 : 0}%` }}
            />
          </div>
        </div>

        {/* Estimated Cost */}
        {totalCost > 0 && (
          <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <div className="text-sm text-blue-600 dark:text-blue-300">
              Estimasi Total:{" "}
              {new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
                minimumFractionDigits: 0,
              }).format(totalCost)}
            </div>
          </div>
        )}

        {/* Grouped Items */}
        <div className="space-y-4 max-h-96 overflow-y-auto">
          {Object.entries(groupedItems).map(([category, categoryItems]) => (
            <div key={category}>
              <h4 className="font-semibold text-sm text-gray-600 dark:text-gray-300 mb-2">{category}</h4>
              <div className="space-y-2">
                {categoryItems.map((item: any) => (
                  <div
                    key={item.id}
                    className={`flex items-center gap-3 p-3 rounded-lg border transition-all ${
                      item.checked
                        ? "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800"
                        : "bg-white dark:bg-slate-800 border-gray-200 dark:border-slate-700"
                    }`}
                  >
                    <Checkbox checked={item.checked} onCheckedChange={() => toggleItem(item.id)} />
                    <div className={`flex-1 ${item.checked ? "line-through text-gray-500" : ""}`}>
                      <div className="font-medium">{item.name}</div>
                      {item.amount && (
                        <div className="text-sm text-gray-500">
                          {item.amount} {item.unit}
                        </div>
                      )}
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => deleteItem(item.id)}
                      className="w-8 h-8 text-red-500 hover:text-red-700"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {items.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            <ShoppingCart className="w-12 h-12 mx-auto mb-4 opacity-50" />
            <p>Daftar belanja kosong</p>
            <p className="text-sm">Tambahkan item dari resep atau manual</p>
          </div>
        )}

        {/* Action Buttons */}
        {items.length > 0 && (
          <div className="flex gap-2 pt-4 border-t">
            <Button variant="outline" size="sm" className="flex-1 bg-transparent">
              <Printer className="w-4 h-4 mr-2" />
              Cetak
            </Button>
            <Button variant="outline" size="sm" className="flex-1 bg-transparent">
              <Share className="w-4 h-4 mr-2" />
              Bagikan
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
