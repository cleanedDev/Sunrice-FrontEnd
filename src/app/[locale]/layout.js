import "../globals.css"
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import Head from 'next/head';
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";





export const metadata = {
  title: "Sunrise Adventure In Magbay",
  description: "Reserva tus tours en MagBay para una aventura única en el mar.",

};



export default async function RootLayout({ children, params }) {
  // Asegurar que el locale es válido
  
  const { locale } = await params;
  if (!routing.locales.includes(locale)) {
    notFound();
  }

  // Obtener los mensajes de traducción
  const messages = await getMessages();

  return (
    <html lang={locale}>
      
      <body className='bg-blueSunrise font-poppins'>
      <Head>
            <title>{metadata.title}</title>
            <meta name="description" content={metadata.description} />
            <meta name="keywords" content="sport fishing, fishing tours, MagBay, Bahia Magdalena tours, fishing adventure, fishing charters, marine tours, fishing vacations, fishing in Mexico, ocean tours, fishing tours in Bahia Magdalena, fishing charters MagBay, fishing trips Bahia Magdalena, fishing and lodging in MagBay, MagBay fishing and accommodation, fishing vacations with lodging, ocean fishing and hotel packages, MagBay fishing getaway, Bahia Magdalena sport fishing, Puerto san carlos, Hotel prados, hospedaje, " />
            <meta property="og:title" content={metadata.title} />
            <meta property="og:description" content={metadata.description} />
            <meta property="og:image" content="/images/fishing-tours.jpg" />
            <meta name="robots" content="index, follow" />
            <meta httpEquiv="Content-Language" content="en,es" />
            <meta name="twitter:title" content={metadata.title} />
            <meta name="twitter:description" content={metadata.description} />
            <meta name="twitter:image" content="/images/fishing-tours.jpg" />
            <meta name="twitter:card" content="summary_large_image" />
            
    
            {/* <link rel="alternate" href="https://www.sunriseadventure.com/es" hreflang="es" />
            <link rel="alternate" href="https://www.sunriseadventure.com/en" hreflang="en" /> */}
      </Head>

        <NextIntlClientProvider messages={messages}>
        <Header/>
        <main className="flex flex-col -mt-[92px] h-full min-h-screen max-sm:-mt-[116px]">
                {children}
        </main>
        <Footer/>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
