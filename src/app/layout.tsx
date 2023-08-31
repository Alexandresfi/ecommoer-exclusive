import { Header } from '@/components/Header';
import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { Footer } from '@/components/Footer';
import { AppProvider } from '@/hooks';

const poppins = Poppins({
  weight: ['400', '500', '600'],
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'Exlusive',
  description: 'Loja loja digital'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <main>
          <AppProvider>
            <Header />
            <div>{children}</div>
            <Footer />
          </AppProvider>
        </main>
      </body>
    </html>
  );
}
