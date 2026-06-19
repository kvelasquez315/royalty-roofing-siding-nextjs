import { useState } from "react";
import { Loader2 } from "lucide-react";

const WEBHOOK_URL =
  "https://services.leadconnectorhq.com/hooks/2HOx7nqhyy85pwGlIHvA/webhook-trigger/NgGQTmvmBXN8knCe4mNw";

interface EstimateFormProps {
  variant?: "glass" | "card";
  headerText?: string;
  buttonText?: string;
  successMessage?: string;
}

export default function EstimateForm({
  variant = "glass",
  headerText = "Get Your Free Consultation",
  buttonText = "GET MY FREE ESTIMATE",
  successMessage = "We'll be in touch within one business day to schedule your free roof inspection.",
}: EstimateFormProps) {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, submittedAt: new Date().toISOString() }),
      });
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  const isGlass = variant === "glass";

  const containerStyle: React.CSSProperties = {
    background: isGlass ? "rgba(10,18,32,0.82)" : "#ffffff",
    backdropFilter: isGlass ? "blur(16px)" : "none",
    border: isGlass ? "1px solid rgba(255,255,255,0.14)" : "1px solid #e5e7eb",
    borderRadius: "16px",
    padding: "36px 28px",
    boxShadow: isGlass
      ? "0 24px 64px rgba(0,0,0,0.45)"
      : "0 4px 24px rgba(0,0,0,0.08)",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    marginBottom: "6px",
    fontSize: "13px",
    fontWeight: 600,
    color: isGlass ? "rgba(255,255,255,0.75)" : "#374151",
    fontFamily: "var(--font-body)",
    letterSpacing: "0.02em",
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "13px 16px",
    background: isGlass ? "rgba(255,255,255,0.08)" : "#F3F4F6",
    border: isGlass ? "1px solid rgba(255,255,255,0.16)" : "1px solid #D1D5DB",
    borderRadius: "8px",
    color: isGlass ? "white" : "#111827",
    fontFamily: "var(--font-body)",
    fontSize: "15px",
    outline: "none",
    transition: "border-color 0.15s, background 0.15s",
    boxSizing: "border-box",
  };

  if (status === "success") {
    return (
      <div style={{ ...containerStyle, textAlign: "center", padding: "48px 28px" }}>
        <div
          style={{
            width: "56px",
            height: "56px",
            borderRadius: "50%",
            background: "#3D6CC0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 16px",
          }}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "32px",
            color: isGlass ? "white" : "#0A1220",
            marginBottom: "12px",
            letterSpacing: "0.04em",
          }}
        >
          REQUEST RECEIVED
        </h3>
        <p
          style={{
            fontFamily: "var(--font-body)",
            color: isGlass ? "rgba(255,255,255,0.75)" : "#374151",
            fontSize: "15px",
            lineHeight: 1.7,
          }}
        >
          {successMessage} Questions? Call us at{" "}
          <a href="tel:4022168850" style={{ color: "#3D6CC0", textDecoration: "none" }}>
            (402) 216-8850
          </a>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={containerStyle}>
      <h3
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "clamp(22px, 2.5vw, 28px)",
          fontWeight: 800,
          color: isGlass ? "white" : "#0A1220",
          marginBottom: "24px",
          lineHeight: 1.2,
        }}
      >
        {headerText}
      </h3>
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        {/* First + Last name row */}
        <div
          className="form-two-col"
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}
        >
          <div>
            <label style={labelStyle} htmlFor="firstName">
              First Name <span style={{ color: "#f87171" }}>*</span>
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              required
              placeholder="Jane"
              value={form.firstName}
              onChange={handleChange}
              style={inputStyle}
            />
          </div>
          <div>
            <label style={labelStyle} htmlFor="lastName">
              Last Name <span style={{ color: "#f87171" }}>*</span>
            </label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              required
              placeholder="Smith"
              value={form.lastName}
              onChange={handleChange}
              style={inputStyle}
            />
          </div>
        </div>
        {/* Phone */}
        <div>
          <label style={labelStyle} htmlFor="phone">
            Phone <span style={{ color: "#f87171" }}>*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="(402) 555-0100"
            value={form.phone}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={status === "loading"}
          style={{
            width: "100%",
            padding: "18px 24px",
            background: "#3D6CC0",
            color: "white",
            border: "none",
            borderRadius: "10px",
            fontSize: "18px",
            fontFamily: "var(--font-display)",
            fontWeight: 400,
            letterSpacing: "0.1em",
            cursor: status === "loading" ? "not-allowed" : "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            transition: "background 0.2s",
            marginTop: "4px",
          }}
          onMouseEnter={(e) => {
            if (status !== "loading")
              (e.currentTarget as HTMLButtonElement).style.background = "#2d5aad";
          }}
          onMouseLeave={(e) => {
            if (status !== "loading")
              (e.currentTarget as HTMLButtonElement).style.background = "#3D6CC0";
          }}
        >
          {status === "loading" ? (
            <>
              <Loader2 size={20} className="animate-spin" /> Sending...
            </>
          ) : (
            buttonText
          )}
        </button>
        {status === "error" && (
          <p
            style={{
              color: "#f87171",
              fontSize: "13px",
              textAlign: "center",
              fontFamily: "var(--font-body)",
            }}
          >
            Something went wrong. Please call us at (402) 216-8850.
          </p>
        )}
      </div>
      <style>{`
        @media (max-width: 640px) {
          .form-two-col { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </form>
  );
}
