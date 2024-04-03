import type { Metadata } from 'next'
import './globals.css'
import { NextUIProvider } from '@nextui-org/react'
 
export const metadata: Metadata = {
  title: 'Junior Rodrigues - Portfolio',
  description: 'Junior Rodrigues - Portfolio',
}
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={``}>{children}</body>
    </html>
  )
}