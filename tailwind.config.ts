import type { Config } from "tailwindcss";
const { fontFamily } = require("tailwindcss/defaultTheme");

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        screens: {
            sm: "425px",
            md: "750px",
            lg: "976px",
            xl: "1440px",
        },
        container: {
            center: true,
        },
        extend: {
            fontFamily: {
                arabicLight: [
                    "var(--din-next-lt-arabic-light)",
                    ...fontFamily.sans,
                ],
                arabic: [
                    "var(--din-next-lt-arabic-regular)",
                    ...fontFamily.sans,
                ],
                arabicMedium: [
                    "var(--din-next-lt-arabic-medium)",
                    ...fontFamily.sans,
                ],
                arabicBold: [
                    "var(--din-next-lt-arabic-bold)",
                    ...fontFamily.sans,
                ],
            },
            // colors codes added
            colors: {
                transparent: "transparent",
                black: {
                    primary: "#2F2F2F",
                    secondary: "#333333",
                    400: "#494949",
                    500: "#242424",
                    600: "#5C5E64",
                    700: "#000000",
                },
                white: "#FFFFFF",
                ash: {
                    100: "#F9FAFB",
                    200: "#DEDEDE",
                    300: "#F4F4F4",
                    400: "#E7E7E7",
                    500: "#9E9E9E",
                    600: "#72767C",
                    700: "#494949",
                },
                gray: {
                    50: "#9E9E9E",
                    100: "#B1B1B1",
                    200: "#A8A8A8",
                    300: "#7A7A7A",
                    400: "#757575",
                    500: "#777777",
                    600: "#8F8F8F",
                    700: "#B3B3B3",
                },
                green: {
                    400: "#16AD64",
                },
                red: {
                    200: "#F6C6C6", //#DB1D1D40/25%
                    300: "#FF5964",
                    400: "#FF2828",
                    600: "#DB1D1D",
                    700: "#F00",
                },
                yellow: {
                    400: "#FF5B5B",
                    500: "#F6CA37",
                    600: "#F3C078",
                    700: "#E0B315",
                },
                blue: {
                    100: "#E7F6FC",
                    200: "#D5E8F3", // 2B8DC5/20%
                    300: "#12A8E0",
                    400: "#2B8DC5",
                    500: "#96C9E7",
                },
                cyan: "#237A6E",
                facebook: "#3A559F",
                google: "#ED5353",
            },
        },
    },
    plugins: [],
};
export default config;
