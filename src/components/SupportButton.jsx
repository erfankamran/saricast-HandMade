
import { useState } from "react";
import {
  Headset,
  X,
  Phone,
  MessageCircle,
  MessageSquareText,
  ArrowUpLeft,
  Clock3,
  Sparkles,
} from "lucide-react";

export default function SupportButton() {
  const [isOpen, setIsOpen] = useState(false);

  // این اطلاعات را با اطلاعات واقعی فروشگاهت جایگزین کن
  const phone = "989121234567";
  const whatsapp = "989121234567";

  const supportOptions = [
    {
      title: "تماس تلفنی",
      description: "صحبت مستقیم با کارشناسان",
      Icon: Phone,
      href: `tel:+${phone}`,
      color: "bg-emerald-50 text-emerald-700",
    },
    {
      title: "گفت‌وگو در واتساپ",
      description: "پاسخ‌گویی از طریق واتساپ",
      Icon: MessageCircle,
      href: `https://wa.me/${whatsapp}`,
      color: "bg-green-50 text-green-700",
    },
    {
      title: "گفت‌وگوی آنلاین",
      description: "ارسال پیام به پشتیبانی",
      Icon: MessageSquareText,
      href: "mailto:support@example.com",
      color: "bg-blue-50 text-blue-700",
    },
  ];

  return (
    <div
      dir="rtl"
      className="fixed bottom-24 right-4 z-[60] flex flex-col items-end gap-4 sm:bottom-8 sm:right-6"
    >
      {/* پنل پشتیبانی */}
      <div
        aria-hidden={!isOpen}
        className={`origin-bottom-right transition-all duration-300 ease-out ${
          isOpen
            ? "visible translate-y-0 scale-100 opacity-100"
            : "invisible pointer-events-none translate-y-4 scale-95 opacity-0"
        }`}
      >
        <section className="w-[min(350px,calc(100vw-2rem))] overflow-hidden rounded-[28px] border border-white/80 bg-white shadow-[0_20px_70px_-15px_rgba(15,23,42,0.28)]">
          {/* هدر گرادیانی */}
          <div className="relative overflow-hidden bg-gradient-to-br from-emerald-700 via-emerald-600 to-teal-500 p-5 text-white">
            <div
              aria-hidden="true"
              className="absolute -left-8 -top-12 h-36 w-36 rounded-full border border-white/15"
            />
            <div
              aria-hidden="true"
              className="absolute -left-2 -top-5 h-24 w-24 rounded-full border border-white/10"
            />

            <div className="relative flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 bg-white/15 shadow-inner backdrop-blur">
                  <Headset size={26} />
                </div>

                <div>
                  <div className="mb-1 flex items-center gap-1.5">
                    <Sparkles size={13} />
                    <span className="text-xs text-emerald-50">
                      مرکز ارتباط با مشتریان
                    </span>
                  </div>

                  <h2 className="text-lg font-extrabold">
                    چطور کمکتون کنیم؟
                  </h2>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="بستن پنل پشتیبانی"
                className="rounded-xl p-2 transition hover:bg-white/15"
              >
                <X size={20} />
              </button>
            </div>

            <div className="relative mt-5 flex items-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-3 py-2.5 backdrop-blur-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-200 opacity-70 motion-reduce:animate-none" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-200" />
              </span>

              <span className="text-xs font-medium">
                آماده پاسخ‌گویی به شما هستیم
              </span>

              <Clock3 className="mr-auto" size={15} />
            </div>
          </div>

          {/* گزینه‌های ارتباطی */}
          <div className="space-y-2.5 p-4">
            <p className="mb-3 px-1 text-xs font-bold text-gray-400">
              روش ارتباطی خود را انتخاب کنید
            </p>

            {supportOptions.map(
              ({ title, description, Icon, href, color }) => (
                <a
                  key={title}
                  href={href}
                  target={href.startsWith("https://") ? "_blank" : undefined}
                  rel={
                    href.startsWith("https://")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  tabIndex={isOpen ? 0 : -1}
                  className="group flex items-center gap-3 rounded-2xl border border-gray-100 bg-white p-3 transition duration-200 hover:border-emerald-200 hover:bg-emerald-50/50 active:scale-[0.98]"
                >
                  <div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${color} transition-transform duration-200 group-hover:scale-105`}
                  >
                    <Icon size={21} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="text-sm font-bold text-gray-800">
                      {title}
                    </h3>
                    <p className="mt-1 text-[11px] text-gray-400">
                      {description}
                    </p>
                  </div>

                  <ArrowUpLeft
                    size={17}
                    className="shrink-0 text-gray-300 transition group-hover:-translate-x-0.5 group-hover:text-emerald-600"
                  />
                </a>
              )
            )}

            <p className="pt-2 text-center text-[10px] text-gray-400">
              همراه شما هستیم تا خرید بهتری داشته باشید
            </p>
          </div>
        </section>
      </div>

      {/* دکمه شناور ضربان‌دار */}
      <div className="relative flex h-[68px] w-[68px] items-center justify-center">
        {!isOpen && (
          <>
            <span
              aria-hidden="true"
              className="absolute inset-0 animate-ping rounded-full bg-emerald-500/25 motion-reduce:animate-none"
            />
            <span
              aria-hidden="true"
              className="absolute inset-1 rounded-full border border-emerald-500/30 animate-pulse motion-reduce:animate-none"
            />
          </>
        )}

        <button
          type="button"
          onClick={() => setIsOpen((previous) => !previous)}
          aria-label={
            isOpen ? "بستن پشتیبانی" : "باز کردن پشتیبانی"
          }
          aria-expanded={isOpen}
          className="relative flex h-[58px] w-[58px] items-center justify-center rounded-[22px] bg-gradient-to-br from-emerald-500 via-emerald-600 to-teal-700 text-white shadow-[0_8px_25px_-5px_rgba(5,150,105,0.65)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_-5px_rgba(5,150,105,0.6)] active:scale-95"
        >
          <span
            className={`absolute inset-0 rounded-[22px] bg-white/10 transition-opacity ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />

          {isOpen ? (
            <X size={26} className="relative" />
          ) : (
            <Headset size={27} className="relative" />
          )}
        </button>
      </div>
    </div>
  );
}
