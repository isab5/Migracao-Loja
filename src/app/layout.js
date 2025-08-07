import localFont from "next/font/local";
import "./globals.css";


const Montserrat = localFont({
    src: [
        {
            path: "../../public/fonts/CormorantGaramond-regular.ttf",
            weight: "400",
            style: "normal",
        },
        {
            path: "../../public/fonts/CormorantGaramond-Bold.ttf",
            weight: "700",
            style: "normal",
        },
    ],
    variable: "--font-montserrat",
    display: "swap",
});

export const metadata = { 
    title: "Loja de Eletrônicos",
    description: "Os melhores produtos com os melhores preços!",
    icons: {
        icon: "/icons/smartphones.png",
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="pt-BR" className={Montserrat.variable}>
            <body className={Montserrat.className}>
                <main>{children}</main>
            </body>
        </html>
    );
}