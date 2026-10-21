import { pageMetadata } from "@/lib/seo"
import type { Metadata } from "next"
import { Section } from "@/components/section"
import { site } from "@/lib/site"

export const metadata: Metadata = pageMetadata("/privacy", {
  title: "سياسة الخصوصية",
  description: "سياسة الخصوصية وحماية البيانات في موقع صحة الرجل.",
})

export default function PrivacyPage() {
  return (
    <Section className="bg-white">
      <div className="mx-auto max-w-3xl">
        <h1 className="font-display text-3xl font-bold text-navy md:text-4xl">
          سياسة الخصوصية
        </h1>
        <div className="mt-8 space-y-6 leading-8 text-ink">
          <section>
            <h2 className="text-xl font-bold text-navy">من نحن</h2>
            <p className="mt-2">يدير هذا الموقع د. جورج شاكر، المسؤول عن استخدام البيانات الموضّح هنا. للاستفسارات أو طلبات الخصوصية: <a href={`mailto:${site.email}`} className="break-all text-gold-dark underline"><bdi>{site.email}</bdi></a>.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-navy">المعلومات التي نجمعها</h2>
            <p className="mt-2">نجمع الاسم والبريد الإلكتروني عند طلب الأدلة أو الانضمام إلى قوائم الانتظار والنشرة الطبية. قد تتضمن نماذج التواصل رقم الهاتف الاختياري والرسالة التي تختار إرسالها.</p>
            <p className="mt-2">عند الحجز عبر نموذج Google، تُجمع تفاصيل الحجز: الاسم ورقم واتساب والبلد والعمر ووصف مختصر للحالة. يرجى عدم إرسال معلومات صحية حساسة في نماذج النشرة أو قوائم الانتظار.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-navy">الأغراض والأساس القانوني</h2>
            <p className="mt-2">نستخدم البيانات لتقديم المحتوى المطلوب وإرسال تحديثات التسجيل التي وافقت عليها، والرد على استفساراتك وترتيب الاستشارات وإجرائها. الأساس القانوني لهذه الاستخدامات هو موافقتك. لا نبيع بياناتك ولا نستخدمها لأغراض تسويقية دون موافقتك.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-navy">مقدّمو الخدمة ونقل البيانات</h2>
            <p className="mt-2">نستخدم Mailchimp لإدارة قائمة البريد وإرسال الرسائل، وخدمات Google للنماذج وتخزين تفاصيل الحجز. قد يعالج هؤلاء المزوّدون البيانات خارج بلد إقامتك وفق سياساتهم وضماناتهم لحماية البيانات.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-navy">المعلومات الصحية الحساسة</h2>
            <p className="mt-2">تُستخدم المعلومات الصحية التي تشاركها عند الحجز فقط للتحضير للاستشارة، ولا تُستخدم مطلقاً للتسويق ولا تُضاف إلى قائمة Mailchimp التسويقية.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-navy">مدة الاحتفاظ</h2>
            <p className="mt-2">نحتفظ ببيانات قائمة البريد حتى إلغاء الاشتراك. نحتفظ بسجلات الحجز والاستشارات طوال المدة اللازمة طبياً، مع مراعاة الالتزامات القانونية والمهنية المنطبقة.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-navy">حقوقك</h2>
            <p className="mt-2">يمكنك طلب الوصول إلى بياناتك أو تصحيحها أو حذفها أو سحب موافقتك عبر البريد الإلكتروني المذكور في هذه الصفحة. يمكنك أيضاً إلغاء الاشتراك من رابط الإلغاء في رسائل البريد. لا يؤثر سحب الموافقة على المعالجة السابقة، وقد تُقيّد بعض طلبات الحذف بمتطلبات الاحتفاظ القانونية أو الطبية.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-navy">ملفات تعريف الارتباط</h2>
            <p className="mt-2">لا يضيف كود الموقع ملفات تعريف ارتباط للتحليلات أو الإعلانات أو تسجيل الدخول. نموذج Google المضمّن في صفحة الحجز خدمة خارجية قد تستخدم ملفات تعريف ارتباط خاصة بها بحسب إعدادات متصفحك وحسابك لدى Google. تخضع هذه الملفات لسياسة خصوصية Google، ويمكنك التحكّم بها من إعدادات متصفحك.</p>
          </section>
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
