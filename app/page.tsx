import Link from "next/link";

export default function Home() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#111", color: "#fff" }}>
      <div style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>Shura</h1>
        <p style={{ color: "#888", marginBottom: "2rem" }}>Compare AI models side-by-side</p>
        <Link href="/signin" style={{ padding: "12px 24px", background: "#3b82f6", color: "#fff", borderRadius: "8px", textDecoration: "none" }}>
          Sign In
        </Link>
      </div>
    </div>
  );
}
