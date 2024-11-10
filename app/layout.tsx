import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.scss'

export const metadata: Metadata = {
	title: 'AdizCoin',
	description: 'AdizCoin clicker',
}

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={`${inter.className} antialiased`}>{children}</body>
		</html>
	)
}
