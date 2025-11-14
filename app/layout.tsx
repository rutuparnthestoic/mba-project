import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Zenith Journeys',
  description: 'Disconnect to Reconnect',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
      <link rel="shortcut icon" href="/public/logo-z.jpeg" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
