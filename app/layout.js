import { Nunito, Marcellus } from "next/font/google";
import "./globals.css";
import '@fontsource/nunito';
import '@fontsource/marcellus';
import Header from './components/Header';
import Footer from './components/Footer';

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  display: "swap",
});

const marcellus = Marcellus({
  variable: "--font-marcellus",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata = {
  title: "Floki | Magical Story Creator",
  description: "Embark on a magical journey with Floki, where dreams come to life through enchanting personalized stories for children and families!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="theme-color" content="#FF6887" />
      </head>
      <body className={`${nunito.variable} ${marcellus.variable}`}>
        <Header />
        <main style={{ paddingTop: '70px' }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
