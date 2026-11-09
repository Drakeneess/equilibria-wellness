"use client";

import { useState } from "react";
import { brand } from "@/data/site";

const navigation = [
  { href: "#inicio", label: "Inicio" },
  { href: "#filosofia", label: "Filosofía" },
  { href: "#universo", label: "Nuestro universo" },
  { href: "#preguntas", label: "Preguntas" },
];

export function WellnessHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="shell header-content">
        <a href="#inicio" className="brand" onClick={() => setOpen(false)} aria-label="Equilibria Wellness, ir al inicio">
          <img className="brand-logo" src="/brand/equilibria-wellness.svg" width={260} height={77} alt="" aria-hidden="true" />
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="primary-navigation"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((value) => !value)}
        >
          <span /><span /><span />
        </button>

        <nav id="primary-navigation" className={`primary-navigation${open ? " is-open" : ""}`} aria-label="Navegación principal">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>
          ))}
          <a className="nav-institution" href={brand.institutionUrl} target="_blank" rel="noopener noreferrer">
            Equilibria <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
