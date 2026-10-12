
import { useLocation, useNavigate } from "react-router-dom";

const navItems = [
  { id: "home", label: "خانه", icon: "⌂", path: "/" },
  { id: "categories", label: "دسته‌ها", icon: "▦", path: "/categories" },
  { id: "favorites", label: "علاقه‌مندی", icon: "♡", path: "/favorites" },
  { id: "profile", label: "حساب من", icon: "○", path: "/profile" },
];

export default function BottomNavigation() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav
      aria-label="ناوبری اصلی"
      className="fixed inset-x-0 bottom-0 z-30 border-t border-gray-200 bg-white/95 pb-[env(safe-area-inset-bottom)] backdrop-blur"
    >
      <div className="mx-auto grid h-16 max-w-md grid-cols-4">
        {navItems.map((item) => {
          const active = location.pathname === item.path;

          return (
            <button
              key={item.id}
              type="button"
              aria-current={active ? "page" : undefined}
              onClick={() => navigate(item.path)}
              className={`flex flex-col items-center justify-center gap-1 transition-colors duration-200 motion-reduce:transition-none ${
                active ? "text-gray-950" : "text-gray-400"
              }`}
            >
              <span
                aria-hidden="true"
                className={`text-xl transition-transform duration-200 motion-reduce:transition-none ${
                  active ? "-translate-y-0.5 scale-110" : ""
                }`}
              >
                {item.icon}
              </span>

              <span className="text-[10px] font-medium">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
