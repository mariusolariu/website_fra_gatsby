import React, { useEffect, useRef, useState } from "react";
import { SettingsIcon } from "./Icons";

const SCALE_MAP = { normal: 0.78, large: 0.88, xl: 1 };
const STORAGE_KEY_SIZE = "a11y.textSize";
const STORAGE_KEY_CONTRAST = "a11y.highContrast";
const DEFAULT_SIZE = "large";

function applySize(size) {
  if (typeof document === "undefined") return;
  document.documentElement.style.setProperty("--scale", SCALE_MAP[size] ?? 1);
}

function applyContrast(on) {
  if (typeof document === "undefined") return;
  if (on) document.documentElement.setAttribute("data-contrast", "high");
  else document.documentElement.removeAttribute("data-contrast");
}

function readInitialSize() {
  if (typeof window === "undefined") return DEFAULT_SIZE;
  const stored = window.localStorage.getItem(STORAGE_KEY_SIZE);
  return stored && SCALE_MAP[stored] !== undefined ? stored : DEFAULT_SIZE;
}

function readInitialContrast() {
  if (typeof window === "undefined") return false;
  return window.localStorage.getItem(STORAGE_KEY_CONTRAST) === "true";
}

export default function AccessibilityMenu() {
  const [open, setOpen] = useState(false);
  const [size, setSize] = useState(DEFAULT_SIZE);
  const [contrast, setContrast] = useState(false);
  const wrapRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    setSize(readInitialSize());
    setContrast(readInitialContrast());
  }, []);

  useEffect(() => {
    applySize(size);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY_SIZE, size);
    }
  }, [size]);

  useEffect(() => {
    applyContrast(contrast);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY_CONTRAST, contrast ? "true" : "false");
    }
  }, [contrast]);

  useEffect(() => {
    if (!open) return undefined;

    const handleKey = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        triggerRef.current && triggerRef.current.focus();
      }
    };
    const handleClickOutside = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", handleKey);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <div className="a11y-wrap" ref={wrapRef}>
      <button
        type="button"
        ref={triggerRef}
        className="a11y-trigger"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label="Setări de accesibilitate"
        onClick={() => setOpen((v) => !v)}
      >
        <SettingsIcon />
        <span>Aa</span>
      </button>
      {open && (
        <div className="a11y-panel" role="menu">
          <div className="a11y-section">
            <h4>Mărime text</h4>
            <label className="radio">
              <input
                type="radio"
                name="a11y-size"
                value="normal"
                checked={size === "normal"}
                onChange={() => setSize("normal")}
              />
              <span>Normal</span>
            </label>
            <label className="radio">
              <input
                type="radio"
                name="a11y-size"
                value="large"
                checked={size === "large"}
                onChange={() => setSize("large")}
              />
              <span>Mare</span>
            </label>
            <label className="radio">
              <input
                type="radio"
                name="a11y-size"
                value="xl"
                checked={size === "xl"}
                onChange={() => setSize("xl")}
              />
              <span>Foarte mare</span>
            </label>
          </div>
          <div className="a11y-section">
            <h4>Contrast</h4>
            <label className="toggle">
              <input
                type="checkbox"
                checked={contrast}
                onChange={(e) => setContrast(e.target.checked)}
              />
              <span>Contrast ridicat</span>
            </label>
          </div>
        </div>
      )}
    </div>
  );
}
