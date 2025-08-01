import type { Config } from "tailwindcss";

export default {
	darkMode: "class",
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px"
			}
		},
		extend: {
			colors: {
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))"
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))"
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))"
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))"
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))"
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))"
				},
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))"
				},
				uqrl: {
					orange: "hsl(var(--uqrl-orange))",
					metallic: "hsl(var(--uqrl-metallic))",
					glass: "hsl(var(--uqrl-glass))",
					"glass-border": "hsl(var(--uqrl-glass-border))"
				}
			},
			fontFamily: {
				display: ["Space Grotesk", "system-ui", "sans-serif"],
				body: ["Inter", "system-ui", "sans-serif"],
				mono: ["JetBrains Mono", "Consolas", "monospace"]
			},
			backgroundImage: {
				"gradient-primary": "var(--gradient-primary)",
				"gradient-glass": "var(--gradient-glass)",
				"gradient-metallic": "var(--gradient-metallic)"
			},
			boxShadow: {
				glass: "var(--shadow-glass)",
				glow: "var(--shadow-glow)",
				subtle: "var(--shadow-subtle)"
			},
			animation: {
				"fade-in": "fadeIn 0.5s ease-out",
				"scale-in": "scaleIn 0.3s ease-out",
				"glow": "glow 2s ease-in-out infinite alternate",
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out"
			},
			keyframes: {
				fadeIn: {
					"0%": { opacity: "0", transform: "translateY(20px)" },
					"100%": { opacity: "1", transform: "translateY(0)" }
				},
				scaleIn: {
					"0%": { opacity: "0", transform: "scale(0.95)" },
					"100%": { opacity: "1", transform: "scale(1)" }
				},
				glow: {
					"0%": { boxShadow: "0 0 20px hsl(38 100% 52% / 0.3)" },
					"100%": { boxShadow: "0 0 30px hsl(38 100% 52% / 0.6)" }
				},
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" }
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" }
				}
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)"
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config
