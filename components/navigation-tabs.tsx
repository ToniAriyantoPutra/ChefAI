"use client"

import { Button } from "@/components/ui/button"

interface NavigationTabsProps {
  activeTab: string
  onTabChange: (tab: string) => void
}

const tabs = ["Semua Resep", "Sarapan", "Makan Siang", "Makan Malam", "Camilan", "Dessert"]

export function NavigationTabs({ activeTab, onTabChange }: NavigationTabsProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-8 p-2 bg-white dark:bg-slate-800 rounded-xl shadow-sm">
      {tabs.map((tab) => (
        <Button
          key={tab}
          variant={activeTab === tab ? "default" : "ghost"}
          onClick={() => onTabChange(tab)}
          className={`rounded-lg transition-all ${
            activeTab === tab
              ? "bg-orange-500 hover:bg-orange-600 text-white shadow-md"
              : "hover:bg-gray-100 dark:hover:bg-slate-700"
          }`}
        >
          {tab}
        </Button>
      ))}
    </div>
  )
}
