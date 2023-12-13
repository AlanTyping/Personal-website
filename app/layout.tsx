import './globals.css';

export const metadata = {
  title: 'AlanTyping',
  description: 'Portfolio showcase',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
