import { credentials, site } from "@/lib/site"

export function PhysicianSchema() {
  const physician = {
    "@context": "https://schema.org",
    "@type": "Physician",
    "@id": `${site.url}/#physician`,
    name: site.doctorNameEn,
    alternateName: site.doctorName,
    url: site.url,
    image: `${site.url}/images/dr-george-shaker-v2.png`,
    email: site.email,
    medicalSpecialty: "https://schema.org/Urology",
    hasCredential: credentials.map((name) => ({ "@type": "EducationalOccupationalCredential", name })),
    sameAs: [site.linkedin, ...Object.values(site.social).filter((url) => url && url !== "https://whatsapp.com/channel/")],
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(physician).replace(/</g, "\\u003c") }} />
}
