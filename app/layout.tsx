import { Inter } from 'next/font/google'
import { Providers } from './providers'
import { Analytics } from '@vercel/analytics/react';
import './/globals.css';


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'GCSE Doctor',
  description: 'Affordable, high-quality tutoring for GCSE Sciences and Maths.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
            {children}
            <Analytics />
        </Providers>
      </body>
    </html>
  )
}
