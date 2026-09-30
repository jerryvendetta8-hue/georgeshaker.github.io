import type { Metadata } from "next"
import { Section } from "@/components/section"
import { site } from "@/lib/site"

export const metadata: Metadata = {
  title: "سياسة الخصوصية",
  description: "سياسة الخصوصية وحماية البيانات في موقع صحة الرجل.",
}

export default function PrivacyPage() {
  return (
    <Section className="bg-white">
      <div className="mx-auto max-w-3xl">
        <h1 className="font-display text-3xl font-bold text-navy md:text-4xl">
          سياسة الخصوصية
        </h1>
        <div className="mt-8 space-y-6 leading-8 text-ink">
          <p>
            نحن نحترم خصوصيتك ونلتزم بحماية بياناتك الشخصية. توضّح هذه السياسة
            كيفية جمعنا واستخدامنا للمعلومات التي تشاركها معنا عبر هذا الموقع.
          </p>
          <div>
            <h2 className="font-display text-xl font-bold text-navy">
              المعلومات التي نجمعها
            </h2>
            <p className="mt-2">
              عند تحميل أحد الأدلة أو الاشتراك في النشرة الطبية، نجمع اسمك وبريدك
              الإلكتروني فقط بهدف إرسال المحتوى الطبي المطلوب والنصائح الدورية.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl font-bold text-navy">
              كيف نستخدم بياناتك
            </h2>
            <p className="mt-2">
              نستخدم بياناتك لإرسال الأدلة والمحتوى التثقيفي فقط. لا نبيع أو نشارك
              بياناتك مع أي طرف ثالث لأغراض تسويقية.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl font-bold text-navy">
              إخلاء المسؤولية الطبية
            </h2>
            <p className="mt-2">
              المحتوى المنشور على هذا الموقع لأغراض تثقيفية عامة فقط، ولا يُغني عن
              استشارة الطبيب المختص. يُرجى دائماً مراجعة طبيبك قبل اتخاذ أي قرار
              يتعلق بصحتك.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl font-bold text-navy">
              التواصل معنا
            </h2>
            <p className="mt-2">
              لأي استفسار بخصوص خصوصيتك، يمكنك مراسلتنا عبر البريد الإلكتروني:{" "}
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
