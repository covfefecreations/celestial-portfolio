import type { Metadata } from 'next'
import './globals.css' //

export const metadata: Metadata = {
  title: 'Celestial Portfolio',
  description: 'An interactive 3D portfolio.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-black antialiased">{children}</body>
    </html>
  )
}
