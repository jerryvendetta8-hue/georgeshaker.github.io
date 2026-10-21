import { ImageResponse } from "next/og"

export const alt = "د. جورج شاكر — استشاري جراحة المسالك البولية"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function OpengraphImage() {
  // Google's text subset avoids contextual font tables unsupported by ImageResponse.
  const text = "د. جورج شاكر استشاري جراحة المسالك البولية وصحة الرجل · FEBU معلومات طبية موثوقة بالعربي"
  const stylesheet = await fetch(`https://fonts.googleapis.com/css?family=Tajawal:400,700&text=${encodeURIComponent(text)}`, { cache: "force-cache" })
  if (!stylesheet.ok) throw new Error("Unable to load Arabic font stylesheet")
  const fontUrls = [...(await stylesheet.text()).matchAll(/url\(([^)]+)\)/g)].map((match) => match[1])
  if (fontUrls.length !== 2) throw new Error("Expected regular and bold Arabic TTF fonts")
  const [regular, bold] = await Promise.all(fontUrls.map(async (url) => {
    const response = await fetch(url, { cache: "force-cache" })
    if (!response.ok) throw new Error("Unable to load Arabic social image font")
    return response.arrayBuffer()
  }))

  return new ImageResponse(
    <div dir="rtl" style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "flex-end", justifyContent: "center", padding: 80, background: "#14264a", color: "#faf8f4", fontFamily: "Tajawal", textAlign: "right", direction: "rtl" }}>
      <div style={{ width: 160, height: 6, background: "#c69a3f", marginBottom: 36 }} />
      {/* Satori shapes Arabic glyphs but needs explicit RTL ordering between words. */}
      <div style={{ display: "flex", flexDirection: "row-reverse", gap: 20, fontSize: 84, fontWeight: 700 }}>
        {"د. جورج شاكر".split(" ").map((word, index) => <span key={index}>{word}</span>)}
      </div>
      <div style={{ display: "flex", flexDirection: "row-reverse", gap: 8, fontSize: 36, marginTop: 24 }}>
        {"استشاري جراحة المسالك البولية وصحة الرجل · FEBU".split(" ").map((word, index) => <span key={index}>{word}</span>)}
      </div>
      <div style={{ display: "flex", flexDirection: "row-reverse", gap: 8, fontSize: 30, color: "#c69a3f", marginTop: 48 }}>
        {"معلومات طبية موثوقة بالعربي".split(" ").map((word, index) => <span key={index}>{word}</span>)}
      </div>
    </div>,
    { ...size, fonts: [
      { name: "Tajawal", data: regular, weight: 400, style: "normal" },
      { name: "Tajawal", data: bold, weight: 700, style: "normal" },
    ] },
  )
}
