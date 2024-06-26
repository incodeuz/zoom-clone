import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { ClerkProvider } from '@clerk/nextjs';
import { Inter } from 'next/font/google';

import '@stream-io/video-react-sdk/dist/css/styles.css';
import 'react-datepicker/dist/react-datepicker.css';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Medify meet app',
  description: 'Video calling App',
  icons: {
    icon: '/icons/logo.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html suppressHydrationWarning={true} lang="en">
      <ClerkProvider
        appearance={{
          layout: {
            socialButtonsVariant: 'iconButton',
            // logoImageUrl: "/icons/yoom-logo.svg",
          },
          variables: {
            colorText: '#fff',
            colorPrimary: '#0E78F9',
            colorBackground: '#1C1F2E',
            colorInputBackground: '#252A41',
            colorInputText: '#fff',
          },
        }}
      >
        <body
          suppressHydrationWarning={true}
          className={`${inter.className} bg-dark-2`}
        >
          <div
            suppressHydrationWarning={true}
            data-new-gr-c-s-check-loaded={true}
            data-gr-ext-installed={true}
          >
            <Toaster />
            {children}
          </div>
        </body>
      </ClerkProvider>
    </html>
  );
}
