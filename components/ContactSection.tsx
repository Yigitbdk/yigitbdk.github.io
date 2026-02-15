"use client";

import React, { useState, useEffect } from "react";

const SendIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>
  </svg>
);

const TerminalIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="4 17 10 11 4 5"/><line x1="12" x2="20" y1="19" y2="19"/>
  </svg>
);

function CornerMarkers() {
  const positions = [
    "top-0 -left-[3px]",
    "top-0 -right-[3px]",
    "bottom-0 -left-[3px]",
    "bottom-0 -right-[3px]",
  ];
  return (
    <div className="absolute z-10 inset-0 pointer-events-none">
      {positions.map((pos, i) => (
        <span key={i} className={`absolute ${pos} text-[#4A7DD9] text-lg font-bold leading-none`}>+</span>
      ))}
    </div>
  );
}

type FormState = "idle" | "sending" | "success" | "error";

export default function ContactSection() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [secureId, setSecureId] = useState("");
  const [language, setLanguage] = useState<"tr" | "en">("tr");

  useEffect(() => {
    setSecureId(Math.random().toString(16).slice(2, 8).toUpperCase());
    
    // Load language
    const saved = localStorage.getItem("language") as "tr" | "en" | null;
    if (saved) setLanguage(saved);

    // Listen for changes
    const handleChange = (e: CustomEvent<"tr" | "en">) => {
      setLanguage(e.detail);
    };

    window.addEventListener("languageChange" as any, handleChange);
    return () => window.removeEventListener("languageChange" as any, handleChange);
  }, []);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (formState === "sending") return;

    setFormState("sending");

    try {
      const res = await fetch("https://formspree.io/f/mbdalnzw", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setFormState("success");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }

    setTimeout(() => setFormState("idle"), 4000);
  }

  const t = language === "tr" ? {
    header: "// İletişim",
    name: "İsim",
    namePlaceholder: "Yiğit Badik",
    email: "Email",
    emailPlaceholder: "yigitbadik@gmail.com",
    subject: "Konu",
    subjectPlaceholder: "ENTER DIRECTIVE >>",
    message: "Mesaj",
    messagePlaceholder: "Mesajını buraya yaz...",
    sendButton: "SEND MESSAGE //",
    sending: "ESTABLISHING HANDSHAKE...",
    success: "MESSAGE SENT //",
    error: "TRANSMISSION FAILED //",
    status: "Status:",
    statusSending: "Establishing Handshake...",
    statusSuccess: "Transmission OK",
    statusError: "Error",
    statusReady: "Ready"
  } : {
    header: "// Contact",
    name: "Name",
    namePlaceholder: "Yiğit Badik",
    email: "Email",
    emailPlaceholder: "yigitbadik@gmail.com",
    subject: "Subject",
    subjectPlaceholder: "ENTER DIRECTIVE >>",
    message: "Message",
    messagePlaceholder: "Write your message here...",
    sendButton: "SEND MESSAGE //",
    sending: "ESTABLISHING HANDSHAKE...",
    success: "MESSAGE SENT //",
    error: "TRANSMISSION FAILED //",
    status: "Status:",
    statusSending: "Establishing Handshake...",
    statusSuccess: "Transmission OK",
    statusError: "Error",
    statusReady: "Ready"
  };

  const inputClass =
    "w-full bg-slate-900/60 border border-dashed border-slate-700 px-4 py-3 text-slate-200 text-sm font-mono outline-none transition-all focus:border-[#4A7DD9] focus:bg-[#4A7DD9]/5 focus:ring-1 focus:ring-[#4A7DD9]/20 placeholder:text-slate-600";

  return (
    <div className="w-full flex items-center justify-center py-4">
      <div className="relative w-full max-w-2xl border border-dashed border-slate-700 p-6 sm:p-10">

        <CornerMarkers />

        {/* Grid background */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(to right, rgba(74,125,217,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(74,125,217,0.05) 1px, transparent 1px)`,
              backgroundSize: "32px 32px",
              WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 0% 0%, #000 50%, transparent 90%)",
              maskImage: "radial-gradient(ellipse 80% 80% at 0% 0%, #000 50%, transparent 90%)",
            }}
          />
        </div>

        <div className="relative z-10">
          {/* Header */}
          <div className="mb-10">
            <div className="flex items-center gap-2 border-b border-[#4A7DD9]/40 pb-2 mb-4">
              <div className="w-1.5 h-1.5 bg-[#4A7DD9] rounded-full animate-pulse" />
              <span className="text-[0.6rem] font-mono font-bold uppercase tracking-[0.2em] text-[#4A7DD9]">
                Secure Message Gateway
              </span>
            </div>
            <h2 className="text-2xl font-bold text-white uppercase tracking-tight">
              <span>{t.header}</span> 
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name + Email */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="relative group">
                <div className="absolute -top-px -left-px w-2 h-2 border-t-2 border-l-2 border-[#4A7DD9] opacity-0 group-focus-within:opacity-100 transition-all z-10" />
                <div className="absolute -bottom-px -right-px w-2 h-2 border-b-2 border-r-2 border-[#4A7DD9] opacity-0 group-focus-within:opacity-100 transition-all z-10" />
                <label className="block text-[10px] text-slate-500 uppercase mb-1.5 ml-2 tracking-wider">{t.name}</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder={t.namePlaceholder}
                  disabled={formState === "sending"}
                  className={inputClass}
                />
              </div>
              <div className="relative group">
                <div className="absolute -top-px -left-px w-2 h-2 border-t-2 border-l-2 border-[#4A7DD9] opacity-0 group-focus-within:opacity-100 transition-all z-10" />
                <div className="absolute -bottom-px -right-px w-2 h-2 border-b-2 border-r-2 border-[#4A7DD9] opacity-0 group-focus-within:opacity-100 transition-all z-10" />
                <label className="block text-[10px] text-slate-500 uppercase mb-1.5 ml-2 tracking-wider">{t.email}</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder={t.emailPlaceholder}
                  disabled={formState === "sending"}
                  className={inputClass}
                />
              </div>
            </div>

            {/* Subject */}
            <div className="relative group">
              <div className="absolute -top-px -left-px w-2 h-2 border-t-2 border-l-2 border-[#4A7DD9] opacity-0 group-focus-within:opacity-100 transition-all z-10" />
              <div className="absolute -bottom-px -right-px w-2 h-2 border-b-2 border-r-2 border-[#4A7DD9] opacity-0 group-focus-within:opacity-100 transition-all z-10" />
              <label className="block text-[10px] text-slate-500 uppercase mb-1.5 ml-2 tracking-wider">{t.subject}</label>
              <div className="relative">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-600 group-focus-within:text-[#4A7DD9] transition-colors">
                  <TerminalIcon />
                </span>
                <input
                  type="text"
                  name="subject"
                  required
                  value={form.subject}
                  onChange={handleChange}
                  placeholder={t.subjectPlaceholder}
                  disabled={formState === "sending"}
                  className={`${inputClass} pl-10`}
                />
              </div>
            </div>

            {/* Message */}
            <div className="relative group">
              <div className="absolute -top-px -left-px w-2 h-2 border-t-2 border-l-2 border-[#4A7DD9] opacity-0 group-focus-within:opacity-100 transition-all z-10" />
              <div className="absolute -bottom-px -right-px w-2 h-2 border-b-2 border-r-2 border-[#4A7DD9] opacity-0 group-focus-within:opacity-100 transition-all z-10" />
              <label className="block text-[10px] text-slate-500 uppercase mb-1.5 ml-2 tracking-wider">{t.message}</label>
              <textarea
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder={t.messagePlaceholder}
                disabled={formState === "sending"}
                className={`${inputClass} resize-none`}
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={formState === "sending" || !form.message.trim() || !form.name.trim()}
              className="w-full border border-dashed border-[#4A7DD9] bg-[#4A7DD9]/10 text-[#5B8DEF] font-mono font-bold uppercase text-xs tracking-[0.2em] py-4 flex items-center justify-center gap-3 transition-all hover:bg-[#4A7DD9]/20 hover:border-[#5B8DEF] disabled:opacity-40 disabled:cursor-not-allowed active:scale-[0.99]"
              style={{ boxShadow: "4px 4px 0 #1e3a5f" }}
            >
              <span className={formState === "sending" ? "animate-bounce" : ""}>
                <SendIcon />
              </span>
              <span>
                {formState === "sending" ? t.sending :
                 formState === "success" ? t.success :
                 formState === "error"   ? t.error :
                 t.sendButton}
              </span>
            </button>
          </form>

          {/* Status line */}
          <div className="mt-6 flex items-center justify-between">
            <span className="text-[0.55rem] font-mono uppercase tracking-widest text-slate-600">
              {t.status}{" "}
              {formState === "sending" && <span className="text-yellow-500">{t.statusSending}</span>}
              {formState === "success" && <span className="text-green-500 border border-green-500 px-1">{t.statusSuccess}</span>}
              {formState === "error"   && <span className="text-red-500 border border-red-500 px-1">{t.statusError}</span>}
              {formState === "idle"    && <span className="text-[#4A7DD9] border border-[#4A7DD9] px-1">{t.statusReady}</span>}
            </span>
            <span className="text-[0.55rem] font-mono text-slate-700">
              SECURE_ID: 0x{secureId || "------"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}