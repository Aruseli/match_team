import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
 
export const inter = Inter({
  // subsets: ['latin'],
  display: 'swap',
})
 
export const tacticFont = localFont({
  src: '../public/TacticSans.woff2',
  variable: '--font-tactic'
})