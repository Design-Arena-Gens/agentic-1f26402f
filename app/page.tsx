export default function Page() {
  return (
    <main style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "2rem",
      gap: "1.25rem",
      background: "#0b132b",
      color: "#f0f4f8",
      fontFamily: "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial"
    }}>
      <h1 style={{ fontSize: "2rem", fontWeight: 700, margin: 0 }}>Toyota Logo Downloader</h1>
      <p style={{ opacity: 0.9, margin: 0 }}>High-quality SVG served locally for download.</p>

      <div style={{
        background: "#1c2541",
        padding: "1.5rem",
        borderRadius: 12,
        boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1rem"
      }}>
        <img src="/toyota-logo.svg" alt="Toyota logo" width={220} height={120} style={{ objectFit: "contain" }} />
        <a
          href="/toyota-logo.svg"
          download
          style={{
            background: "#5bc0be",
            color: "#0b132b",
            textDecoration: "none",
            padding: "0.75rem 1rem",
            borderRadius: 8,
            fontWeight: 700,
            boxShadow: "0 6px 20px rgba(91,192,190,0.35)",
          }}
        >
          Download SVG
        </a>
      </div>

      <small style={{ opacity: 0.7 }}>For editorial/identification use. Toyota ? their respective owner.</small>
    </main>
  );
}
