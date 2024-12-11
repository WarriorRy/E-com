// tailwind.config.js
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2563EB',     // A brighter blue for primary elements, good for call-to-action buttons.
        highlight: '#EFF6FF',   // Light blue highlight for soft accents, enhancing the white background.
        bgGray: '#F3F4F6',      // Soft gray for subtle backgrounds or sections, creating depth without overwhelming the design.
        danger: '#EF4444',      // Red for critical actions like deleting or canceling, attention-grabbing but not harsh.
        secondaryGray: '#9CA3AF', // Muted gray for less prominent buttons or secondary actions.
      },
    },
  },
  plugins: [],
}
