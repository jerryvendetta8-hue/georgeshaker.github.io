import { ImageResponse } from "next/og";

export const alt = "QURO — AI Patient Capture for Private Clinics";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #0a0f1c 0%, #111827 100%)",
          color: "#f1f5f9",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 28, color: "#22d3ee" }}>
          <div style={{ width: 16, height: 16, borderRadius: 999, background: "#14b8a6" }} />
          QURO · AI Patient Capture
        </div>
        <div style={{ fontSize: 72, fontWeight: 800, letterSpacing: -2, marginTop: 32, lineHeight: 1.05 }}>
          Never lose another patient to a missed call.
        </div>
        <div style={{ fontSize: 30, color: "#94a3b8", marginTop: 32 }}>
          Built by Dr George Shaker, practising urology registrar
        </div>
      </div>
    ),
    size,
  );
}
