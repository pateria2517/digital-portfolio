import type { Metadata, Viewport } from 'next'
import { Geist, Fraunces } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
})
const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
})

const SITE_URL = 'https://shivanshpateria.vercel.app'
const SITE_NAME = 'Shivansh Pateria'
const TITLE = 'Shivansh Pateria - Strategy, content & athletic discipline'
const DESCRIPTION =
  'Portfolio of Shivansh Pateria, an undergraduate at TAPMI Bengaluru. Member of the StratIX consulting club, content at AceIPM, and a national-level freestyle roller skater working across strategy, content and marketing.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: '%s - Shivansh Pateria',
  },
  description: DESCRIPTION,
  applicationName: SITE_NAME,
  generator: 'v0.app',
  keywords: [
    'Shivansh Pateria',
    'TAPMI Bengaluru',
    'StratIX consulting club',
    'AceIPM',
    'business strategy',
    'content creation',
    'marketing',
    'fintech',
    'freestyle roller skating',
    'case competition',
    'student portfolio',
  ],
  authors: [{ name: 'Shivansh Pateria' }],
  creator: 'Shivansh Pateria',
  publisher: 'Shivansh Pateria',
  category: 'Portfolio',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'profile',
    locale: 'en_US',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: TITLE,
    description: DESCRIPTION,
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: '/sunflower.jpg',
    apple: '/sunflower.jpg',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FFFFFF' },
    { media: '(prefers-color-scheme: dark)', color: '#FFFFFF' },
  ],
  width: 'device-width',
  initialScale: 1,
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Shivansh Pateria',
  url: SITE_URL,
  email: 'pateriashivansh@gmail.com',
  jobTitle: 'Undergraduate student',
  description: DESCRIPTION,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Bengaluru',
    addressCountry: 'IN',
  },
  alumniOf: [
    {
      '@type': 'CollegeOrUniversity',
      name: 'T. A. Pai Management Institute, Bengaluru',
    },
    {
      '@type': 'HighSchool',
      name: 'Mayoor School, Noida',
    },
  ],
  sameAs: ['https://www.linkedin.com/in/shivanshpateria-2b5a01269'],
  knowsAbout: ['Business strategy', 'Content creation', 'Marketing', 'Fintech', 'Freestyle roller skating'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${fraunces.variable} bg-[#FFFFFF]`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased bg-[#FFFFFF] text-[#0A0A0A]">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
