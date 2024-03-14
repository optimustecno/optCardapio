import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        colors: {
            destaque: "var(--cor-destaque)",
            fonte: "var(--cor-fonte)",
            primaria: "var(--cor-primaria)",
            secundaria: "var(--cor-secundaria)",
            botao: "var(--cor-botao)"
        },
        extend: {
            backgroundImage: {
                fundoGradient: "linear-gradient(160deg,var(--tw-gradient-stops))"
            },
            borderWidth: {
                "1": "1px"
            }
        },
    },
    plugins: [],
};
export default config;
