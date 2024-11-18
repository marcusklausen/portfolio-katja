import type { Metadata } from "next";
import "./globals.css";
import Navigation from "./components/navigation";
import { campton } from "./fonts";

export const metadata: Metadata = {
  title: "Katja Kurz Levring - UX/UI Designer",
  description:
    "UX/UI designer med fokus på brugeroplevelser der forener teknologi med brugernes behov. Se portfolio med projekter fra DCC Energi, CPH Business, Scleroseforeningen og flere.",
  openGraph: {
    title: "Katja Kurz Levring - UX/UI Designer",
    description:
      "UX/UI designer med fokus på brugeroplevelser der forener teknologi med brugernes behov",
    url: "https://katjakurz.dk",
    siteName: "Katja Kurz Levring",
    images: [
      {
        url: "/images/og-image.jpg", // You'll need to add this image
        width: 1200,
        height: 630,
      },
    ],
    locale: "da_DK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Katja Kurz Levring - UX/UI Designer",
    description:
      "UX/UI designer med fokus på brugeroplevelser der forener teknologi med brugernes behov",
    images: ["/images/og-image.jpg"], // Same as OG image
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${campton.variable} antialiased`}>
        <Navigation />
        {children}
        <div className="flex flex-col items-center  mt-10 md:mt-24 mb-10">
          <div className="text-center px-4 text-sm md:text-xl  leading-7 text-black">
            © KATJA KURZ LEVRING 2024 ALL RIGHTS RESERVED.{" "}
            <br className="hidden md:block" />
            ALL COMPANY LOGOS BELONG TO THEIR RESPECTIVE OWNERS.
          </div>
          <div className="mt-3">
            <a href="https://makl.dk" className="hover:underline">
              Developed by makl 🧑🏼‍💻
            </a>
          </div>
        </div>
      </body>
    </html>
  );
}
