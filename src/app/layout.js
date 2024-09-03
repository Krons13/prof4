import { Inter } from 'next/font/google'
import './globals.css'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Страховой вгент',
  description: 'Страхование с нами - ваш ключ к беззаботному завтрашнему дню',
  favicon: '/assets/favicon.ico'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href={metadata.favicon} />
      <body className={inter.className}>{children}</body>
    </html>
  )
}
