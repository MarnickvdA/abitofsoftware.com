const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {},
        fontFamily: {
            'sans': ["Courier New", "monospace"],
        }
    },
    plugins: [
        require('@tailwindcss/aspect-ratio'),
    ],
}
