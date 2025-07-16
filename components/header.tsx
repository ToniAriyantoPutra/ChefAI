"use client"

import { useState } from "react"
import { Search, Bell, Bookmark, User, Settings, Filter, Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useTheme } from "@/components/theme-provider"

interface HeaderProps {
  searchQuery: string
  onSearchChange: (query: string) => void
  filters: any
  onFiltersChange: (filters: any) => void
}

export function Header({ searchQuery, onSearchChange, filters, onFiltersChange }: HeaderProps) {
  const { theme, setTheme } = useTheme()
  const [notifications] = useState([
    { id: 1, message: "Resep baru: Nasi Goreng Spesial", time: "2 menit lalu" },
    { id: 2, message: "Timer memasak selesai!", time: "5 menit lalu" },
    { id: 3, message: "Meal plan minggu ini siap", time: "1 jam lalu" },
  ])

  const dietaryOptions = ["Vegetarian", "Vegan", "Bebas Gluten", "Keto", "Paleo", "Halal"]

  return (
    <header className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-8">
      {/* Logo */}
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg">
          🍳
        </div>
        <div className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
          ChefAI
        </div>
      </div>

      {/* Search Bar */}
      <div className="flex-1 max-w-2xl relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <Input
          type="text"
          placeholder="Cari resep, bahan, atau kategori..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10 pr-4 py-3 w-full rounded-full border-2 border-gray-200 focus:border-orange-500 transition-colors"
        />
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-3">
        {/* Advanced Filters */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="rounded-full bg-transparent">
              <Filter className="w-5 h-5" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Filter Lanjutan</SheetTitle>
            </SheetHeader>
            <div className="space-y-6 mt-6">
              <div>
                <Label>Tingkat Kesulitan</Label>
                <Select
                  value={filters.difficulty}
                  onValueChange={(value) => onFiltersChange({ ...filters, difficulty: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Pilih kesulitan" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Semua</SelectItem>
                    <SelectItem value="easy">Mudah</SelectItem>
                    <SelectItem value="medium">Sedang</SelectItem>
                    <SelectItem value="hard">Sulit</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label>Waktu Maksimal (menit)</Label>
                <Input
                  type="number"
                  placeholder="Contoh: 30"
                  value={filters.maxTime}
                  onChange={(e) => onFiltersChange({ ...filters, maxTime: e.target.value })}
                />
              </div>

              <div>
                <Label>Kalori Maksimal</Label>
                <Input
                  type="number"
                  placeholder="Contoh: 500"
                  value={filters.maxCalories}
                  onChange={(e) => onFiltersChange({ ...filters, maxCalories: e.target.value })}
                />
              </div>

              <div>
                <Label>Preferensi Diet</Label>
                <div className="space-y-2 mt-2">
                  {dietaryOptions.map((option) => (
                    <div key={option} className="flex items-center space-x-2">
                      <Checkbox
                        id={option}
                        checked={filters.dietary.includes(option)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            onFiltersChange({
                              ...filters,
                              dietary: [...filters.dietary, option],
                            })
                          } else {
                            onFiltersChange({
                              ...filters,
                              dietary: filters.dietary.filter((d) => d !== option),
                            })
                          }
                        }}
                      />
                      <Label htmlFor={option}>{option}</Label>
                    </div>
                  ))}
                </div>
              </div>

              <Button
                onClick={() =>
                  onFiltersChange({
                    difficulty: "all",
                    maxTime: "",
                    dietary: [],
                    maxCalories: "",
                  })
                }
                variant="outline"
                className="w-full"
              >
                Reset Filter
              </Button>
            </div>
          </SheetContent>
        </Sheet>

        {/* Theme Toggle */}
        <Button
          variant="outline"
          size="icon"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          className="rounded-full"
        >
          {theme === "light" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
        </Button>

        {/* Bookmarks */}
        <Button variant="outline" size="icon" className="rounded-full bg-transparent">
          <Bookmark className="w-5 h-5" />
        </Button>

        {/* Notifications */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon" className="rounded-full relative bg-transparent">
              <Bell className="w-5 h-5" />
              <Badge className="absolute -top-2 -right-2 w-5 h-5 flex items-center justify-center p-0 text-xs">
                {notifications.length}
              </Badge>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-80">
            <DropdownMenuLabel>Notifikasi</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {notifications.map((notification) => (
              <DropdownMenuItem key={notification.id} className="flex flex-col items-start p-4">
                <div className="font-medium">{notification.message}</div>
                <div className="text-sm text-gray-500">{notification.time}</div>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* User Menu */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon" className="rounded-full bg-transparent">
              <User className="w-5 h-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Akun Saya</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <User className="w-4 h-4 mr-2" />
              Profil
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="w-4 h-4 mr-2" />
              Pengaturan
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Bookmark className="w-4 h-4 mr-2" />
              Resep Favorit
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Keluar</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
