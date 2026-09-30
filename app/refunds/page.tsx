import type { Metadata } from "next"
import { Section } from "@/components/section"
import { site } from "@/lib/site"

export const metadata: Metadata = {
  title: "سياسة الاسترجاع",
  description: "سياسة استرجاع المبالغ للدورات والبرامج المدفوعة.",
}

export default function RefundsPage() {
  return (
    <Section className="bg-white">
      <div className="mx-auto max-w-3xl">
        <h1 className="font-display text-3xl font-bold text-navy md:text-4xl">
          سياسة الاسترجاع
        </h1>
        <div className="mt-8 space-y-6 leading-8 text-ink">
          <p>
            نحرص على رضاك التام عن المحتوى الذي تشترك فيه. توضّح هذه السياسة
            شروط استرجاع المبالغ المدفوعة للدورات والبرامج.
          </p>
          <div>
            <h2 className="font-display text-xl font-bold text-navy">
              مدة الاسترجاع
            </h2>
            <p className="mt-2">
              يمكنك طلب استرجاع كامل المبلغ خلال ١٤ يوماً من تاريخ الشراء، شرط
              ألّا تكون قد أكملت أكثر من ٢٠٪ من محتوى الدورة أو البرنامج.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl font-bold text-navy">
              كيفية طلب الاسترجاع
            </h2>
            <p className="mt-2">
              لطلب الاسترجاع، راسلنا عبر البريد الإلكتروني موضّحاً اسمك وبريد
              الشراء وسبب الطلب. سنعالج طلبك خلال ٥ أيام عمل.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl font-bold text-navy">
              حالات لا يشملها الاسترجاع
            </h2>
            <p className="mt-2">
              لا يشمل الاسترجاع الاشتراكات الشهرية بعد بدء دورة الفوترة، ولا
              الكتب الإلكترونية بعد تحميلها، ولا رسوم الجلسات المباشرة التي تم
              حضورها.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl font-bold text-navy">
              التواصل معنا
            </h2>
            <p className="mt-2">
              لأي استفسار بخصوص الاسترجاع، راسلنا على:{" "}
              <a
                href={`mailto:${site.email}`}
                dir="ltr"
                className="text-gold-dark underline"
              >
                {site.email}
              </a>
            </p>
          </div>
        </div>
      </div>
    </Section>
  )
}
