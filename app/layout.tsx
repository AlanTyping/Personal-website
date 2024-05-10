import './globals.css';

export const metadata = {
  title: 'alantyping',
  description: 'Personal Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/lion.svg" type="image/svg+xml" />
      </head>
      <body>{children}</body>
    </html>
  )
}
