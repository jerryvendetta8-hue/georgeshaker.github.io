import type { Metadata } from "next"
import { Section } from "@/components/section"

export const metadata: Metadata = {
  title: "الشروط والأحكام",
  description: "الشروط والأحكام الخاصة باستخدام موقع صحة الرجل.",
}

export default function TermsPage() {
  return (
    <Section className="bg-white">
      <div className="mx-auto max-w-3xl">
        <h1 className="font-display text-3xl font-bold text-navy md:text-4xl">
          الشروط والأحكام
        </h1>
        <div className="mt-8 space-y-6 leading-8 text-ink">
          <p>
            باستخدامك لهذا الموقع فإنك توافق على الشروط والأحكام التالية. يُرجى
            قراءتها بعناية قبل الاستفادة من المحتوى والخدمات.
          </p>
          <div>
            <h2 className="font-display text-xl font-bold text-navy">
              طبيعة المحتوى
            </h2>
            <p className="mt-2">
              جميع المعلومات المنشورة على هذا الموقع ذات طابع تثقيفي عام، وهي لا
              تُشكّل تشخيصاً طبياً أو وصفة علاجية. القرارات الطبية يجب أن تُتخذ
              دائماً بالتشاور مع طبيب مختص بعد فحص سريري كامل.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl font-bold text-navy">
              حدود المسؤولية
            </h2>
            <p className="mt-2">
              لا يتحمّل الموقع أو القائمون عليه أي مسؤولية عن أي ضرر ناتج عن
              الاعتماد على المحتوى دون استشارة طبية مباشرة.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl font-bold text-navy">
              الملكية الفكرية
            </h2>
            <p className="mt-2">
              جميع المحتويات من نصوص وأدلة وصور محمية بحقوق الملكية الفكرية، ولا
              يجوز إعادة نشرها أو استخدامها تجارياً دون إذن مسبق.
            </p>
          </div>
        </div>
      </div>
    </Section>
  )
}
