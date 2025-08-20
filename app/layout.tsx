import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ZUL ENERGY - Sustainable Energy Solutions',
  description: 'Leading provider of sustainable energy solutions and renewable technologies.',
  icons: {
    icon: '/logo/fav-icon.svg',
    shortcut: '/logo/fav-icon.svg',
    apple: '/logo/fav-icon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <head>
        <link rel="icon" type="image/svg+xml" href="/logo/fav-icon.svg" />
        <link rel="icon" type="image/x-icon" href="/logo/fav-icon.svg" />
      </head>
      <body className={`${inter.className} overflow-x-hidden`}>{children}</body>
    </html>
  )
}
