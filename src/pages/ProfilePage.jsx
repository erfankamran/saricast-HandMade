
import { UserRound } from "lucide-react";

export default function ProfilePage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-8">
      <div className="rounded-2xl border border-gray-100 bg-white p-6">
        <div className="flex items-center gap-4">
          <div className="rounded-full bg-gray-100 p-4">
            <UserRound className="h-8 w-8 text-gray-600" />
          </div>
          <div>
            <h1 className="text-xl font-bold">پروفایل من</h1>
            <p className="mt-1 text-sm text-gray-500">
              کاربر مهمان
            </p>
          </div>
        </div>

        <p className="mt-6 text-sm text-gray-500">
          برای مشاهده سفارش‌ها و اطلاعات حساب، بعداً می‌توانیم
          سیستم ورود و ثبت‌نام را اضافه کنیم.
        </p>
      </div>
    </main>
  );
}
