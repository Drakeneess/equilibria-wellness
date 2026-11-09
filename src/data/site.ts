export const brand = {
  name: "Equilibria Wellness",
  institutionName: "Equilibria",
  institutionUrl: "https://www.equilibria.cloud/",
  heroImage: "/images/hero-wellness.webp",
} as const;

export const pillars = [
  {
    number: "01",
    key: "sonido",
    label: "Escuchar",
    title: "El lenguaje del sonido",
    description:
      "Los cuencos y sus resonancias nos invitan a hacer una pausa y prestar atención al momento presente.",
  },
  {
    number: "02",
    key: "presencia",
    label: "Habitar",
    title: "El valor de la presencia",
    description:
      "Un espacio para reducir el ritmo, observar con calma y encontrar momentos propios de quietud.",
  },
  {
    number: "03",
    key: "entorno",
    label: "Conectar",
    title: "Una atmósfera consciente",
    description:
      "Texturas naturales, iluminación envolvente y detalles sensoriales para acompañar la experiencia.",
  },
] as const;

export const principles = [
  { index: "I", title: "Pausa", text: "Regalarse un instante fuera del ruido cotidiano." },
  { index: "II", title: "Escucha", text: "Atender al sonido, al silencio y a uno mismo." },
  { index: "III", title: "Equilibrio", text: "Cultivar una relación más consciente con el propio bienestar." },
] as const;

export const faqs = [
  {
    question: "¿Qué es Equilibria Wellness?",
    answer:
      "Es una propuesta de bienestar holístico de la familia Equilibria. Su identidad gira en torno a la calma, la escucha y las experiencias sensoriales.",
  },
  {
    question: "¿Qué lugar ocupan los cuencos en la experiencia?",
    answer:
      "Los cuencos son parte del universo sonoro y visual de Wellness. Sus vibraciones y resonancias se presentan como una experiencia contemplativa; no sustituyen una evaluación o tratamiento médico.",
  },
  {
    question: "¿Puedo reservar una sesión?",
    answer:
      "La agenda y el catálogo definitivo de experiencias se anunciarán cuando estén confirmados. Por ahora, esta página presenta el enfoque de la marca.",
  },
] as const;
