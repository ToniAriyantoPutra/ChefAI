// Global state
const SAMPLE_RECIPES = [
  {
    id: 1,
    title: "Nasi Goreng Spesial",
    image:
      "https://images.unsplash.com/photo-1607137843446-3c899299c281?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "main",
    difficulty: "medium",
    rating: 4.5,
    reviews: 125,
    time: 35,
    servings: 2,
    calories: 620,
    cost: 25000,
    badge: "Best Seller",
    tags: ["indonesian", "spicy", "traditional"],
    ingredients: [
      { name: "Nasi putih", amount: 2, unit: "porsi", category: "karbohidrat" },
      { name: "Telur", amount: 1, unit: "butir", category: "protein" },
      { name: "Ayam suwir", amount: 50, unit: "gram", category: "protein" },
      { name: "Bawang merah", amount: 2, unit: "siung", category: "bumbu" },
      { name: "Cabai", amount: 3, unit: "buah", category: "bumbu" },
      { name: "Kecap manis", amount: 2, unit: "sdm", category: "bumbu" },
    ],
    steps: [
      { step: 1, instruction: "Siapkan semua bahan.", time: 5 },
      { step: 2, instruction: "Haluskan bawang merah dan cabai.", time: 5 },
      { step: 3, instruction: "Tumis bumbu halus hingga harum.", time: 5 },
      { step: 4, instruction: "Masukkan telur, orak-arik hingga matang.", time: 5 },
      { step: 5, instruction: "Masukkan nasi putih dan ayam suwir, aduk rata.", time: 5 },
      { step: 6, instruction: "Tambahkan kecap manis, aduk rata dan masak hingga matang.", time: 5 },
      { step: 7, instruction: "Sajikan nasi goreng selagi hangat.", time: 5 },
    ],
    nutrition: {
      calories: 620,
      protein: 25,
      carbs: 80,
      fat: 20,
    },
  },
  {
    id: 2,
    title: "Ayam Bakar Madu",
    image:
      "https://images.unsplash.com/photo-1625704315543-c759e9a21a1c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "main",
    difficulty: "hard",
    rating: 4.8,
    reviews: 180,
    time: 60,
    servings: 4,
    calories: 480,
    cost: 60000,
    badge: "Popular",
    tags: ["indonesian", "halal", "traditional"],
    ingredients: [
      { name: "Ayam", amount: 1, unit: "ekor", category: "protein" },
      { name: "Madu", amount: 3, unit: "sdm", category: "bumbu" },
      { name: "Bawang putih", amount: 3, unit: "siung", category: "bumbu" },
      { name: "Ketumbar", amount: 1, unit: "sdt", category: "bumbu" },
      { name: "Kecap manis", amount: 3, unit: "sdm", category: "bumbu" },
    ],
    steps: [
      { step: 1, instruction: "Siapkan semua bahan.", time: 10 },
      { step: 2, instruction: "Haluskan bawang putih dan ketumbar.", time: 10 },
      { step: 3, instruction: "Campurkan bumbu halus dengan madu dan kecap manis.", time: 10 },
      { step: 4, instruction: "Lumuri ayam dengan bumbu, diamkan selama 30 menit.", time: 10 },
      { step: 5, instruction: "Bakar ayam di atas bara api hingga matang.", time: 10 },
      { step: 6, instruction: "Sajikan ayam bakar madu selagi hangat.", time: 10 },
    ],
    nutrition: {
      calories: 480,
      protein: 40,
      carbs: 20,
      fat: 15,
    },
  },
  {
    id: 3,
    title: "Salad Sayur Segar",
    image:
      "https://images.unsplash.com/photo-1546793665-490efd87f8e5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "side",
    difficulty: "easy",
    rating: 4.2,
    reviews: 90,
    time: 20,
    servings: 2,
    calories: 250,
    cost: 15000,
    badge: "Healthy",
    tags: ["vegetarian", "vegan", "gluten-free", "healthy"],
    ingredients: [
      { name: "Selada", amount: 100, unit: "gram", category: "sayuran" },
      { name: "Tomat", amount: 1, unit: "buah", category: "sayuran" },
      { name: "Timun", amount: 0.5, unit: "buah", category: "sayuran" },
      { name: "Wortel", amount: 0.5, unit: "buah", category: "sayuran" },
      { name: "Lemon", amount: 0.5, unit: "buah", category: "bumbu" },
      { name: "Minyak zaitun", amount: 2, unit: "sdm", category: "bumbu" },
    ],
    steps: [
      { step: 1, instruction: "Siapkan semua bahan.", time: 5 },
      { step: 2, instruction: "Cuci bersih semua sayuran.", time: 5 },
      { step: 3, instruction: "Potong-potong sayuran sesuai selera.", time: 5 },
      { step: 4, instruction: "Campurkan semua sayuran dalam wadah.", time: 5 },
      { step: 5, instruction: "Tambahkan perasan lemon dan minyak zaitun, aduk rata.", time: 5 },
      { step: 6, instruction: "Sajikan salad sayur selagi segar.", time: 5 },
    ],
    nutrition: {
      calories: 250,
      protein: 5,
      carbs: 20,
      fat: 10,
    },
  },
  {
    id: 4,
    title: "Es Teh Tarik",
    image:
      "https://images.unsplash.com/photo-1613936344737-95c8e93a4e39?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "drink",
    difficulty: "easy",
    rating: 4.6,
    reviews: 110,
    time: 15,
    servings: 1,
    calories: 180,
    cost: 8000,
    badge: "Trending",
    tags: ["indonesian", "traditional"],
    ingredients: [
      { name: "Teh", amount: 1, unit: "kantong", category: "minuman" },
      { name: "Susu kental manis", amount: 2, unit: "sdm", category: "minuman" },
      { name: "Air panas", amount: 200, unit: "ml", category: "minuman" },
      { name: "Es batu", amount: 5, unit: "buah", category: "minuman" },
    ],
    steps: [
      { step: 1, instruction: "Siapkan semua bahan.", time: 3 },
      { step: 2, instruction: "Seduh teh dengan air panas, diamkan selama 5 menit.", time: 5 },
      { step: 3, instruction: "Tambahkan susu kental manis, aduk rata.", time: 2 },
      { step: 4, instruction: "Saring teh ke dalam gelas yang berisi es batu.", time: 5 },
      { step: 5, instruction: "Tarik-tarik teh hingga berbusa.", time: 5 },
      { step: 6, instruction: "Sajikan es teh tarik selagi dingin.", time: 5 },
    ],
    nutrition: {
      calories: 180,
      protein: 2,
      carbs: 30,
      fat: 5,
    },
  },
  {
    id: 5,
    title: "Soto Ayam Ambengan",
    image:
      "https://images.unsplash.com/photo-1630434515669-19272ca5b694?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "main",
    difficulty: "medium",
    rating: 4.7,
    reviews: 140,
    time: 45,
    servings: 3,
    calories: 550,
    cost: 40000,
    badge: "Spesial",
    tags: ["indonesian", "traditional"],
    ingredients: [
      { name: "Ayam", amount: 0.5, unit: "ekor", category: "protein" },
      { name: "Bumbu soto", amount: 1, unit: "bungkus", category: "bumbu" },
      { name: "Tauge", amount: 50, unit: "gram", category: "sayuran" },
      { name: "Soun", amount: 50, unit: "gram", category: "karbohidrat" },
      { name: "Telur rebus", amount: 2, unit: "butir", category: "protein" },
      { name: "Jeruk nipis", amount: 1, unit: "buah", category: "bumbu" },
    ],
    steps: [
      { step: 1, instruction: "Siapkan semua bahan.", time: 10 },
      { step: 2, instruction: "Rebus ayam hingga matang, saring kaldunya.", time: 10 },
      { step: 3, instruction: "Tumis bumbu soto hingga harum.", time: 5 },
      { step: 4, instruction: "Masukkan bumbu tumis ke dalam kaldu ayam, masak hingga mendidih.", time: 5 },
      { step: 5, instruction: "Tata soun, tauge, telur rebus, dan ayam suwir dalam mangkuk.", time: 5 },
      { step: 6, instruction: "Siram dengan kuah soto panas, tambahkan perasan jeruk nipis.", time: 5 },
      { step: 7, instruction: "Sajikan soto ayam ambengan selagi hangat.", time: 5 },
    ],
    nutrition: {
      calories: 550,
      protein: 30,
      carbs: 40,
      fat: 25,
    },
  },
  {
    id: 6,
    title: "Kopi Susu Kekinian",
    image:
      "https://images.unsplash.com/photo-1556715184-331990dc46aa?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "drink",
    difficulty: "easy",
    rating: 4.4,
    reviews: 95,
    time: 10,
    servings: 1,
    calories: 150,
    cost: 12000,
    badge: "Populer",
    tags: ["kekinian", "kopi"],
    ingredients: [
      { name: "Kopi", amount: 1, unit: "sdm", category: "minuman" },
      { name: "Susu cair", amount: 150, unit: "ml", category: "minuman" },
      { name: "Gula aren", amount: 1, unit: "sdm", category: "bumbu" },
      { name: "Air panas", amount: 50, unit: "ml", category: "minuman" },
      { name: "Es batu", amount: 5, unit: "buah", category: "minuman" },
    ],
    steps: [
      { step: 1, instruction: "Siapkan semua bahan.", time: 2 },
      { step: 2, instruction: "Larutkan kopi dengan air panas.", time: 2 },
      { step: 3, instruction: "Tambahkan gula aren, aduk rata.", time: 2 },
      { step: 4, instruction: "Tuang susu cair ke dalam gelas yang berisi es batu.", time: 2 },
      { step: 5, instruction: "Tuangkan larutan kopi ke atas susu.", time: 2 },
      { step: 6, instruction: "Sajikan kopi susu kekinian selagi dingin.", time: 2 },
    ],
    nutrition: {
      calories: 150,
      protein: 3,
      carbs: 25,
      fat: 4,
    },
  },
  {
    id: 7,
    title: "Tumis Kangkung Terasi",
    image:
      "https://images.unsplash.com/photo-1614546958496-141993915306?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "side",
    difficulty: "easy",
    rating: 4.3,
    reviews: 85,
    time: 25,
    servings: 2,
    calories: 180,
    cost: 10000,
    badge: "Vegetarian",
    tags: ["indonesian", "vegetarian", "spicy"],
    ingredients: [
      { name: "Kangkung", amount: 200, unit: "gram", category: "sayuran" },
      { name: "Bawang merah", amount: 2, unit: "siung", category: "bumbu" },
      { name: "Bawang putih", amount: 1, unit: "siung", category: "bumbu" },
      { name: "Cabai", amount: 3, unit: "buah", category: "bumbu" },
      { name: "Terasi", amount: 0.5, unit: "sdt", category: "bumbu" },
    ],
    steps: [
      { step: 1, instruction: "Siapkan semua bahan.", time: 5 },
      { step: 2, instruction: "Cuci bersih kangkung, potong-potong.", time: 5 },
      { step: 3, instruction: "Haluskan bawang merah, bawang putih, cabai, dan terasi.", time: 5 },
      { step: 4, instruction: "Tumis bumbu halus hingga harum.", time: 5 },
      { step: 5, instruction: "Masukkan kangkung, aduk rata dan masak hingga matang.", time: 5 },
      { step: 6, instruction: "Sajikan tumis kangkung terasi selagi hangat.", time: 5 },
    ],
    nutrition: {
      calories: 180,
      protein: 3,
      carbs: 15,
      fat: 8,
    },
  },
  {
    id: 8,
    title: "Pancake Pisang",
    image:
      "https://images.unsplash.com/photo-1567620869438-958ca96e7ba3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "snack",
    difficulty: "easy",
    rating: 4.5,
    reviews: 100,
    time: 20,
    servings: 2,
    calories: 320,
    cost: 18000,
    badge: "Sarapan",
    tags: ["breakfast", "comfort-food"],
    ingredients: [
      { name: "Pisang", amount: 2, unit: "buah", category: "buah" },
      { name: "Tepung terigu", amount: 100, unit: "gram", category: "karbohidrat" },
      { name: "Telur", amount: 1, unit: "butir", category: "protein" },
      { name: "Susu cair", amount: 100, unit: "ml", category: "minuman" },
      { name: "Madu", amount: 2, unit: "sdm", category: "bumbu" },
    ],
    steps: [
      { step: 1, instruction: "Siapkan semua bahan.", time: 5 },
      { step: 2, instruction: "Lumatkan pisang hingga halus.", time: 5 },
      { step: 3, instruction: "Campurkan pisang dengan tepung terigu, telur, dan susu cair, aduk rata.", time: 5 },
      { step: 4, instruction: "Panaskan teflon, tuang adonan pancake.", time: 5 },
      { step: 5, instruction: "Masak hingga matang, sajikan dengan madu.", time: 5 },
      { step: 6, instruction: "Sajikan pancake pisang selagi hangat.", time: 5 },
    ],
    nutrition: {
      calories: 320,
      protein: 8,
      carbs: 50,
      fat: 10,
    },
  },
]

const SAMPLE_INVENTORY = [
  { id: 1, name: "Beras", current: 5, max: 10, unit: "kg", expiry: "2024-12-31", category: "pantry" },
  { id: 2, name: "Telur", current: 20, max: 30, unit: "butir", expiry: "2024-07-15", category: "protein" },
  { id: 3, name: "Minyak Goreng", current: 1, max: 2, unit: "liter", expiry: "2025-01-01", category: "pantry" },
  { id: 4, name: "Gula Pasir", current: 3, max: 5, unit: "kg", expiry: "2024-11-30", category: "pantry" },
  { id: 5, name: "Garam", current: 1, max: 1, unit: "kg", expiry: "2025-02-28", category: "pantry" },
  { id: 6, name: "Kecap Manis", current: 2, max: 3, unit: "botol", expiry: "2024-09-30", category: "pantry" },
  { id: 7, name: "Saus Sambal", current: 1, max: 2, unit: "botol", expiry: "2024-08-31", category: "pantry" },
  { id: 8, name: "Mie Instan", current: 10, max: 20, unit: "bungkus", expiry: "2024-10-31", category: "pantry" },
  { id: 9, name: "Kopi Bubuk", current: 1, max: 2, unit: "bungkus", expiry: "2024-12-31", category: "minuman" },
  { id: 10, name: "Teh Celup", current: 1, max: 1, unit: "kotak", expiry: "2025-01-31", category: "minuman" },
]

const INGREDIENT_CATEGORIES = {
  karbohidrat: "Karbohidrat",
  protein: "Protein",
  sayuran: "Sayuran",
  bumbu: "Bumbu",
  minuman: "Minuman",
  buah: "Buah",
  pantry: "Bahan Pokok",
  lainnya: "Lainnya",
}

const DAYS_OF_WEEK = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"]
const MEAL_TYPES = ["Sarapan", "Makan Siang", "Makan Malam", "Camilan"]

const NUTRITION_GOALS = {
  calories: 2000,
  protein: 50,
  carbs: 250,
  fat: 70,
}

const recipes = [...SAMPLE_RECIPES]
let inventory = [...SAMPLE_INVENTORY]
let groceryList = []
let favorites = new Set()
let mealPlan = {}
let currentFilters = {
  category: "all",
  difficulty: "",
  maxTime: "",
  maxCalories: "",
  dietary: [],
}
let currentView = "grid"
let isDarkTheme = false

// DOM elements
const searchInput = document.getElementById("searchInput")
const recipesGrid = document.getElementById("recipesGrid")
const groceryListElement = document.getElementById("groceryList")
const inventoryList = document.getElementById("inventoryList")
const mealPlannerElement = document.getElementById("mealPlanner")
const nutritionTracker = document.getElementById("nutritionTracker")
const recommendationsGrid = document.getElementById("recommendationsGrid")

// Initialize app
document.addEventListener("DOMContentLoaded", () => {
  initializeApp()
  setupEventListeners()
  loadFromLocalStorage()
  renderAll()
})

// Initialize application
function initializeApp() {
  // Set initial theme
  const savedTheme = localStorage.getItem("chefai-theme")
  if (savedTheme) {
    isDarkTheme = savedTheme === "dark"
    document.documentElement.setAttribute("data-theme", savedTheme)
    updateThemeIcon()
  }

  // Initialize nutrition chart
  initializeNutritionChart()

  // Show welcome toast
  showToast("Selamat datang di ChefAI!", "Temukan resep favorit Anda", "success")
}

// Setup event listeners
function setupEventListeners() {
  // Search functionality
  searchInput.addEventListener("input", debounce(handleSearch, 300))

  // Navigation tabs
  document.querySelectorAll(".nav-tab").forEach((tab) => {
    tab.addEventListener("click", () => handleCategoryChange(tab.dataset.category))
  })

  // Theme toggle
  document.getElementById("themeToggle").addEventListener("click", toggleTheme)

  // Filter button
  document.getElementById("filterBtn").addEventListener("click", () => showModal("filterModal"))

  // View controls
  document.querySelectorAll(".view-btn").forEach((btn) => {
    btn.addEventListener("click", () => handleViewChange(btn.dataset.view))
  })

  // Grocery list controls
  document.getElementById("addGroceryItem").addEventListener("click", () => showAddItemModal("grocery"))
  document.getElementById("clearGroceryList").addEventListener("click", clearGroceryList)
  document.getElementById("printGroceryList").addEventListener("click", printGroceryList)
  document.getElementById("shareGroceryList").addEventListener("click", shareGroceryList)

  // Inventory controls
  document.getElementById("addInventoryItem").addEventListener("click", () => showAddItemModal("inventory"))

  // Meal planner
  document.getElementById("generateMealPlan").addEventListener("click", generateMealPlan)

  // Modal controls
  setupModalEventListeners()

  // Form submissions
  document.getElementById("addItemForm").addEventListener("submit", handleAddItem)

  // Filter controls
  document.getElementById("applyFilters").addEventListener("click", applyFilters)
  document.getElementById("resetFilters").addEventListener("click", resetFilters)
}

// Setup modal event listeners
function setupModalEventListeners() {
  // Close modal buttons
  document.querySelectorAll(".modal-close").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const modal = e.target.closest(".modal")
      hideModal(modal.id)
    })
  })

  // Close modal on backdrop click
  document.querySelectorAll(".modal").forEach((modal) => {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        hideModal(modal.id)
      }
    })
  })

  // Cooking modal controls
  document.getElementById("closeCookingModal").addEventListener("click", () => hideModal("cookingModal"))
  document.getElementById("voiceToggle").addEventListener("click", toggleVoice)
}

// Load data from localStorage
function loadFromLocalStorage() {
  const savedFavorites = localStorage.getItem("chefai-favorites")
  if (savedFavorites) {
    favorites = new Set(JSON.parse(savedFavorites))
  }

  const savedGroceryList = localStorage.getItem("chefai-grocery")
  if (savedGroceryList) {
    groceryList = JSON.parse(savedGroceryList)
  }

  const savedInventory = localStorage.getItem("chefai-inventory")
  if (savedInventory) {
    inventory = JSON.parse(savedInventory)
  }

  const savedMealPlan = localStorage.getItem("chefai-mealplan")
  if (savedMealPlan) {
    mealPlan = JSON.parse(savedMealPlan)
  }
}

// Save data to localStorage
function saveToLocalStorage() {
  localStorage.setItem("chefai-favorites", JSON.stringify([...favorites]))
  localStorage.setItem("chefai-grocery", JSON.stringify(groceryList))
  localStorage.setItem("chefai-inventory", JSON.stringify(inventory))
  localStorage.setItem("chefai-mealplan", JSON.stringify(mealPlan))
}

// Render all components
function renderAll() {
  renderRecipes()
  renderRecommendations()
  renderGroceryList()
  renderInventory()
  renderMealPlanner()
  renderNutritionTracker()
}

// Handle search
function handleSearch(e) {
  const query = e.target.value.toLowerCase()
  renderRecipes(query)
}

// Handle category change
function handleCategoryChange(category) {
  currentFilters.category = category

  // Update active tab
  document.querySelectorAll(".nav-tab").forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.category === category)
  })

  renderRecipes()
}

// Handle view change
function handleViewChange(view) {
  currentView = view

  // Update active view button
  document.querySelectorAll(".view-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.view === view)
  })

  // Update grid class
  recipesGrid.className = view === "grid" ? "recipes-grid" : "recipes-list"
  renderRecipes()
}

// Toggle theme
function toggleTheme() {
  isDarkTheme = !isDarkTheme
  const theme = isDarkTheme ? "dark" : "light"
  document.documentElement.setAttribute("data-theme", theme)
  localStorage.setItem("chefai-theme", theme)
  updateThemeIcon()
  showToast("Tema berhasil diubah", `Beralih ke mode ${isDarkTheme ? "gelap" : "terang"}`, "success")
}

// Update theme icon
function updateThemeIcon() {
  const themeIcon = document.querySelector("#themeToggle i")
  themeIcon.className = isDarkTheme ? "fas fa-sun" : "fas fa-moon"
}

// Filter recipes
function filterRecipes(recipes, query = "") {
  let filtered = recipes

  // Search filter
  if (query) {
    filtered = filtered.filter(
      (recipe) =>
        recipe.title.toLowerCase().includes(query) ||
        recipe.tags.some((tag) => tag.toLowerCase().includes(query)) ||
        recipe.ingredients.some((ing) => ing.name.toLowerCase().includes(query)),
    )
  }

  // Category filter
  if (currentFilters.category !== "all") {
    filtered = filtered.filter((recipe) => recipe.category === currentFilters.category)
  }

  // Difficulty filter
  if (currentFilters.difficulty) {
    filtered = filtered.filter((recipe) => recipe.difficulty === currentFilters.difficulty)
  }

  // Time filter
  if (currentFilters.maxTime) {
    filtered = filtered.filter((recipe) => recipe.time <= Number.parseInt(currentFilters.maxTime))
  }

  // Calorie filter
  if (currentFilters.maxCalories) {
    filtered = filtered.filter((recipe) => recipe.calories <= Number.parseInt(currentFilters.maxCalories))
  }

  // Dietary filter
  if (currentFilters.dietary.length > 0) {
    filtered = filtered.filter((recipe) => currentFilters.dietary.every((diet) => recipe.tags.includes(diet)))
  }

  return filtered
}

// Render recipes
function renderRecipes(query = "") {
  const filteredRecipes = filterRecipes(recipes, query)

  if (filteredRecipes.length === 0) {
    recipesGrid.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search" style="font-size: 3rem; color: var(--gray-color); margin-bottom: 1rem;"></i>
                <h3>Tidak ada resep ditemukan</h3>
                <p>Coba ubah kata kunci pencarian atau filter Anda</p>
            </div>
        `
    return
  }

  recipesGrid.innerHTML = filteredRecipes.map((recipe) => createRecipeCard(recipe)).join("")

  // Add event listeners to recipe cards
  setupRecipeCardListeners()
}

// Create recipe card HTML
function createRecipeCard(recipe) {
  const isFavorite = favorites.has(recipe.id)
  const difficultyClass = `difficulty-${recipe.difficulty}`

  return `
        <div class="recipe-card fade-in" data-recipe-id="${recipe.id}">
            <div class="recipe-image" style="background-image: url('${recipe.image}')">
                <div class="recipe-badge">${recipe.badge}</div>
                <button class="recipe-favorite ${isFavorite ? "active" : ""}" onclick="toggleFavorite(${recipe.id})">
                    <i class="fas fa-heart"></i>
                </button>
            </div>
            <div class="recipe-info">
                <h3 class="recipe-title">${recipe.title}</h3>
                <div class="recipe-rating">
                    <div class="stars">
                        ${generateStars(recipe.rating)}
                    </div>
                    <span class="rating-text">${recipe.rating} (${recipe.reviews} ulasan)</span>
                </div>
                <div class="recipe-meta">
                    <div class="meta-item">
                        <i class="far fa-clock"></i>
                        <span>${recipe.time} menit</span>
                    </div>
                    <div class="meta-item">
                        <i class="fas fa-user-friends"></i>
                        <span>${recipe.servings} porsi</span>
                    </div>
                    <div class="meta-item">
                        <i class="fas fa-fire"></i>
                        <span>${recipe.calories} kal</span>
                    </div>
                    <div class="meta-item">
                        <i class="fas fa-dollar-sign"></i>
                        <span>${formatCurrency(recipe.cost)}</span>
                    </div>
                </div>
                <div class="recipe-tags">
                    <div class="recipe-tag ${difficultyClass}">${getDifficultyText(recipe.difficulty)}</div>
                    ${recipe.tags.map((tag) => `<div class="recipe-tag dietary">${getTagText(tag)}</div>`).join("")}
                </div>
                <div class="recipe-actions">
                    <button class="btn btn-outline" onclick="showRecipeDetail(${recipe.id})">
                        <i class="fas fa-info-circle"></i> Detail
                    </button>
                    <button class="btn btn-secondary" onclick="addRecipeToGroceryList(${recipe.id})">
                        <i class="fas fa-shopping-cart"></i>
                    </button>
                    <button class="btn btn-primary" onclick="startCookingMode(${recipe.id})">
                        <i class="fas fa-play"></i> Masak
                    </button>
                </div>
            </div>
        </div>
    `
}

// Setup recipe card listeners
function setupRecipeCardListeners() {
  // Add any additional event listeners for recipe cards here
}

// Generate star rating HTML
function generateStars(rating) {
  const fullStars = Math.floor(rating)
  const hasHalfStar = rating % 1 !== 0
  let starsHTML = ""

  for (let i = 0; i < fullStars; i++) {
    starsHTML += '<i class="fas fa-star"></i>'
  }

  if (hasHalfStar) {
    starsHTML += '<i class="fas fa-star-half-alt"></i>'
  }

  const emptyStars = 5 - Math.ceil(rating)
  for (let i = 0; i < emptyStars; i++) {
    starsHTML += '<i class="far fa-star"></i>'
  }

  return starsHTML
}

// Get difficulty text
function getDifficultyText(difficulty) {
  const difficultyMap = {
    easy: "Mudah",
    medium: "Sedang",
    hard: "Sulit",
  }
  return difficultyMap[difficulty] || difficulty
}

// Get tag text
function getTagText(tag) {
  const tagMap = {
    vegetarian: "Vegetarian",
    vegan: "Vegan",
    "gluten-free": "Bebas Gluten",
    keto: "Keto",
    paleo: "Paleo",
    halal: "Halal",
    healthy: "Sehat",
    "comfort-food": "Comfort Food",
    indonesian: "Indonesia",
    spicy: "Pedas",
    traditional: "Tradisional",
    breakfast: "Sarapan",
  }
  return tagMap[tag] || tag
}

// Format currency
function formatCurrency(amount) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(amount)
}

// Toggle favorite
function toggleFavorite(recipeId) {
  if (favorites.has(recipeId)) {
    favorites.delete(recipeId)
    showToast("Dihapus dari favorit", "Resep berhasil dihapus dari favorit", "info")
  } else {
    favorites.add(recipeId)
    showToast("Ditambahkan ke favorit", "Resep berhasil ditambahkan ke favorit", "success")
  }

  saveToLocalStorage()
  renderRecipes()
  renderRecommendations()
}

// Show recipe detail
function showRecipeDetail(recipeId) {
  const recipe = recipes.find((r) => r.id === recipeId)
  if (!recipe) return

  const modalBody = document.getElementById("recipeModalBody")
  const modalTitle = document.getElementById("recipeModalTitle")

  modalTitle.textContent = recipe.title
  modalBody.innerHTML = createRecipeDetailHTML(recipe)

  showModal("recipeModal")
}

// Create recipe detail HTML
function createRecipeDetailHTML(recipe) {
  return `
        <div class="recipe-detail">
            <img src="${recipe.image}" alt="${recipe.title}" style="width: 100%; height: 200px; object-fit: cover; border-radius: var(--radius); margin-bottom: 20px;">
            
            <div class="recipe-detail-meta">
                <div class="meta-grid">
                    <div class="meta-item">
                        <i class="far fa-clock"></i>
                        <span>Waktu: ${recipe.time} menit</span>
                    </div>
                    <div class="meta-item">
                        <i class="fas fa-user-friends"></i>
                        <span>Porsi: ${recipe.servings}</span>
                    </div>
                    <div class="meta-item">
                        <i class="fas fa-fire"></i>
                        <span>Kalori: ${recipe.calories}</span>
                    </div>
                    <div class="meta-item">
                        <i class="fas fa-dollar-sign"></i>
                        <span>Biaya: ${formatCurrency(recipe.cost)}</span>
                    </div>
                </div>
            </div>
            
            <div class="recipe-detail-section">
                <h3><i class="fas fa-list"></i> Bahan-bahan</h3>
                <ul class="ingredients-list">
                    ${recipe.ingredients
                      .map(
                        (ing) => `
                        <li class="ingredient-item">
                            <span>${ing.amount} ${ing.unit} ${ing.name}</span>
                        </li>
                    `,
                      )
                      .join("")}
                </ul>
            </div>
            
            <div class="recipe-detail-section">
                <h3><i class="fas fa-list-ol"></i> Langkah-langkah</h3>
                <div class="steps-list">
                    ${recipe.steps
                      .map(
                        (step) => `
                        <div class="step-item">
                            <div class="step-number">${step.step}</div>
                            <div class="step-content">
                                <p>${step.instruction}</p>
                                ${step.time ? `<div class="step-time"><i class="far fa-clock"></i> ${step.time} menit</div>` : ""}
                                ${step.tips ? `<div class="step-tips"><i class="fas fa-lightbulb"></i> ${step.tips}</div>` : ""}
                            </div>
                        </div>
                    `,
                      )
                      .join("")}
                </div>
            </div>
            
            <div class="recipe-detail-actions">
                <button class="btn btn-secondary" onclick="addRecipeToGroceryList(${recipe.id})">
                    <i class="fas fa-shopping-cart"></i> Tambah ke Belanja
                </button>
                <button class="btn btn-primary" onclick="startCookingMode(${recipe.id}); hideModal('recipeModal');">
                    <i class="fas fa-play"></i> Mulai Memasak
                </button>
            </div>
        </div>
    `
}

// Start cooking mode
function startCookingMode(recipeId) {
  const recipe = recipes.find((r) => r.id === recipeId)
  if (!recipe) return

  currentCookingRecipe = recipe
  currentCookingStep = 0

  renderCookingMode()
  showModal("cookingModal")
}

// Render cooking mode
function renderCookingMode() {
  if (!currentCookingRecipe) return

  const recipe = currentCookingRecipe
  const step = recipe.steps[currentCookingStep]
  const progress = ((currentCookingStep + 1) / recipe.steps.length) * 100

  document.getElementById("cookingTitle").textContent = recipe.title
  document.getElementById("cookingStepInfo").textContent =
    `Langkah ${currentCookingStep + 1} dari ${recipe.steps.length}`
  document.getElementById("cookingProgressBar").style.width = `${progress}%`

  const cookingBody = document.getElementById("cookingBody")
  cookingBody.innerHTML = `
        <div class="cooking-step">
            <div class="cooking-step-header">
                <div class="step-number">${step.step}</div>
                <div class="step-info">
                    <h3 class="step-title">Langkah ${step.step}</h3>
                    <div class="step-meta">
                        ${step.time ? `<span><i class="far fa-clock"></i> ${step.time} menit</span>` : ""}
                        ${step.temperature ? `<span><i class="fas fa-thermometer-half"></i> ${step.temperature}</span>` : ""}
                    </div>
                </div>
            </div>
            
            <div class="step-instruction">
                ${step.instruction}
            </div>
            
            ${
              step.tips
                ? `
                <div class="step-tips">
                    <div class="step-tips-header">
                        <i class="fas fa-lightbulb"></i>
                        <span>Tips:</span>
                    </div>
                    <p>${step.tips}</p>
                </div>
            `
                : ""
            }
            
            ${
              step.time
                ? `
                <div class="step-timer">
                    <div class="timer-display" id="timerDisplay">00:00</div>
                    <div class="timer-controls">
                        <button class="btn btn-secondary" onclick="startTimer(${step.time})">
                            <i class="fas fa-play"></i> Mulai Timer (${step.time}m)
                        </button>
                        <button class="btn btn-outline" onclick="pauseTimer()">
                            <i class="fas fa-pause"></i> Pause
                        </button>
                        <button class="btn btn-outline" onclick="resetTimer()">
                            <i class="fas fa-stop"></i> Reset
                        </button>
                    </div>
                </div>
            `
                : ""
            }
        </div>
        
        <div class="cooking-navigation">
            <button class="btn btn-outline" onclick="previousStep()" ${currentCookingStep === 0 ? "disabled" : ""}>
                <i class="fas fa-chevron-left"></i> Sebelumnya
            </button>
            
            <div class="step-indicators">
                ${recipe.steps
                  .map(
                    (_, index) => `
                    <div class="step-indicator ${index < currentCookingStep ? "completed" : index === currentCookingStep ? "current" : "pending"}" 
                         onclick="goToStep(${index})"></div>
                `,
                  )
                  .join("")}
            </div>
            
            <button class="btn btn-primary" onclick="nextStep()" ${currentCookingStep === recipe.steps.length - 1 ? "disabled" : ""}>
                ${currentCookingStep === recipe.steps.length - 1 ? "Selesai" : "Selanjutnya"} 
                <i class="fas fa-chevron-right"></i>
            </button>
        </div>
    `
}

// Cooking mode navigation
let currentCookingRecipe = null
let currentCookingStep = 0
let cookingTimer = null
let timerSeconds = 0
let isTimerRunning = false

function nextStep() {
  if (currentCookingStep < currentCookingRecipe.steps.length - 1) {
    currentCookingStep++
    renderCookingMode()
    resetTimer()
  } else {
    // Recipe completed
    showToast("Selamat!", "Anda telah menyelesaikan resep ini", "success")
    hideModal("cookingModal")
  }
}

function previousStep() {
  if (currentCookingStep > 0) {
    currentCookingStep--
    renderCookingMode()
    resetTimer()
  }
}

function goToStep(stepIndex) {
  currentCookingStep = stepIndex
  renderCookingMode()
  resetTimer()
}

// Timer functions
function startTimer(minutes) {
  timerSeconds = minutes * 60
  isTimerRunning = true

  cookingTimer = setInterval(() => {
    if (timerSeconds <= 0) {
      clearInterval(cookingTimer)
      isTimerRunning = false
      showToast("Timer Selesai!", "Waktu memasak telah habis", "warning")
      playNotificationSound()
      return
    }

    timerSeconds--
    updateTimerDisplay()
  }, 1000)

  updateTimerDisplay()
}

function pauseTimer() {
  if (cookingTimer) {
    clearInterval(cookingTimer)
    isTimerRunning = false
  }
}

function resetTimer() {
  if (cookingTimer) {
    clearInterval(cookingTimer)
  }
  timerSeconds = 0
  isTimerRunning = false
  updateTimerDisplay()
}

function updateTimerDisplay() {
  const minutes = Math.floor(timerSeconds / 60)
  const seconds = timerSeconds % 60
  const display = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`

  const timerDisplay = document.getElementById("timerDisplay")
  if (timerDisplay) {
    timerDisplay.textContent = display
  }
}

function playNotificationSound() {
  // Create a simple beep sound
  const audioContext = new (window.AudioContext || window.webkitAudioContext)()
  const oscillator = audioContext.createOscillator()
  const gainNode = audioContext.createGain()

  oscillator.connect(gainNode)
  gainNode.connect(audioContext.destination)

  oscillator.frequency.value = 800
  oscillator.type = "sine"

  gainNode.gain.setValueAtTime(0.3, audioContext.currentTime)
  gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 1)

  oscillator.start(audioContext.currentTime)
  oscillator.stop(audioContext.currentTime + 1)
}

// Voice toggle
let isVoiceEnabled = false

function toggleVoice() {
  isVoiceEnabled = !isVoiceEnabled
  const voiceIcon = document.querySelector("#voiceToggle i")
  voiceIcon.className = isVoiceEnabled ? "fas fa-volume-up" : "fas fa-volume-mute"

  if (isVoiceEnabled && currentCookingRecipe) {
    const step = currentCookingRecipe.steps[currentCookingStep]
    speak(`Langkah ${step.step}. ${step.instruction}`)
  }

  showToast("Voice Guide", `Voice guide ${isVoiceEnabled ? "diaktifkan" : "dinonaktifkan"}`, "info")
}

function speak(text) {
  if ("speechSynthesis" in window && isVoiceEnabled) {
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.lang = "id-ID"
    utterance.rate = 0.8
    speechSynthesis.speak(utterance)
  }
}

// Add recipe to grocery list
function addRecipeToGroceryList(recipeId) {
  const recipe = recipes.find((r) => r.id === recipeId)
  if (!recipe) return

  recipe.ingredients.forEach((ingredient) => {
    const existingItem = groceryList.find((item) => item.name.toLowerCase() === ingredient.name.toLowerCase())

    if (existingItem) {
      existingItem.amount += ingredient.amount
    } else {
      groceryList.push({
        id: Date.now() + Math.random(),
        name: ingredient.name,
        amount: ingredient.amount,
        unit: ingredient.unit,
        category: ingredient.category,
        checked: false,
        recipeId: recipeId,
      })
    }
  })

  saveToLocalStorage()
  renderGroceryList()
  showToast("Berhasil!", `Bahan dari ${recipe.title} ditambahkan ke daftar belanja`, "success")
}

// Render grocery list
function renderGroceryList() {
  const groceryCount = document.getElementById("groceryCount")
  const groceryProgress = document.getElementById("groceryProgress")
  const groceryTotal = document.getElementById("groceryTotal")
  const groceryProgressBar = document.getElementById("groceryProgressBar")

  groceryCount.textContent = groceryList.length

  const completedItems = groceryList.filter((item) => item.checked).length
  const progressPercentage = groceryList.length > 0 ? (completedItems / groceryList.length) * 100 : 0

  groceryProgress.textContent = `${completedItems}/${groceryList.length}`
  groceryProgressBar.style.width = `${progressPercentage}%`

  // Calculate total cost (estimated)
  const totalCost = groceryList.reduce((sum, item) => sum + (item.estimatedCost || 0), 0)
  groceryTotal.textContent = formatCurrency(totalCost)

  if (groceryList.length === 0) {
    groceryListElement.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-shopping-cart" style="font-size: 2rem; color: var(--gray-color); margin-bottom: 1rem;"></i>
                <p>Daftar belanja kosong</p>
                <p style="font-size: 0.9rem; color: var(--gray-color);">Tambahkan bahan dari resep atau manual</p>
            </div>
        `
    return
  }

  // Group items by category
  const groupedItems = groceryList.reduce((groups, item) => {
    const category = INGREDIENT_CATEGORIES[item.category] || "Lainnya"
    if (!groups[category]) groups[category] = []
    groups[category].push(item)
    return groups
  }, {})

  groceryListElement.innerHTML = Object.entries(groupedItems)
    .map(
      ([category, items]) => `
        <div class="grocery-category">
            <h4 class="category-header">${category}</h4>
            ${items.map((item) => createGroceryItemHTML(item)).join("")}
        </div>
    `,
    )
    .join("")

  setupGroceryListeners()
}

// Create grocery item HTML
function createGroceryItemHTML(item) {
  return `
        <div class="grocery-item ${item.checked ? "completed" : ""}" data-item-id="${item.id}" draggable="true">
            <input type="checkbox" class="grocery-checkbox" ${item.checked ? "checked" : ""} 
                   onchange="toggleGroceryItem(${item.id})">
            <div class="grocery-item-info">
                <div class="grocery-item-name">${item.name}</div>
                <div class="grocery-item-details">${item.amount} ${item.unit}</div>
            </div>
            <div class="grocery-item-actions">
                <button class="btn-icon" onclick="editGroceryItem(${item.id})" title="Edit">
                    <i class="fas fa-edit"></i>
                </button>
                <button class="btn-icon" onclick="deleteGroceryItem(${item.id})" title="Hapus">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        </div>
    `
}

// Setup grocery list event listeners
function setupGroceryListeners() {
  // Drag and drop functionality
  const groceryItems = document.querySelectorAll(".grocery-item")
  groceryItems.forEach((item) => {
    item.addEventListener("dragstart", handleDragStart)
    item.addEventListener("dragover", handleDragOver)
    item.addEventListener("drop", handleDrop)
    item.addEventListener("dragend", handleDragEnd)
  })
}

// Drag and drop handlers
let draggedItem = null

function handleDragStart(e) {
  draggedItem = this
  this.classList.add("dragging")
  e.dataTransfer.effectAllowed = "move"
}

function handleDragOver(e) {
  e.preventDefault()
  e.dataTransfer.dropEffect = "move"
}

function handleDrop(e) {
  e.preventDefault()
  if (draggedItem !== this) {
    const draggedId = Number.parseInt(draggedItem.dataset.itemId)
    const targetId = Number.parseInt(this.dataset.itemId)

    // Reorder items in array
    const draggedIndex = groceryList.findIndex((item) => item.id === draggedId)
    const targetIndex = groceryList.findIndex((item) => item.id === targetId)

    const [draggedItemData] = groceryList.splice(draggedIndex, 1)
    groceryList.splice(targetIndex, 0, draggedItemData)

    saveToLocalStorage()
    renderGroceryList()
  }
}

function handleDragEnd() {
  this.classList.remove("dragging")
  draggedItem = null
}

// Grocery list functions
function toggleGroceryItem(itemId) {
  const item = groceryList.find((item) => item.id === itemId)
  if (item) {
    item.checked = !item.checked
    saveToLocalStorage()
    renderGroceryList()
  }
}

function editGroceryItem(itemId) {
  const item = groceryList.find((item) => item.id === itemId)
  if (!item) return

  const newName = prompt("Edit nama item:", item.name)
  if (newName && newName.trim()) {
    item.name = newName.trim()
    saveToLocalStorage()
    renderGroceryList()
    showToast("Berhasil!", "Item berhasil diubah", "success")
  }
}

function deleteGroceryItem(itemId) {
  if (confirm("Hapus item dari daftar belanja?")) {
    groceryList = groceryList.filter((item) => item.id !== itemId)
    saveToLocalStorage()
    renderGroceryList()
    showToast("Berhasil!", "Item berhasil dihapus", "success")
  }
}

function clearGroceryList() {
  if (confirm("Hapus semua item dari daftar belanja?")) {
    groceryList = []
    saveToLocalStorage()
    renderGroceryList()
    showToast("Berhasil!", "Daftar belanja berhasil dikosongkan", "success")
  }
}

function printGroceryList() {
  const printWindow = window.open("", "_blank")
  const printContent = `
        <html>
        <head>
            <title>Daftar Belanja - ChefAI</title>
            <style>
                body { font-family: Arial, sans-serif; padding: 20px; }
                h1 { color: #333; border-bottom: 2px solid #4ecdc4; padding-bottom: 10px; }
                .category { margin-bottom: 20px; }
                .category h3 { color: #666; margin-bottom: 10px; }
                .item { padding: 5px 0; border-bottom: 1px dashed #ccc; }
                .checkbox { margin-right: 10px; }
            </style>
        </head>
        <body>
            <h1>Daftar Belanja</h1>
            <p>Dibuat pada: ${new Date().toLocaleDateString("id-ID")}</p>
            ${createPrintableGroceryList()}
        </body>
        </html>
    `

  printWindow.document.write(printContent)
  printWindow.document.close()
  printWindow.print()
}

function createPrintableGroceryList() {
  const groupedItems = groceryList.reduce((groups, item) => {
    const category = INGREDIENT_CATEGORIES[item.category] || "Lainnya"
    if (!groups[category]) groups[category] = []
    groups[category].push(item)
    return groups
  }, {})

  return Object.entries(groupedItems)
    .map(
      ([category, items]) => `
        <div class="category">
            <h3>${category}</h3>
            ${items
              .map(
                (item) => `
                <div class="item">
                    <input type="checkbox" class="checkbox"> ${item.name} (${item.amount} ${item.unit})
                </div>
            `,
              )
              .join("")}
        </div>
    `,
    )
    .join("")
}

function shareGroceryList() {
  if (navigator.share) {
    const shareText = groceryList.map((item) => `• ${item.name} (${item.amount} ${item.unit})`).join("\n")
    navigator.share({
      title: "Daftar Belanja - ChefAI",
      text: `Daftar Belanja:\n\n${shareText}`,
    })
  } else {
    // Fallback: copy to clipboard
    const shareText = groceryList.map((item) => `• ${item.name} (${item.amount} ${item.unit})`).join("\n")
    navigator.clipboard.writeText(`Daftar Belanja:\n\n${shareText}`)
    showToast("Berhasil!", "Daftar belanja disalin ke clipboard", "success")
  }
}

// Render inventory
function renderInventory() {
  const inventoryAlerts = document.getElementById("inventoryAlerts")

  // Show low stock alerts
  const lowStockItems = inventory.filter((item) => item.current / item.max < 0.25)

  if (lowStockItems.length > 0) {
    inventoryAlerts.innerHTML = `
            <div class="inventory-alert">
                <i class="fas fa-exclamation-triangle"></i>
                <div>
                    <strong>Stok Menipis:</strong>
                    ${lowStockItems.map((item) => item.name).join(", ")}
                </div>
            </div>
        `
  } else {
    inventoryAlerts.innerHTML = ""
  }

  // Render inventory items
  inventoryList.innerHTML = inventory.map((item) => createInventoryItemHTML(item)).join("")
}

// Create inventory item HTML
function createInventoryItemHTML(item) {
  const percentage = (item.current / item.max) * 100
  const status = percentage === 0 ? "empty" : percentage < 25 ? "low" : percentage < 75 ? "medium" : "high"
  const statusText =
    status === "empty" ? "Habis" : status === "low" ? "Rendah" : status === "medium" ? "Sedang" : "Cukup"

  const isExpiringSoon = new Date(item.expiry) <= new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)

  return `
        <div class="inventory-item">
            <div class="inventory-item-header">
                <div>
                    <div class="inventory-item-name">${item.name}</div>
                    <div class="inventory-item-amount">${item.current} / ${item.max} ${item.unit}</div>
                </div>
                <div class="inventory-status ${status}">${statusText}</div>
            </div>
            <div class="progress-bar">
                <div class="progress-fill" style="width: ${percentage}%"></div>
            </div>
            <div class="inventory-controls">
                <div class="inventory-expiry ${isExpiringSoon ? "text-danger" : ""}">
                    Exp: ${new Date(item.expiry).toLocaleDateString("id-ID")}
                    ${isExpiringSoon ? " ⚠️" : ""}
                </div>
                <div class="quantity-controls">
                    <button class="quantity-btn" onclick="updateInventoryQuantity(${item.id}, -1)" 
                            ${item.current === 0 ? "disabled" : ""}>
                        <i class="fas fa-minus"></i>
                    </button>
                    <span class="quantity-display">${item.current}</span>
                    <button class="quantity-btn" onclick="updateInventoryQuantity(${item.id}, 1)"
                            ${item.current === item.max ? "disabled" : ""}>
                        <i class="fas fa-plus"></i>
                    </button>
                </div>
            </div>
        </div>
    `
}

// Update inventory quantity
function updateInventoryQuantity(itemId, change) {
  const item = inventory.find((item) => item.id === itemId)
  if (item) {
    item.current = Math.max(0, Math.min(item.max, item.current + change))
    saveToLocalStorage()
    renderInventory()
    renderSuggestions()
  }
}

// Render recipe suggestions based on available inventory
function renderSuggestions() {
  const suggestionsList = document.getElementById("suggestionsList")
  const availableIngredients = inventory.filter((item) => item.current > 0).map((item) => item.name.toLowerCase())

  const suggestions = recipes
    .filter((recipe) =>
      recipe.ingredients.some((ingredient) =>
        availableIngredients.some(
          (available) =>
            ingredient.name.toLowerCase().includes(available) || available.includes(ingredient.name.toLowerCase()),
        ),
      ),
    )
    .slice(0, 3)

  if (suggestions.length === 0) {
    suggestionsList.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-lightbulb" style="font-size: 2rem; color: var(--gray-color); margin-bottom: 1rem;"></i>
                <p>Tidak ada saran resep</p>
                <p style="font-size: 0.9rem; color: var(--gray-color);">Tambahkan bahan ke inventory</p>
            </div>
        `
    return
  }

  suggestionsList.innerHTML = suggestions
    .map(
      (recipe) => `
        <div class="suggestion-item" onclick="showRecipeDetail(${recipe.id})">
            <img src="${recipe.image}" alt="${recipe.title}" class="suggestion-image">
            <div class="suggestion-info">
                <h5 class="suggestion-title">${recipe.title}</h5>
                <div class="suggestion-meta">
                    <span><i class="far fa-clock"></i> ${recipe.time}m</span>
                    <span><i class="fas fa-user-friends"></i> ${recipe.servings} porsi</span>
                </div>
            </div>
        </div>
    `,
    )
    .join("")
}

// Render meal planner
function renderMealPlanner() {
  mealPlannerElement.innerHTML = DAYS_OF_WEEK.map(
    (day) => `
        <div class="meal-day">
            <div class="meal-day-header">${day}</div>
            ${MEAL_TYPES.map((mealType) => {
              const key = `${day}-${mealType}`
              const meal = mealPlan[key]

              return `
                    <div class="meal-slot">
                        <div class="meal-type">${mealType}</div>
                        ${
                          meal
                            ? `
                            <div class="meal-recipe" onclick="showRecipeDetail(${meal.id})">
                                ${meal.title}
                                <button class="remove-meal" onclick="removeMealFromPlan('${key}'); event.stopPropagation();">×</button>
                            </div>
                        `
                            : `
                            <div class="meal-empty" onclick="showMealSelector('${day}', '${mealType}')">
                                <i class="fas fa-plus"></i>
                            </div>
                        `
                        }
                    </div>
                `
            }).join("")}
        </div>
    `,
  ).join("")
}

// Show meal selector
function showMealSelector(day, mealType) {
  const suitableRecipes = recipes.filter(
    (recipe) =>
      recipe.category === mealType.toLowerCase().replace(" ", "") ||
      (mealType === "Camilan" && recipe.category === "snack"),
  )

  if (suitableRecipes.length === 0) {
    showToast("Tidak ada resep", `Tidak ada resep untuk ${mealType}`, "info")
    return
  }

  const modalBody = document.getElementById("recipeModalBody")
  const modalTitle = document.getElementById("recipeModalTitle")

  modalTitle.textContent = `Pilih Resep untuk ${mealType} - ${day}`
  modalBody.innerHTML = `
        <div class="meal-selector">
            ${suitableRecipes
              .map(
                (recipe) => `
                <div class="meal-option" onclick="addMealToPlan('${day}', '${mealType}', ${recipe.id}); hideModal('recipeModal');">
                    <img src="${recipe.image}" alt="${recipe.title}" class="meal-option-image">
                    <div class="meal-option-info">
                        <h4>${recipe.title}</h4>
                        <div class="meal-option-meta">
                            <span><i class="far fa-clock"></i> ${recipe.time}m</span>
                            <span><i class="fas fa-fire"></i> ${recipe.calories} kal</span>
                        </div>
                    </div>
                </div>
            `,
              )
              .join("")}
        </div>
    `

  showModal("recipeModal")
}

// Add meal to plan
function addMealToPlan(day, mealType, recipeId) {
  const recipe = recipes.find((r) => r.id === recipeId)
  if (recipe) {
    const key = `${day}-${mealType}`
    mealPlan[key] = recipe
    saveToLocalStorage()
    renderMealPlanner()
    showToast("Berhasil!", `${recipe.title} ditambahkan ke ${mealType} ${day}`, "success")
  }
}

// Remove meal from plan
function removeMealFromPlan(key) {
  delete mealPlan[key]
  saveToLocalStorage()
  renderMealPlanner()
  showToast("Berhasil!", "Meal berhasil dihapus dari rencana", "success")
}

// Generate meal plan
function generateMealPlan() {
  // Simple algorithm to generate meal plan
  DAYS_OF_WEEK.forEach((day) => {
    MEAL_TYPES.forEach((mealType) => {
      const key = `${day}-${mealType}`
      if (!mealPlan[key]) {
        const suitableRecipes = recipes.filter(
          (recipe) =>
            recipe.category === mealType.toLowerCase().replace(" ", "") ||
            (mealType === "Camilan" && recipe.category === "snack"),
        )

        if (suitableRecipes.length > 0) {
          const randomRecipe = suitableRecipes[Math.floor(Math.random() * suitableRecipes.length)]
          mealPlan[key] = randomRecipe
        }
      }
    })
  })

  saveToLocalStorage()
  renderMealPlanner()
  showToast("Berhasil!", "Meal plan otomatis berhasil dibuat", "success")
}

// Render nutrition tracker
function renderNutritionTracker() {
  // Calculate daily nutrition from meal plan
  const today = DAYS_OF_WEEK[new Date().getDay() - 1] || "Senin"
  const todayMeals = MEAL_TYPES.map((mealType) => mealPlan[`${today}-${mealType}`]).filter(Boolean)

  const consumed = todayMeals.reduce(
    (total, meal) => ({
      calories: total.calories + (meal.calories || 0),
      protein: total.protein + (meal.nutrition?.protein || 0),
      carbs: total.carbs + (meal.nutrition?.carbs || 0),
      fat: total.fat + (meal.nutrition?.fat || 0),
    }),
    { calories: 0, protein: 0, carbs: 0, fat: 0 },
  )

  nutritionTracker.innerHTML = `
        <div class="nutrition-grid">
            ${Object.entries(consumed)
              .map(([key, value]) => {
                const goal = NUTRITION_GOALS[key] || 100
                const percentage = Math.min((value / goal) * 100, 100)

                return `
                    <div class="nutrition-item">
                        <div class="nutrition-value">${Math.round(value)}</div>
                        <div class="nutrition-label">${key}</div>
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: ${percentage}%"></div>
                        </div>
                        <div class="nutrition-progress">${Math.round(percentage)}% dari target</div>
                    </div>
                `
              })
              .join("")}
        </div>
        
        <div class="nutrition-chart">
            <canvas id="nutritionChart" width="400" height="200"></canvas>
        </div>
        
        <div class="nutrition-actions">
            <button class="btn btn-outline" onclick="setNutritionGoals()">
                <i class="fas fa-target"></i> Atur Target
            </button>
            <button class="btn btn-outline" onclick="logFood()">
                <i class="fas fa-plus"></i> Log Makanan
            </button>
        </div>
    `

  // Update nutrition chart
  updateNutritionChart(consumed)
}

// Initialize nutrition chart
function initializeNutritionChart() {
  // Chart will be initialized when nutrition tracker is rendered
}

// Update nutrition chart
function updateNutritionChart(consumed) {
  const canvas = document.getElementById("nutritionChart")
  if (!canvas) return

  const ctx = canvas.getContext("2d")

  // Simple bar chart
  const data = Object.entries(consumed)
  const maxValue = Math.max(...data.map(([_, value]) => value))
  const barWidth = canvas.width / data.length - 20
  const barMaxHeight = canvas.height - 40

  ctx.clearRect(0, 0, canvas.width, canvas.height)

  data.forEach(([key, value], index) => {
    const barHeight = (value / maxValue) * barMaxHeight
    const x = index * (barWidth + 20) + 10
    const y = canvas.height - barHeight - 20

    // Draw bar
    ctx.fillStyle = "#4ecdc4"
    ctx.fillRect(x, y, barWidth, barHeight)

    // Draw label
    ctx.fillStyle = "#333"
    ctx.font = "12px Arial"
    ctx.textAlign = "center"
    ctx.fillText(key, x + barWidth / 2, canvas.height - 5)
    ctx.fillText(Math.round(value), x + barWidth / 2, y - 5)
  })
}

// Set nutrition goals
function setNutritionGoals() {
  showToast("Coming Soon", "Fitur pengaturan target nutrisi akan segera tersedia", "info")
}

// Log food
function logFood() {
  showToast("Coming Soon", "Fitur log makanan akan segera tersedia", "info")
}

// Render recommendations
function renderRecommendations() {
  const favoriteRecipes = recipes.filter((recipe) => favorites.has(recipe.id))
  const favoriteCategories = [...new Set(favoriteRecipes.map((recipe) => recipe.category))]
  const favoriteTags = [...new Set(favoriteRecipes.flatMap((recipe) => recipe.tags))]

  let recommendations = recipes
    .filter((recipe) => !favorites.has(recipe.id))
    .map((recipe) => {
      let score = recipe.rating * 10

      // Boost score for matching categories
      if (favoriteCategories.includes(recipe.category)) {
        score += 20
      }

      // Boost score for matching tags
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

  if (recommendations.length === 0) {
    recommendations = recipes.slice(0, 3)
  }

  recommendationsGrid.innerHTML = recommendations
    .map(
      (recipe) => `
        <div class="recommendation-card" onclick="showRecipeDetail(${recipe.id})">
            <div class="recommendation-image" style="background-image: url('${recipe.image}')">
                <div class="recommendation-overlay">
                    <div class="recommendation-title">${recipe.title}</div>
                    <div class="recommendation-meta">
                        <span><i class="far fa-clock"></i> ${recipe.time}m</span>
                        <span><i class="fas fa-star"></i> ${recipe.rating}</span>
                    </div>
                </div>
            </div>
        </div>
    `,
    )
    .join("")
}

// Modal functions
function showModal(modalId) {
  const modal = document.getElementById(modalId)
  if (modal) {
    modal.classList.add("active")
    document.body.style.overflow = "hidden"
  }
}

function hideModal(modalId) {
  const modal = document.getElementById(modalId)
  if (modal) {
    modal.classList.remove("active")
    document.body.style.overflow = "auto"
  }
}

// Show add item modal
let currentAddItemType = ""

function showAddItemModal(type) {
  currentAddItemType = type
  const modalTitle = document.getElementById("addItemModalTitle")
  const expiryGroup = document.getElementById("expiryGroup")

  modalTitle.textContent = type === "grocery" ? "Tambah Item Belanja" : "Tambah Item Inventory"
  expiryGroup.style.display = type === "inventory" ? "block" : "none"

  // Reset form
  document.getElementById("addItemForm").reset()

  showModal("addItemModal")
}

// Handle add item form submission
function handleAddItem(e) {
  e.preventDefault()

  const formData = new FormData(e.target)
  const itemData = {
    id: Date.now() + Math.random(),
    name: formData.get("itemName") || document.getElementById("itemName").value,
    amount: Number.parseFloat(document.getElementById("itemAmount").value) || 1,
    unit: document.getElementById("itemUnit").value || "buah",
    category: document.getElementById("itemCategory").value || "pantry",
    checked: false,
  }

  if (currentAddItemType === "grocery") {
    groceryList.push(itemData)
    renderGroceryList()
    showToast("Berhasil!", "Item berhasil ditambahkan ke daftar belanja", "success")
  } else if (currentAddItemType === "inventory") {
    const inventoryItem = {
      ...itemData,
      current: itemData.amount,
      max: itemData.amount * 2,
      expiry: document.getElementById("itemExpiry").value || "2024-12-31",
    }
    inventory.push(inventoryItem)
    renderInventory()
    renderSuggestions()
    showToast("Berhasil!", "Item berhasil ditambahkan ke inventory", "success")
  }

  saveToLocalStorage()
  hideModal("addItemModal")
}

// Cancel add item
document.getElementById("cancelAddItem").addEventListener("click", () => {
  hideModal("addItemModal")
})

// Apply filters
function applyFilters() {
  currentFilters.difficulty = document.getElementById("difficultyFilter").value
  currentFilters.maxTime = document.getElementById("timeFilter").value
  currentFilters.maxCalories = document.getElementById("calorieFilter").value

  const dietaryCheckboxes = document.querySelectorAll('#dietaryFilters input[type="checkbox"]:checked')
  currentFilters.dietary = Array.from(dietaryCheckboxes).map((cb) => cb.value)

  renderRecipes()
  hideModal("filterModal")
  showToast("Filter diterapkan", "Resep telah difilter sesuai kriteria", "success")
}

// Reset filters
function resetFilters() {
  currentFilters = {
    category: currentFilters.category, // Keep category filter
    difficulty: "",
    maxTime: "",
    maxCalories: "",
    dietary: [],
  }

  // Reset form
  document.getElementById("difficultyFilter").value = ""
  document.getElementById("timeFilter").value = ""
  document.getElementById("calorieFilter").value = ""
  document.querySelectorAll('#dietaryFilters input[type="checkbox"]').forEach((cb) => {
    cb.checked = false
  })

  renderRecipes()
  showToast("Filter direset", "Semua filter telah dihapus", "info")
}

// Toast notification system
function showToast(title, message, type = "info") {
  const toastContainer = document.getElementById("toastContainer")
  const toastId = "toast-" + Date.now()

  const toast = document.createElement("div")
  toast.className = `toast ${type}`
  toast.id = toastId
  toast.innerHTML = `
        <div class="toast-header">
            <div class="toast-title">${title}</div>
            <button class="toast-close" onclick="hideToast('${toastId}')">&times;</button>
        </div>
        <div class="toast-message">${message}</div>
    `

  toastContainer.appendChild(toast)

  // Auto hide after 5 seconds
  setTimeout(() => {
    hideToast(toastId)
  }, 5000)
}

function hideToast(toastId) {
  const toast = document.getElementById(toastId)
  if (toast) {
    toast.style.animation = "toastSlideOut 0.3s ease forwards"
    setTimeout(() => {
      toast.remove()
    }, 300)
  }
}

// Utility functions
function debounce(func, wait) {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

// Loading overlay
function showLoading() {
  document.getElementById("loadingOverlay").classList.add("active")
}

function hideLoading() {
  document.getElementById("loadingOverlay").classList.remove("active")
}

// Initialize suggestions on page load
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    renderSuggestions()
  }, 100)
})

// Add CSS animation for toast slide out
const style = document.createElement("style")
style.textContent = `
    @keyframes toastSlideOut {
        from {
            opacity: 1;
            transform: translateX(0);
        }
        to {
            opacity: 0;
            transform: translateX(100%);
        }
    }
    
    .no-results {
        text-align: center;
        padding: 60px 20px;
        color: var(--gray-color);
        grid-column: 1 / -1;
    }
    
    .empty-state {
        text-align: center;
        padding: 40px 20px;
        color: var(--gray-color);
    }
    
    .meal-selector {
        display: grid;
        gap: 15px;
        max-height: 400px;
        overflow-y: auto;
    }
    
    .meal-option {
        display: flex;
        gap: 15px;
        padding: 15px;
        border: 1px solid var(--light-gray);
        border-radius: var(--radius);
        cursor: pointer;
        transition: var(--transition);
    }
    
    .meal-option:hover {
        border-color: var(--secondary-color);
        background: rgba(78, 205, 196, 0.1);
    }
    
    .meal-option-image {
        width: 80px;
        height: 80px;
        object-fit: cover;
        border-radius: var(--radius-sm);
    }
    
    .meal-option-info {
        flex: 1;
    }
    
    .meal-option-info h4 {
        margin-bottom: 8px;
        color: var(--dark-color);
    }
    
    .meal-option-meta {
        display: flex;
        gap: 15px;
        font-size: 0.9rem;
        color: var(--gray-color);
    }
    
    .suggestion-item {
        display: flex;
        gap: 12px;
        padding: 12px;
        border-radius: var(--radius-sm);
        cursor: pointer;
        transition: var(--transition);
        margin-bottom: 10px;
    }
    
    .suggestion-item:hover {
        background: var(--light-gray);
    }
    
    .suggestion-image {
        width: 60px;
        height: 60px;
        object-fit: cover;
        border-radius: var(--radius-sm);
    }
    
    .suggestion-info {
        flex: 1;
    }
    
    .suggestion-title {
        font-weight: 600;
        margin-bottom: 5px;
        color: var(--dark-color);
        font-size: 0.9rem;
    }
    
    .suggestion-meta {
        display: flex;
        gap: 10px;
        font-size: 0.8rem;
        color: var(--gray-color);
    }
    
    .category-header {
        font-size: 0.9rem;
        font-weight: 600;
        color: var(--gray-color);
        margin-bottom: 10px;
        padding-bottom: 5px;
        border-bottom: 1px solid var(--light-gray);
    }
    
    .grocery-category {
        margin-bottom: 20px;
    }
    
    .recipe-detail-section {
        margin-bottom: 30px;
    }
    
    .recipe-detail-section h3 {
        display: flex;
        align-items: center;
        gap: 10px;
        margin-bottom: 15px;
        color: var(--dark-color);
        font-size: 1.2rem;
    }
    
    .recipe-detail-section h3 i {
        color: var(--secondary-color);
    }
    
    .ingredients-list {
        list-style: none;
        padding: 0;
    }
    
    .ingredient-item {
        padding: 10px;
        background: var(--light-color);
        border-radius: var(--radius-sm);
        margin-bottom: 8px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    
    .steps-list {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    
    .step-item {
        display: flex;
        gap: 15px;
        padding: 20px;
        background: var(--light-color);
        border-radius: var(--radius);
    }
    
    .step-number {
        width: 40px;
        height: 40px;
        background: var(--secondary-color);
        color: white;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 700;
        flex-shrink: 0;
    }
    
    .step-content {
        flex: 1;
    }
    
    .step-time {
        margin-top: 10px;
        font-size: 0.9rem;
        color: var(--gray-color);
        display: flex;
        align-items: center;
        gap: 5px;
    }
    
    .step-tips {
        margin-top: 10px;
        padding: 10px;
        background: #e3f2fd;
        border-radius: var(--radius-sm);
        font-size: 0.9rem;
        color: #1976d2;
        display: flex;
        align-items: flex-start;
        gap: 8px;
    }
    
    .recipe-detail-actions {
        display: flex;
        gap: 10px;
        justify-content: center;
        margin-top: 30px;
        padding-top: 20px;
        border-top: 1px solid var(--light-gray);
    }
    
    .meta-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        gap: 15px;
        margin-bottom: 20px;
    }
    
    .text-danger {
        color: var(--danger-color) !important;
    }
`
document.head.appendChild(style)
