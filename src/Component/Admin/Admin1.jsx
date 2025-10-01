// LoginModal.jsx
import React, { useState, useEffect, useRef } from "react";

export default function LoginModal({ isOpen, onClose, onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const modalRef = useRef(null);
  const firstFieldRef = useRef(null);

  useEffect(() => {
    // focus first input when modal opens
    if (isOpen) {
      setTimeout(() => firstFieldRef.current?.focus(), 50);
      // prevent background scroll
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => (document.body.style.overflow = "");
  }, [isOpen]);

  useEffect(() => {
    // close on ESC
    function onKey(e) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  function validate() {
    const errs = {};
    if (!email) errs.email = "Fadlan geli email-ka";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      errs.email = "Email sax ah geli";
    if (!password) errs.password = "Fadlan geli password";
    else if (password.length < 6)
      errs.password = "Password waa inuu ka yaryahay 6 xaraf";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) return;
    // example fake login flow (replace with real API call)
    onLogin?.({ email, password });
    // clear fields and close
    setEmail("");
    setPassword("");
    setErrors({});
    onClose();
  }

  // click outside to close
  function handleBackdropClick(e) {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose();
    }
  }

  if (!isOpen) return null;

  return (
    // backdrop
    <div
      aria-modal="true"
      role="dialog"
      aria-label="Login"
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
      onMouseDown={handleBackdropClick}
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity" />

      <div
        ref={modalRef}
        className="relative z-10 w-full max-w-md mx-auto bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all"
        onMouseDown={(e) => e.stopPropagation()}
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Soo gal akoonkaaga</h3>
            <button
              onClick={onClose}
              aria-label="Close login"
              className="rounded-md p-1 hover:bg-gray-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                ref={firstFieldRef}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`mt-1 block w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                  errors.email ? "border-red-400" : "border-gray-200"
                }`}
                placeholder="you@example.com"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              {errors.email && (
                <p id="email-error" className="mt-1 text-sm text-red-600">
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`mt-1 block w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                  errors.password ? "border-red-400" : "border-gray-200"
                }`}
                placeholder=""
                aria-invalid={!!errors.password}
                aria-describedby={errors.password ? "pw-error" : undefined}
              />
              {errors.password && (
                <p id="pw-error" className="mt-1 text-sm text-red-600">
                  {errors.password}
                </p>
              )}
            </div>

            <div className="flex items-center justify-between">
              <label className="inline-flex items-center gap-2 text-sm">
                <input type="checkbox" className="h-4 w-4 rounded border-gray-300" />
                <span className="text-gray-600">Xasuuso</span>
              </label>
              <button
                type="button"
                onClick={() => alert("Link dib u dhis password halkan geli...")}
                className="text-sm text-blue-600 hover:underline"
              >
                Ilowday password?
              </button>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-white font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                Gal
              </button>
            </div>
          </form>

          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">
              Ama isticmaal
              <button
                onClick={() => alert("Social login placeholder")}
                className="ml-2 font-medium text-blue-600 hover:underline"
              >
                Google
              </button>
            </p>
          </div>
        </div>

        <div className="border-t px-6 py-3 bg-gray-50 text-sm text-center">
          <span>Ma xisaab cusub baa? </span>
          <button
            onClick={() => {
              onClose();
              setTimeout(() => alert("Fur sign-up page..."), 150);
            }}
            className="ml-1 font-medium text-blue-600 hover:underline"
          >
            Is diiwaangeli
          </button>
        </div>
      </div>
    </div>
  );
}