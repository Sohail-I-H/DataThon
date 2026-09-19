/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      backgroundColor: {
        base: "#FDFBF7",
      },
      colors: {
        canvas: "#FDFBF7",
        "base-warm": "#F5F0E6",
        surface: "#FFFFFF",
        "surface-soft": "#F8F4EC",
        "surface-muted": "#EFE8DC",
        coffee: {
          50: "#FAF6F2",
          100: "#F2EAE1",
          200: "#E4D5C6",
          300: "#C9AD96",
          400: "#AA876B",
          500: "#8B684E",
          600: "#6F523D",
          700: "#543D2D",
          800: "#3D2B1F",
          900: "#2B1D14",
          950: "#1A120B",
          DEFAULT: "#3D2B1F",
        },
        caramel: {
          DEFAULT: "#B36B39",
          light: "#E3A374",
          dark: "#8F4E22",
        },
        sage: {
          DEFAULT: "#3E6651",
          light: "#5B8B70",
          soft: "#E8F0EB",
        },
        rust: {
          DEFAULT: "#B44331",
          soft: "#F9ECE9",
        },
        amber: {
          warm: "#C97A2C",
          soft: "#FDF4EA",
        },
        "text-primary": "#201813",
        "text-secondary": "#5C4E44",
        "text-muted": "#8A796E",
        "border-subtle": "#E8E0D5",
        "border-medium": "#D8CDBC",
      },
      fontFamily: {
        display: ["'Space Grotesk'", "'Plus Jakarta Sans'", "sans-serif"],
        serif: ["'Fraunces'", "Georgia", "serif"],
        body: ["'Inter'", "'Plus Jakarta Sans'", "sans-serif"],
      },
      boxShadow: {
        card: "0 2px 10px -2px rgba(43, 29, 20, 0.05), 0 12px 28px -6px rgba(43, 29, 20, 0.06)",
        "card-hover": "0 8px 24px -4px rgba(43, 29, 20, 0.08), 0 20px 36px -8px rgba(43, 29, 20, 0.09)",
        soft: "0 1px 3px rgba(43, 29, 20, 0.04), 0 4px 12px rgba(43, 29, 20, 0.03)",
      },
    },
  },
  plugins: [],
};
