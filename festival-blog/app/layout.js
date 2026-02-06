import './globals.css'

export const metadata = {
  title: 'Common Grounds Community Festival',
  description: 'A celebration of community, sustainability & connection at the Lookout, Otford',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Crimson+Text:wght@400;600&family=Darker+Grotesque:wght@300;400;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
