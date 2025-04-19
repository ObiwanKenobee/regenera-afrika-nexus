
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
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
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// SlumTech Regenera custom colors
				"st-green": {
					DEFAULT: "#2A603B",
					50: "#E7F1EA",
					100: "#CFE3D5",
					200: "#9FC7AB",
					300: "#6FAB81",
					400: "#3F8F56",
					500: "#2A603B",
					600: "#1F472C",
					700: "#152F1D",
					800: "#0A170E",
					900: "#000000"
				},
				"st-orange": {
					DEFAULT: "#BF4E30",
					50: "#F8E8E3",
					100: "#F1D0C8",
					200: "#E3A290",
					300: "#D67459",
					400: "#C85E3B",
					500: "#BF4E30",
					600: "#8F3B24",
					700: "#5F2718",
					800: "#30140C",
					900: "#000000"
				},
				"st-teal": {
					DEFAULT: "#2A6365",
					50: "#E7EEEE",
					100: "#CFDDDD",
					200: "#9FBBBC",
					300: "#6F9A9A",
					400: "#3F7879",
					500: "#2A6365",
					600: "#1F494A",
					700: "#153132",
					800: "#0A1819",
					900: "#000000"
				},
				"st-ochre": {
					DEFAULT: "#D79922",
					50: "#FAF0E1",
					100: "#F6E2C2",
					200: "#EDC585",
					300: "#E4A848",
					400: "#DB8C2A",
					500: "#D79922",
					600: "#A1721A",
					700: "#6C4C11",
					800: "#362609",
					900: "#000000"
				},
				"st-coral": {
					DEFAULT: "#FF6F59",
					50: "#FFEEEA",
					100: "#FFDDD5",
					200: "#FFBCAB",
					300: "#FF9B81",
					400: "#FF7A56",
					500: "#FF6F59",
					600: "#BF5343",
					700: "#7F372C",
					800: "#401C16",
					900: "#000000"
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				"accordion-down": {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				"accordion-up": {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				"float": {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				"pulse-slow": {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.8' }
				}
			},
			animation: {
				"accordion-down": 'accordion-down 0.2s ease-out',
				"accordion-up": 'accordion-up 0.2s ease-out',
				"float": 'float 6s ease-in-out infinite',
				"pulse-slow": 'pulse-slow 4s ease-in-out infinite'
			},
			boxShadow: {
				'neo': '6px 6px 0px 0px rgba(0,0,0,0.9)',
				'neo-sm': '4px 4px 0px 0px rgba(0,0,0,0.9)',
				'neo-lg': '8px 8px 0px 0px rgba(0,0,0,0.9)',
				'neo-xl': '12px 12px 0px 0px rgba(0,0,0,0.9)',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
