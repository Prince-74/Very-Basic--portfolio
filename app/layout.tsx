import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'Prince Goyal — Software Engineer Portfolio',
  description:
    'Full-stack software engineer portfolio — AI products, cinematic UX, React engineering, and enterprise-grade systems.',
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
