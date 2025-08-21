// Theme colors following 60-30-10 rule
export const THEME_COLORS = {
  primary: "#0A0A0A", // 60% Black
  secondary: "#004D61", // 30% Teal Blue
  accent: "#FFFFFF", // 10% White
} as const

// Navigation items
export const NAV_ITEMS = [
  { href: "/", label: "Home", icon: "Home" },
  { href: "/sobre", label: "Sobre", icon: "Building2" },
  { href: "/sistemas", label: "Sistemas", icon: "Code2" },
  { href: "/contato", label: "Contato", icon: "MessageSquare" },
  { href: "/suporte", label: "Suporte", icon: "Headset" },
] as const
