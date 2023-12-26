import type { Metadata } from 'next'
import { Hind } from 'next/font/google'
import './globals.scss'

export const metadata: Metadata = {
  title: 'Home Decor App',
  description: 'Fullfill your dream home at one place : Home Decor',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="">
        {children}
      </body>
    </html>
  )
}
