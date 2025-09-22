import lynxPreset from '@lynx-js/tailwind-preset-canary'

/** @type {import('tailwindcss').Config} */
export default {
  presets: [lynxPreset], // Use the preset
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
}
