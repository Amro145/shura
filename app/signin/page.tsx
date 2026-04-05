import Link from "next/link";

export default function SignInPage() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#111", color: "#fff" }}>
      <div style={{ width: "100%", maxWidth: "400px", padding: "32px", textAlign: "center" }}>
        <h1 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "8px" }}>Sign in to Shura</h1>
        <p style={{ color: "#888", marginBottom: "32px" }}>Sign in to compare AI models</p>
        <div style={{ padding: "16px", background: "rgba(255,255,255,0.1)", borderRadius: "8px", marginBottom: "16px", color: "#ccc" }}>
          OAuth configuration coming soon
        </div>
        <Link href="/" style={{ display: "block", padding: "12px 24px", background: "#333", color: "#fff", borderRadius: "8px", textDecoration: "none" }}>
          Back to Home
        </Link>
      </div>
    </div>
  );
}
