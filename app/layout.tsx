import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import SilkBackground from '@/components/silk-background'
import './globals.css'

export const metadata: Metadata = {
  title: ' isso',
  
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <SilkBackground />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
