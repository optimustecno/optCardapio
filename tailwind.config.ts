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
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            borderWidth: {
                "1": "1px"
            }
        },
    },
    plugins: [],
};
export default config;
