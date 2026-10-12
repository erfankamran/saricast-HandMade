import { useState } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { Menu, ShoppingCart } from "lucide-react";

import DrawerMenu from "./components/DrawerMenu";
import BottomNavigation from "./components/BottomNavigation";
import SupportButton from "./components/SupportButton";

import HomePage from "./pages/HomePage";
import CategoriesPage from "./pages/CategoriesPage";
import FavoritesPage from "./pages/FavoritesPage";
import CartPage from "./pages/CartPage";
import ProfilePage from "./pages/ProfilePage";

function PageNotFound() {
  const navigate = useNavigate();

  return (
    <main className="mx-auto max-w-5xl px-4 py-16 text-center">
      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-gray-100 text-3xl font-bold text-gray-400">
        404
      </div>

      <h2 className="mt-5 text-xl font-extrabold">صفحه پیدا نشد</h2>

      <p className="mt-2 text-sm text-gray-500">
        صفحه‌ای که دنبالش هستی وجود ندارد.
      </p>

      <button
        type="button"
        onClick={() => navigate("/")}
        className="mt-6 rounded-xl bg-gray-900 px-6 py-3 text-sm font-bold text-white transition hover:bg-gray-700 active:scale-95"
      >
        بازگشت به فروشگاه
      </button>
    </main>
  );
}

function StoreLayout() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  // با تغییر مسیر، دراور بسته می‌شود.
  const closeDrawer = () => setDrawerOpen(false);

  return (
    <div dir="rtl" className="min-h-screen bg-gray-50 pb-24 text-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-30 border-b border-gray-100 bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4">
          <button
            type="button"
            onClick={() => setDrawerOpen(true)}
            aria-label="باز کردن منو"
            aria-controls="store-drawer"
            aria-expanded={drawerOpen}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 bg-white transition hover:bg-gray-100 active:scale-95"
          >
            <Menu size={23} strokeWidth={1.8} />
          </button>

          <button
            type="button"
            onClick={() => navigate("/")}
            className="text-lg font-extrabold tracking-tight"
          >
            فروشگاه من
          </button>

          <button
            type="button"
            onClick={() => navigate("/cart")}
            aria-label="رفتن به سبد خرید"
            className={`relative flex h-11 w-11 items-center justify-center rounded-xl border transition active:scale-95 ${
              location.pathname === "/cart"
                ? "border-gray-900 bg-gray-100"
                : "border-gray-200 bg-white hover:bg-gray-100"
            }`}
          >
            <ShoppingCart size={22} strokeWidth={1.8} />
          </button>
        </div>
      </header>

      {/* Main routes */}
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/categories" element={<CategoriesPage />} />

        <Route path="/favorites" element={<FavoritesPage />} />

        <Route path="/cart" element={<CartPage />} />

        <Route path="/profile" element={<ProfilePage />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>

      {/* Drawer */}
      <DrawerMenu isOpen={drawerOpen} onClose={closeDrawer} />

      {/* Mobile bottom navigation */}
      <BottomNavigation />

      {/* Mobile bottom Support */}
      <SupportButton />
    </div>
  );
}

export default function App() {
  return <StoreLayout />;
}
