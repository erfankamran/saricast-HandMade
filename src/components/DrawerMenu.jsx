
import { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import {
  House,
  Grid2X2,
  Heart,
  ShoppingCart,
  UserRound,
  Star,
  Package,
  Settings,
  CircleHelp,
  Info,
  ChevronLeft,
  X,
} from "lucide-react";

const menuItems = [
  { label: "صفحه اصلی", path: "/", Icon: House },
  { label: "دسته‌بندی‌ها", path: "/categories", Icon: Grid2X2 },
  { label: "محصولات ویژه", path: "/", Icon: Star },
  { label: "سبد خرید", path: "/cart", Icon: ShoppingCart },
  { label: "سفارش‌های من", path: "/profile", Icon: Package },
  { label: "علاقه‌مندی‌ها", path: "/favorites", Icon: Heart },
  { label: "پروفایل", path: "/profile", Icon: UserRound },
];

const supportItems = [
  { label: "تنظیمات", Icon: Settings },
  { label: "راهنما و پشتیبانی", Icon: CircleHelp },
  { label: "درباره ما", Icon: Info },
];

export default function DrawerMenu({ isOpen, onClose }) {
  const drawerRef = useRef(null);
  const closeButtonRef = useRef(null);

  // مدیریت فوکوس هنگام باز و بسته شدن منو
  useEffect(() => {
    if (isOpen) {
      closeButtonRef.current?.focus();
      return;
    }

    if (drawerRef.current?.contains(document.activeElement)) {
      document.activeElement.blur();
    }
  }, [isOpen]);

  // بستن منو با کلید Escape
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <>
      {/* پس‌زمینه تیره */}
      <button
        type="button"
        aria-label="بستن منو"
        tabIndex={isOpen ? 0 : -1}
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 ${
          isOpen
            ? "visible opacity-100"
            : "invisible pointer-events-none opacity-0"
        }`}
      />

      {/* پنل کشویی */}
      <aside
        ref={drawerRef}
        id="store-drawer"
        dir="rtl"
        aria-label="منوی فروشگاه"
        aria-hidden={!isOpen}
        inert={!isOpen}
        className={`fixed right-0 top-0 z-50 flex h-dvh w-80 max-w-[85vw] flex-col bg-white shadow-2xl transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* سربرگ */}
        <div className="flex h-16 shrink-0 items-center justify-between border-b border-gray-100 px-5">
          <div>
            <h2 className="text-lg font-extrabold text-gray-900">
              فروشگاه من
            </h2>

            <p className="text-xs text-gray-400">
              به فروشگاه خوش آمدید
            </p>
          </div>

          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="بستن منو"
            tabIndex={isOpen ? 0 : -1}
            className="flex h-10 w-10 items-center justify-center rounded-xl transition hover:bg-gray-100"
          >
            <X size={22} />
          </button>
        </div>

        {/* لینک‌های اصلی */}
        <nav
          aria-label="منوی اصلی"
          className="flex-1 overflow-y-auto p-4"
        >
          <p className="mb-3 px-3 text-xs font-bold text-gray-400">
            منوی اصلی
          </p>

          <div className="space-y-1">
            {menuItems.map(({ label, path, Icon }) => (
              <NavLink
                key={label}
                to={path}
                end={path === "/"}
                onClick={onClose}
                tabIndex={isOpen ? 0 : -1}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-xl px-4 py-3 transition ${
                    isActive
                      ? "bg-gray-100 font-bold text-gray-950"
                      : "text-gray-600 hover:bg-gray-50"
                  }`
                }
              >
                <Icon size={21} strokeWidth={1.8} />

                <span className="flex-1 text-sm">
                  {label}
                </span>

                <ChevronLeft
                  size={17}
                  className="text-gray-400"
                />
              </NavLink>
            ))}
          </div>

          <div className="my-5 border-t border-gray-100" />

          {/* بخش پشتیبانی */}
          <p className="mb-3 px-3 text-xs font-bold text-gray-400">
            پشتیبانی
          </p>

          <div className="space-y-1">
            {supportItems.map(({ label, Icon }) => (
              <button
                key={label}
                type="button"
                onClick={onClose}
                tabIndex={isOpen ? 0 : -1}
                className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-gray-600 transition hover:bg-gray-50"
              >
                <Icon size={21} strokeWidth={1.8} />

                <span className="flex-1 text-right text-sm">
                  {label}
                </span>

                <ChevronLeft
                  size={17}
                  className="text-gray-400"
                />
              </button>
            ))}
          </div>
        </nav>

        {/* پایین منو */}
        <div className="shrink-0 border-t border-gray-100 p-4">
          <p className="text-center text-xs text-gray-400">
            فروشگاه من · تجربه خرید آسان
          </p>
        </div>
      </aside>
    </>
  );
}
